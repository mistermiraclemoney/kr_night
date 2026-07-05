const crypto = require("node:crypto");
const { db, uid, now } = require("./db");
const qrtoken = require("./qrtoken");

const SESSION_DAYS = 90;
const CHECKIN_HOURS = 6; // lounge access window (business plan 4.3)
const LOUNGE_MESSAGE_TTL_HOURS = 24; // auto-delete (business plan 4.3)
// Self check-in is a demo/dev convenience only. Production default is
// staff-scan-only (business plan 4.2: verified visits are the product).
const ALLOW_SELF_CHECKIN = process.env.ALLOW_SELF_CHECKIN === "1";
const DEV_MODE = process.env.DEV_MODE === "1";
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "")
  .split(",")
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

// in-memory sliding-window rate limiter (per key)
const rateBuckets = new Map();
function rateLimit(key, maxHits, windowMs, message) {
  const nowTs = Date.now();
  const hits = (rateBuckets.get(key) || []).filter((t) => nowTs - t < windowMs);
  if (hits.length >= maxHits) throw new ApiError(429, message || "Too many requests — slow down");
  hits.push(nowTs);
  rateBuckets.set(key, hits);
  if (rateBuckets.size > 10000) rateBuckets.clear(); // crude memory cap
}

// community safety: basic banned-word screen (extend per ops policy)
const BANNED_PATTERNS = [
  /씨발|시발|병신|좆|니미|개새끼/i,
  /f+u+c+k+|c+u+n+t|n+i+g+g/i,
  /死ね|くたばれ/,
  /操你|傻逼|去死/,
];
function screenMessage(body) {
  return BANNED_PATTERNS.some((re) => re.test(body));
}

// Business plan 6.4 pricing hypotheses.
const PLANS = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    features: ["Venue page", "Event submission", "Map links", "Basic check-in counts"],
    target: "초기 공급 확보 · Early supply",
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 99000,
    features: ["Coupons", "Basic stats dashboard", "Multilingual info management", "Priority listing in area"],
    target: "일반 바·클럽 · Standard bars & clubs",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 249000,
    features: [
      "Recommended placement",
      "CRM & repeat-visit analytics",
      "Lounge management",
      "Advanced stats",
      "Route & campaign slots",
    ],
    target: "핵심 제휴 매장 · Key partner venues",
  },
  {
    id: "campaign",
    name: "Campaign",
    monthlyPrice: 300000,
    perCampaign: true,
    features: ["Banner + Route feature", "Content production", "On-site QR co-promotion"],
    target: "이벤트·주류 브랜드 · Events & brands",
  },
];

// ---------- helpers ----------

class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 32).toString("hex");
}

function createSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  db.prepare(
    "INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)"
  ).run(token, userId, now(), now() + SESSION_DAYS * 86400 * 1000);
  return token;
}

function userByToken(token) {
  if (!token) return null;
  const session = db
    .prepare("SELECT * FROM sessions WHERE token = ? AND expires_at > ?")
    .get(token, now());
  if (!session) return null;
  return db.prepare("SELECT * FROM users WHERE id = ?").get(session.user_id) || null;
}

function requireUser(ctx) {
  const user = userByToken(ctx.token);
  if (!user) throw new ApiError(401, "Login required");
  return user;
}

function activeCheckin(userId) {
  return (
    db
      .prepare(
        `SELECT c.*, v.name AS venue_name, v.area AS venue_area FROM checkins c
         JOIN venues v ON v.id = c.venue_id
         WHERE c.user_id = ? AND c.ended_at IS NULL AND c.expires_at > ?
         ORDER BY c.created_at DESC LIMIT 1`
      )
      .get(userId, now()) || null
  );
}

function pointsBalance(userId) {
  const row = db
    .prepare("SELECT COALESCE(SUM(delta), 0) AS total FROM points_ledger WHERE user_id = ?")
    .get(userId);
  return row.total;
}

function awardPoints(userId, delta, reason, venueId) {
  if (!delta) return;
  db.prepare(
    "INSERT INTO points_ledger (id, user_id, delta, reason, venue_id, created_at) VALUES (?, ?, ?, ?, ?, ?)"
  ).run(uid("pts"), userId, delta, reason, venueId || null, now());
}

function sanitizeHandle(raw) {
  const normalized = String(raw || "").trim().toLowerCase().replace(/\s+/g, "");
  const body = normalized.replace(/^@+/, "").replace(/[^a-z0-9_.-]/g, "").slice(0, 20);
  if (body.length < 2) throw new ApiError(400, "Handle must be at least 2 characters (a-z, 0-9)");
  return `@${body}`;
}

function publicUser(user, options = {}) {
  const result = {
    handle: user.handle,
    displayName: user.display_name,
    avatar: user.avatar || "🌙",
    isBot: !!user.is_bot,
  };
  if (user.location_sharing) {
    const checkin = activeCheckin(user.id);
    if (checkin) {
      result.venueId = checkin.venue_id;
      result.venueName = checkin.venue_name;
    }
  }
  if (options.includeRole) result.role = user.role;
  return result;
}

function meResponse(user) {
  const checkin = activeCheckin(user.id);
  const venues = db
    .prepare("SELECT id, name, area, plan, is_partner FROM venues WHERE owner_user_id = ?")
    .all(user.id);
  return {
    handle: user.handle,
    displayName: user.display_name,
    avatar: user.avatar || "🌙",
    email: user.email || null,
    provider: user.provider,
    language: user.language,
    locationSharing: !!user.location_sharing,
    role: user.role,
    tier: user.tier,
    points: pointsBalance(user.id),
    checkin: checkin
      ? {
          venueId: checkin.venue_id,
          venueName: checkin.venue_name,
          method: checkin.method,
          expiresAt: checkin.expires_at,
          since: checkin.created_at,
        }
      : null,
    ownedVenues: venues.map((v) => ({
      id: v.id,
      name: v.name,
      area: v.area,
      plan: v.plan,
      isPartner: !!v.is_partner,
    })),
    vip: (() => {
      const sub = activeVip(user.id);
      return sub
        ? { monthlyPrice: sub.monthly_price, currentPeriodEnd: sub.current_period_end }
        : null;
    })(),
  };
}

function venueRow(v, liveCounts, couponsByVenue, eventsByVenue) {
  return {
    id: v.id,
    name: v.name,
    type: v.type,
    area: v.area,
    district: v.district,
    address: v.address,
    meta: v.meta,
    music: v.music,
    entry: v.entry,
    dress: v.dress,
    foreigner: v.foreigner,
    tonight: v.tonight,
    description: v.description,
    tags: JSON.parse(v.tags || "[]"),
    filterTags: JSON.parse(v.filter_tags || "[]"),
    coords: v.lat != null ? [v.lat, v.lng] : null,
    mapX: v.map_x,
    mapY: v.map_y,
    color: v.color,
    mapCount: v.map_count,
    viewers: v.viewers,
    isPartner: !!v.is_partner,
    plan: v.plan,
    imageUrl: v.image_url || null,
    liveCount: liveCounts.get(v.id) || 0,
    coupons: couponsByVenue.get(v.id) || [],
    events: (eventsByVenue && eventsByVenue.get(v.id)) || [],
  };
}

// ---------- check-in engine ----------

function createCheckin(user, venue, method, staffUserId) {
  // close any prior open check-in (one live venue per user)
  db.prepare(
    "UPDATE checkins SET ended_at = ? WHERE user_id = ? AND ended_at IS NULL"
  ).run(now(), user.id);

  const dayAgo = now() - 20 * 3600 * 1000;
  const priorToday = db
    .prepare(
      "SELECT COUNT(*) AS c FROM checkins WHERE user_id = ? AND venue_id = ? AND created_at > ?"
    )
    .get(user.id, venue.id, dayAgo).c;

  let points = 0;
  let reason = "checkin_repeat";
  if (priorToday === 0) {
    if (method === "staff") {
      points = 120;
      reason = "checkin_verified";
    } else {
      points = 60;
      reason = "checkin_self";
    }
    if (user.tier === "VIP") points *= 2; // VIP benefit: double Night Points
  }

  const id = uid("chk");
  const expiresAt = now() + CHECKIN_HOURS * 3600 * 1000;
  db.prepare(
    `INSERT INTO checkins (id, user_id, venue_id, method, staff_user_id, points_awarded, created_at, expires_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(id, user.id, venue.id, method, staffUserId || null, points, now(), expiresAt);
  awardPoints(user.id, points, reason, venue.id);

  return {
    checkinId: id,
    venueId: venue.id,
    venueName: venue.name,
    method,
    pointsAwarded: points,
    points: pointsBalance(user.id),
    expiresAt,
  };
}

// ---------- lounge SSE ----------

const loungeStreams = new Map(); // venueId -> Set(res)

function pushLoungeMessage(venueId, message) {
  const streams = loungeStreams.get(venueId);
  if (!streams) return;
  const payload = `data: ${JSON.stringify(message)}\n\n`;
  for (const res of streams) {
    try {
      res.write(payload);
    } catch {
      streams.delete(res);
    }
  }
}

function cleanupLounge(venueId) {
  db.prepare("DELETE FROM lounge_messages WHERE venue_id = ? AND created_at < ?").run(
    venueId,
    now() - LOUNGE_MESSAGE_TTL_HOURS * 3600 * 1000
  );
}

function requireLoungeAccess(user, venueId) {
  const venue = db.prepare("SELECT * FROM venues WHERE id = ?").get(venueId);
  if (!venue) throw new ApiError(404, "Venue not found");
  if (venue.owner_user_id === user.id) return venue; // owners can moderate their lounge
  const checkin = activeCheckin(user.id);
  if (!checkin || checkin.venue_id !== venueId) {
    throw new ApiError(403, "Check in at this venue to join its lounge");
  }
  return venue;
}

function loungeMessageJson(row) {
  return {
    id: row.id,
    venueId: row.venue_id,
    handle: row.handle,
    displayName: row.display_name,
    body: row.body,
    createdAt: row.created_at,
  };
}

// ---------- route table ----------

const routes = [];
function route(method, pattern, handler) {
  const names = [];
  const regex = new RegExp(
    "^" + pattern.replace(/:[a-zA-Z]+/g, (m) => {
      names.push(m.slice(1));
      return "([^/]+)";
    }) + "$"
  );
  routes.push({ method, regex, names, handler });
}

// ---- auth ----

// Email + PIN verification. With RESEND_API_KEY set, PINs are delivered by
// real email through the Resend API; without it the server runs in dev mode
// and returns the PIN in the response so the flow stays testable end-to-end.
const PIN_TTL_MS = 10 * 60 * 1000;
const PIN_RESEND_INTERVAL_MS = 60 * 1000;
const PIN_MAX_ATTEMPTS = 5;

function validEmail(raw) {
  const email = String(raw || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 80) {
    throw new ApiError(400, "Enter a valid email address");
  }
  return email;
}

async function deliverPinEmail(email, pin) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { delivered: false };
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || "KR NIGHT <onboarding@resend.dev>",
      to: [email],
      subject: `KR NIGHT verification code: ${pin}`,
      text: `Your KR NIGHT verification code is ${pin}\n\nThis code expires in 10 minutes. If you didn't request it, you can ignore this email.\n\nKR NIGHT · Tonight in South Korea`,
    }),
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    console.error("Resend delivery failed:", response.status, detail);
    throw new ApiError(502, "Could not send the verification email — try again in a minute");
  }
  return { delivered: true };
}

route("POST", "/api/auth/email/start", async (ctx) => {
  const email = validEmail(ctx.body.email);
  rateLimit("email:start", 30, 10 * 60 * 1000, "Too many verification requests — try later");
  const emailTaken = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (emailTaken) throw new ApiError(409, "That email is already registered — sign in instead");

  const existing = db.prepare("SELECT * FROM email_verifications WHERE email = ?").get(email);
  if (existing && now() - existing.created_at < PIN_RESEND_INTERVAL_MS) {
    throw new ApiError(429, "Code already sent — wait a minute before requesting another");
  }

  const pin = String(crypto.randomInt(0, 1000000)).padStart(6, "0");
  db.prepare("DELETE FROM email_verifications WHERE email = ?").run(email);
  db.prepare(
    "INSERT INTO email_verifications (email, pin, attempts, created_at, expires_at) VALUES (?, ?, 0, ?, ?)"
  ).run(email, pin, now(), now() + PIN_TTL_MS);

  const { delivered } = await deliverPinEmail(email, pin);
  if (!delivered && !DEV_MODE) {
    // no email provider and not an explicit dev environment: never leak the
    // PIN through the API. Configure RESEND_API_KEY (or DEV_MODE=1 locally).
    db.prepare("DELETE FROM email_verifications WHERE email = ?").run(email);
    throw new ApiError(503, "Email delivery is not configured on this server — contact KR NIGHT");
  }
  const result = { sent: true, delivered, expiresInSeconds: PIN_TTL_MS / 1000 };
  if (!delivered) result.devPin = pin;
  return result;
});

route("POST", "/api/auth/email/verify", (ctx) => {
  const email = validEmail(ctx.body.email);
  const pin = String(ctx.body.pin || "").trim();
  const record = db.prepare("SELECT * FROM email_verifications WHERE email = ?").get(email);
  if (!record || record.expires_at < now()) {
    throw new ApiError(410, "Code expired — request a new one");
  }
  if (record.attempts >= PIN_MAX_ATTEMPTS) {
    throw new ApiError(429, "Too many wrong attempts — request a new code");
  }
  if (record.pin !== pin) {
    db.prepare("UPDATE email_verifications SET attempts = attempts + 1 WHERE email = ?").run(email);
    throw new ApiError(400, "Wrong code — check the 6 digits and try again");
  }
  const verifyToken = crypto.randomBytes(24).toString("hex");
  db.prepare("UPDATE email_verifications SET verify_token = ?, expires_at = ? WHERE email = ?").run(
    verifyToken,
    now() + PIN_TTL_MS,
    email
  );
  return { verified: true, verifyToken };
});

route("POST", "/api/auth/register", (ctx) => {
  const { handle, displayName, password, email, verifyToken, provider, language } = ctx.body;
  const cleanHandle = sanitizeHandle(handle);
  if (!displayName || !String(displayName).trim()) throw new ApiError(400, "Display name required");
  if (!password || String(password).length < 6) throw new ApiError(400, "Password must be at least 6 characters");

  // registration requires a verified email
  const cleanEmail = validEmail(email);
  const verification = db
    .prepare("SELECT * FROM email_verifications WHERE email = ? AND verify_token = ?")
    .get(cleanEmail, String(verifyToken || ""));
  if (!verification || verification.expires_at < now()) {
    throw new ApiError(403, "Email not verified — complete the code step first");
  }

  const existing = db.prepare("SELECT id FROM users WHERE handle = ?").get(cleanHandle);
  if (existing) throw new ApiError(409, "That user ID is taken");
  const emailTaken = db.prepare("SELECT id FROM users WHERE email = ?").get(cleanEmail);
  if (emailTaken) throw new ApiError(409, "That email is already registered");
  const id = uid("usr");
  const salt = crypto.randomBytes(16).toString("hex");
  db.prepare(
    `INSERT INTO users (id, handle, display_name, email, password_hash, salt, provider, language, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    id,
    cleanHandle,
    String(displayName).trim().slice(0, 30),
    cleanEmail,
    hashPassword(String(password), salt),
    salt,
    provider || "local",
    ["en", "ko", "ja", "zh"].includes(language) ? language : "en",
    now()
  );
  db.prepare("DELETE FROM email_verifications WHERE email = ?").run(cleanEmail);
  if (ADMIN_EMAILS.includes(cleanEmail)) {
    db.prepare("UPDATE users SET role = 'admin' WHERE id = ?").run(id);
  }
  awardPoints(id, 100, "welcome", null);
  const token = createSession(id);
  const user = db.prepare("SELECT * FROM users WHERE id = ?").get(id);
  return { token, me: meResponse(user) };
});

route("POST", "/api/auth/login", (ctx) => {
  const { identifier, password } = ctx.body;
  if (!identifier || !password) throw new ApiError(400, "ID and password required");
  rateLimit(`login:${String(identifier).toLowerCase()}`, 8, 10 * 60 * 1000, "Too many login attempts — wait a few minutes");
  const raw = String(identifier).trim().toLowerCase();
  const user =
    db.prepare("SELECT * FROM users WHERE email = ?").get(raw) ||
    db.prepare("SELECT * FROM users WHERE handle = ?").get(raw.startsWith("@") ? raw : `@${raw}`);
  if (!user || !user.password_hash) throw new ApiError(401, "Account not found");
  const hash = hashPassword(String(password), user.salt);
  if (!crypto.timingSafeEqual(Buffer.from(hash), Buffer.from(user.password_hash))) {
    throw new ApiError(401, "Wrong password");
  }
  const token = createSession(user.id);
  return { token, me: meResponse(user) };
});

route("POST", "/api/auth/guest", (ctx) => {
  const base = String(ctx.body.displayName || "Guest").trim().slice(0, 20) || "Guest";
  let handle;
  for (let i = 0; i < 20; i += 1) {
    const candidate = `@guest${crypto.randomInt(1000, 999999)}`;
    if (!db.prepare("SELECT id FROM users WHERE handle = ?").get(candidate)) {
      handle = candidate;
      break;
    }
  }
  if (!handle) throw new ApiError(500, "Could not allocate guest ID");
  const id = uid("usr");
  db.prepare(
    "INSERT INTO users (id, handle, display_name, provider, language, created_at) VALUES (?, ?, ?, 'guest', ?, ?)"
  ).run(id, handle, base, ["en", "ko", "ja", "zh"].includes(ctx.body.language) ? ctx.body.language : "en", now());
  awardPoints(id, 100, "welcome", null);
  const token = createSession(id);
  const user = db.prepare("SELECT * FROM users WHERE id = ?").get(id);
  return { token, me: meResponse(user) };
});

route("POST", "/api/auth/logout", (ctx) => {
  if (ctx.token) db.prepare("DELETE FROM sessions WHERE token = ?").run(ctx.token);
  return { ok: true };
});

route("GET", "/api/me", (ctx) => meResponse(requireUser(ctx)));

route("PATCH", "/api/me", (ctx) => {
  const user = requireUser(ctx);
  const { displayName, language, locationSharing, avatar, handle } = ctx.body;
  if (displayName !== undefined) {
    const clean = String(displayName).trim().slice(0, 30);
    if (!clean) throw new ApiError(400, "Display name cannot be empty");
    db.prepare("UPDATE users SET display_name = ? WHERE id = ?").run(clean, user.id);
    db.prepare("UPDATE lounge_messages SET display_name = ? WHERE user_id = ?").run(clean, user.id);
  }
  if (avatar !== undefined) {
    const clean = String(avatar).trim().slice(0, 8);
    if (!clean) throw new ApiError(400, "Avatar cannot be empty");
    db.prepare("UPDATE users SET avatar = ? WHERE id = ?").run(clean, user.id);
  }
  if (handle !== undefined) {
    const cleanHandle = sanitizeHandle(handle);
    if (cleanHandle !== user.handle) {
      const taken = db.prepare("SELECT id FROM users WHERE handle = ? AND id != ?").get(cleanHandle, user.id);
      if (taken) throw new ApiError(409, "That user ID is taken");
      db.prepare("UPDATE users SET handle = ? WHERE id = ?").run(cleanHandle, user.id);
      db.prepare("UPDATE lounge_messages SET handle = ? WHERE user_id = ?").run(cleanHandle, user.id);
    }
  }
  if (language !== undefined) {
    if (!["en", "ko", "ja", "zh"].includes(language)) throw new ApiError(400, "Unsupported language");
    db.prepare("UPDATE users SET language = ? WHERE id = ?").run(language, user.id);
  }
  if (locationSharing !== undefined) {
    db.prepare("UPDATE users SET location_sharing = ? WHERE id = ?").run(locationSharing ? 1 : 0, user.id);
  }
  return meResponse(db.prepare("SELECT * FROM users WHERE id = ?").get(user.id));
});

// ---- venues ----

route("GET", "/api/venues", () => {
  const venues = db.prepare("SELECT * FROM venues ORDER BY created_at").all();
  const liveRows = db
    .prepare(
      `SELECT venue_id, COUNT(DISTINCT user_id) AS c FROM checkins
       WHERE ended_at IS NULL AND expires_at > ? GROUP BY venue_id`
    )
    .all(now());
  const liveCounts = new Map(liveRows.map((r) => [r.venue_id, r.c]));
  const couponRows = db.prepare("SELECT * FROM coupons WHERE active = 1").all();
  const couponsByVenue = new Map();
  for (const c of couponRows) {
    if (!couponsByVenue.has(c.venue_id)) couponsByVenue.set(c.venue_id, []);
    couponsByVenue.get(c.venue_id).push({
      id: c.id,
      title: c.title,
      description: c.description,
      pointsCost: c.points_cost,
    });
  }
  const eventRows = db
    .prepare("SELECT * FROM venue_events WHERE active = 1 ORDER BY created_at DESC")
    .all();
  const eventsByVenue = new Map();
  for (const e of eventRows) {
    if (!eventsByVenue.has(e.venue_id)) eventsByVenue.set(e.venue_id, []);
    eventsByVenue.get(e.venue_id).push({
      id: e.id,
      title: e.title,
      dateLabel: e.date_label,
      lineup: e.lineup,
      entry: e.entry,
    });
  }
  return { venues: venues.map((v) => venueRow(v, liveCounts, couponsByVenue, eventsByVenue)) };
});

// ---- QR pass ----

route("GET", "/api/qr/pass", (ctx) => {
  const user = requireUser(ctx);
  const token = qrtoken.issue(user.id);
  return { ...token, handle: user.handle, displayName: user.display_name };
});

// ---- check-in ----

route("POST", "/api/checkins/self", (ctx) => {
  if (!ALLOW_SELF_CHECKIN) throw new ApiError(403, "Show your QR pass to staff at the door to check in");
  const user = requireUser(ctx);
  const venue = db.prepare("SELECT * FROM venues WHERE id = ?").get(ctx.body.venueId);
  if (!venue) throw new ApiError(404, "Venue not found");
  return createCheckin(user, venue, "self", null);
});

route("POST", "/api/checkins/leave", (ctx) => {
  const user = requireUser(ctx);
  db.prepare("UPDATE checkins SET ended_at = ? WHERE user_id = ? AND ended_at IS NULL").run(now(), user.id);
  return { ok: true };
});

route("POST", "/api/staff/scan", (ctx) => {
  const staff = requireUser(ctx);
  const venue = db
    .prepare("SELECT * FROM venues WHERE id = ? AND owner_user_id = ?")
    .get(ctx.body.venueId, staff.id);
  if (!venue) throw new ApiError(403, "You can only scan for a venue you manage");

  let verified = null;
  if (ctx.body.qr) {
    verified = qrtoken.verifyQr(ctx.body.qr);
  } else if (ctx.body.handle && ctx.body.code) {
    const handle = sanitizeHandle(ctx.body.handle);
    const member = db.prepare("SELECT * FROM users WHERE handle = ?").get(handle);
    if (!member) throw new ApiError(404, "No member with that ID");
    verified = qrtoken.verifyManualCode(member.id, ctx.body.code);
  }
  if (!verified) throw new ApiError(400, "QR pass is invalid or expired — ask the guest to refresh their pass");

  // replay protection: one scan per signature window
  try {
    db.prepare("INSERT INTO used_qr_tokens (sig, used_at) VALUES (?, ?)").run(verified.sig, now());
  } catch {
    throw new ApiError(409, "This pass was already scanned — ask the guest to show a fresh code");
  }
  db.prepare("DELETE FROM used_qr_tokens WHERE used_at < ?").run(now() - 10 * 60 * 1000);

  const member = db.prepare("SELECT * FROM users WHERE id = ?").get(verified.userId);
  if (!member) throw new ApiError(404, "Member not found");

  const result = createCheckin(member, venue, "staff", staff.id);
  return {
    ...result,
    member: { handle: member.handle, displayName: member.display_name, tier: member.tier },
  };
});

// ---- lounge ----

route("GET", "/api/lounges/:venueId/messages", (ctx) => {
  const user = requireUser(ctx);
  requireLoungeAccess(user, ctx.params.venueId);
  cleanupLounge(ctx.params.venueId);
  const since = Number(ctx.query.since || 0);
  const rows = db
    .prepare(
      `SELECT m.* FROM lounge_messages m
       WHERE m.venue_id = ? AND m.created_at > ?
         AND m.user_id NOT IN (SELECT blocked_id FROM blocks WHERE user_id = ?)
       ORDER BY m.created_at LIMIT 200`
    )
    .all(ctx.params.venueId, since, user.id);
  const liveCount = db
    .prepare(
      "SELECT COUNT(DISTINCT user_id) AS c FROM checkins WHERE venue_id = ? AND ended_at IS NULL AND expires_at > ?"
    )
    .get(ctx.params.venueId, now()).c;
  return { messages: rows.map(loungeMessageJson), liveCount };
});

route("POST", "/api/lounges/:venueId/messages", (ctx) => {
  const user = requireUser(ctx);
  requireLoungeAccess(user, ctx.params.venueId);
  rateLimit(`lounge:${user.id}`, 12, 60 * 1000, "Sending too fast — take a breath");
  const body = String(ctx.body.body || "").trim().slice(0, 500);
  if (!body) throw new ApiError(400, "Empty message");
  if (screenMessage(body)) throw new ApiError(400, "That message breaks the lounge rules");
  const id = uid("msg");
  db.prepare(
    `INSERT INTO lounge_messages (id, venue_id, user_id, display_name, handle, body, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  ).run(id, ctx.params.venueId, user.id, user.display_name, user.handle, body, now());
  const message = loungeMessageJson(
    db.prepare("SELECT * FROM lounge_messages WHERE id = ?").get(id)
  );
  pushLoungeMessage(ctx.params.venueId, message);
  return { message };
});

// ---- friends ----

route("GET", "/api/friends", (ctx) => {
  const user = requireUser(ctx);
  const accepted = db
    .prepare(
      `SELECT u.* FROM friends f JOIN users u ON u.id = f.friend_id
       WHERE f.user_id = ? AND f.status = 'accepted'`
    )
    .all(user.id);
  const incoming = db
    .prepare(
      `SELECT u.* FROM friends f JOIN users u ON u.id = f.user_id
       WHERE f.friend_id = ? AND f.status = 'pending'`
    )
    .all(user.id);
  const outgoing = db
    .prepare(
      `SELECT u.* FROM friends f JOIN users u ON u.id = f.friend_id
       WHERE f.user_id = ? AND f.status = 'pending'`
    )
    .all(user.id);
  return {
    friends: accepted.map((u) => publicUser(u)),
    incoming: incoming.map((u) => publicUser(u)),
    outgoing: outgoing.map((u) => publicUser(u)),
  };
});

route("POST", "/api/friends/request", (ctx) => {
  const user = requireUser(ctx);
  const handle = sanitizeHandle(ctx.body.handle);
  const target = db.prepare("SELECT * FROM users WHERE handle = ?").get(handle);
  if (!target) throw new ApiError(404, "No user with that ID");
  if (target.id === user.id) throw new ApiError(400, "That is you");

  const blockedEitherWay = db
    .prepare(
      "SELECT 1 AS b FROM blocks WHERE (user_id = ? AND blocked_id = ?) OR (user_id = ? AND blocked_id = ?)"
    )
    .get(user.id, target.id, target.id, user.id);
  if (blockedEitherWay) return { status: "pending" }; // silent — do not reveal blocks

  const existing = db
    .prepare("SELECT * FROM friends WHERE user_id = ? AND friend_id = ?")
    .get(user.id, target.id);
  if (existing) return { status: existing.status };

  // if they already requested us, this acts as an accept (mutual consent, plan 4.3)
  const reverse = db
    .prepare("SELECT * FROM friends WHERE user_id = ? AND friend_id = ?")
    .get(target.id, user.id);
  const status = reverse || target.is_bot ? "accepted" : "pending";
  db.prepare(
    "INSERT INTO friends (user_id, friend_id, status, created_at) VALUES (?, ?, ?, ?)"
  ).run(user.id, target.id, status, now());
  if (status === "accepted") {
    if (reverse) {
      db.prepare("UPDATE friends SET status = 'accepted' WHERE user_id = ? AND friend_id = ?").run(target.id, user.id);
    } else {
      db.prepare(
        "INSERT OR IGNORE INTO friends (user_id, friend_id, status, created_at) VALUES (?, ?, 'accepted', ?)"
      ).run(target.id, user.id, now());
    }
  }
  return { status };
});

route("POST", "/api/friends/respond", (ctx) => {
  const user = requireUser(ctx);
  const handle = sanitizeHandle(ctx.body.handle);
  const requester = db.prepare("SELECT * FROM users WHERE handle = ?").get(handle);
  if (!requester) throw new ApiError(404, "No user with that ID");
  const request = db
    .prepare("SELECT * FROM friends WHERE user_id = ? AND friend_id = ? AND status = 'pending'")
    .get(requester.id, user.id);
  if (!request) throw new ApiError(404, "No pending request from that user");
  if (ctx.body.accept) {
    db.prepare("UPDATE friends SET status = 'accepted' WHERE user_id = ? AND friend_id = ?").run(requester.id, user.id);
    db.prepare(
      "INSERT OR IGNORE INTO friends (user_id, friend_id, status, created_at) VALUES (?, ?, 'accepted', ?)"
    ).run(user.id, requester.id, now());
    return { status: "accepted" };
  }
  db.prepare("DELETE FROM friends WHERE user_id = ? AND friend_id = ?").run(requester.id, user.id);
  return { status: "declined" };
});

route("GET", "/api/users/search", (ctx) => {
  requireUser(ctx);
  const q = String(ctx.query.q || "").trim().toLowerCase();
  if (q.length < 2) return { users: [] };
  const rows = db
    .prepare(
      `SELECT * FROM users WHERE (LOWER(handle) LIKE ? OR LOWER(display_name) LIKE ?) LIMIT 12`
    )
    .all(`%${q.replace(/^@/, "")}%`, `%${q}%`);
  return { users: rows.map((u) => publicUser(u)) };
});

// ---- coupons ----

route("POST", "/api/coupons/:couponId/redeem", (ctx) => {
  const user = requireUser(ctx);
  const coupon = db
    .prepare("SELECT * FROM coupons WHERE id = ? AND active = 1")
    .get(ctx.params.couponId);
  if (!coupon) throw new ApiError(404, "Coupon not found");
  const checkin = activeCheckin(user.id);
  if (!checkin || checkin.venue_id !== coupon.venue_id) {
    throw new ApiError(403, "Check in at this venue first to use its coupon");
  }
  const already = db
    .prepare(
      "SELECT COUNT(*) AS c FROM coupon_redemptions WHERE coupon_id = ? AND user_id = ? AND created_at > ?"
    )
    .get(coupon.id, user.id, now() - 20 * 3600 * 1000).c;
  if (already) throw new ApiError(409, "Already redeemed tonight");
  if (coupon.points_cost > 0) {
    if (pointsBalance(user.id) < coupon.points_cost) throw new ApiError(400, "Not enough Night Points");
    awardPoints(user.id, -coupon.points_cost, "coupon_redeem", coupon.venue_id);
  }
  db.prepare(
    "INSERT INTO coupon_redemptions (id, coupon_id, user_id, venue_id, created_at) VALUES (?, ?, ?, ?, ?)"
  ).run(uid("rdm"), coupon.id, user.id, coupon.venue_id, now());
  return { ok: true, title: coupon.title, points: pointsBalance(user.id) };
});

// ---- community safety: block, report, admin moderation ----

route("POST", "/api/blocks", (ctx) => {
  const user = requireUser(ctx);
  const handle = sanitizeHandle(ctx.body.handle);
  const target = db.prepare("SELECT * FROM users WHERE handle = ?").get(handle);
  if (!target) throw new ApiError(404, "No user with that ID");
  if (target.id === user.id) throw new ApiError(400, "That is you");
  db.prepare("INSERT OR IGNORE INTO blocks (user_id, blocked_id, created_at) VALUES (?, ?, ?)").run(
    user.id, target.id, now()
  );
  // blocking removes any friendship both ways
  db.prepare("DELETE FROM friends WHERE (user_id = ? AND friend_id = ?) OR (user_id = ? AND friend_id = ?)").run(
    user.id, target.id, target.id, user.id
  );
  return { ok: true };
});

route("DELETE", "/api/blocks/:handle", (ctx) => {
  const user = requireUser(ctx);
  const handle = sanitizeHandle(ctx.params.handle);
  const target = db.prepare("SELECT id FROM users WHERE handle = ?").get(handle);
  if (target) db.prepare("DELETE FROM blocks WHERE user_id = ? AND blocked_id = ?").run(user.id, target.id);
  return { ok: true };
});

route("GET", "/api/blocks", (ctx) => {
  const user = requireUser(ctx);
  const rows = db
    .prepare("SELECT u.handle, u.display_name FROM blocks b JOIN users u ON u.id = b.blocked_id WHERE b.user_id = ?")
    .all(user.id);
  return { blocked: rows.map((r) => ({ handle: r.handle, displayName: r.display_name })) };
});

route("POST", "/api/reports", (ctx) => {
  const user = requireUser(ctx);
  rateLimit(`report:${user.id}`, 10, 10 * 60 * 1000);
  const targetType = String(ctx.body.targetType || "");
  if (!["lounge_message", "user"].includes(targetType)) throw new ApiError(400, "Unknown report type");
  const targetId = String(ctx.body.targetId || "").slice(0, 60);
  if (!targetId) throw new ApiError(400, "Missing target");
  db.prepare(
    "INSERT INTO reports (id, reporter_id, target_type, target_id, reason, status, created_at) VALUES (?, ?, ?, ?, ?, 'open', ?)"
  ).run(uid("rpt"), user.id, targetType, targetId, String(ctx.body.reason || "").slice(0, 200), now());

  // auto-hide: a lounge message reported by 3+ distinct users is removed
  if (targetType === "lounge_message") {
    const count = db
      .prepare("SELECT COUNT(DISTINCT reporter_id) AS c FROM reports WHERE target_type = 'lounge_message' AND target_id = ?")
      .get(targetId).c;
    if (count >= 3) db.prepare("DELETE FROM lounge_messages WHERE id = ?").run(targetId);
  }
  return { ok: true };
});

function requireAdmin(ctx) {
  const user = requireUser(ctx);
  if (user.role !== "admin") throw new ApiError(403, "Admin only");
  return user;
}

route("GET", "/api/admin/reports", (ctx) => {
  requireAdmin(ctx);
  const rows = db
    .prepare(
      `SELECT r.*, u.handle AS reporter_handle FROM reports r
       JOIN users u ON u.id = r.reporter_id
       WHERE r.status = 'open' ORDER BY r.created_at DESC LIMIT 100`
    )
    .all();
  return {
    reports: rows.map((r) => ({
      id: r.id,
      targetType: r.target_type,
      targetId: r.target_id,
      reason: r.reason,
      reporter: r.reporter_handle,
      at: r.created_at,
    })),
  };
});

route("DELETE", "/api/admin/messages/:messageId", (ctx) => {
  requireAdmin(ctx);
  db.prepare("DELETE FROM lounge_messages WHERE id = ?").run(ctx.params.messageId);
  db.prepare("UPDATE reports SET status = 'resolved' WHERE target_type = 'lounge_message' AND target_id = ?").run(
    ctx.params.messageId
  );
  return { ok: true };
});

route("POST", "/api/admin/reports/:reportId/resolve", (ctx) => {
  requireAdmin(ctx);
  db.prepare("UPDATE reports SET status = 'resolved' WHERE id = ?").run(ctx.params.reportId);
  return { ok: true };
});

// ---- owner / partner console ----

route("GET", "/api/plans", () => ({ plans: PLANS }));

route("POST", "/api/owner/venues/:venueId/claim", (ctx) => {
  const user = requireUser(ctx);
  const venue = db.prepare("SELECT * FROM venues WHERE id = ?").get(ctx.params.venueId);
  if (!venue) throw new ApiError(404, "Venue not found");
  if (venue.owner_user_id && venue.owner_user_id !== user.id) {
    throw new ApiError(409, "This venue is already managed by another account");
  }
  // ownership requires the claim code KR NIGHT ops hands to the real owner
  // in person (like a business-verification postcard).
  const code = String(ctx.body.claimCode || "").trim().toUpperCase();
  if (!venue.claim_code || code !== venue.claim_code) {
    throw new ApiError(403, "Wrong claim code — KR NIGHT gives this code to the venue owner directly");
  }
  db.prepare("UPDATE venues SET owner_user_id = ? WHERE id = ?").run(user.id, venue.id);
  if (user.role === "member") {
    db.prepare("UPDATE users SET role = 'owner' WHERE id = ?").run(user.id);
  }
  return { ok: true, venueId: venue.id };
});

// known Seoul nightlife districts → default coordinates and overlay-map
// positions, so owner-created venues always render on both maps
const AREA_GEO = {
  hongdae: { coords: [37.5503, 126.9223], mapX: "25%", mapY: "37%" },
  itaewon: { coords: [37.534, 126.989], mapX: "41%", mapY: "47%" },
  apgujeong: { coords: [37.5262, 127.0286], mapX: "60%", mapY: "50%" },
  sinsa: { coords: [37.5163, 127.0203], mapX: "58%", mapY: "54%" },
  gangnam: { coords: [37.4979, 127.0276], mapX: "60%", mapY: "62%" },
  seongsu: { coords: [37.5447, 127.0563], mapX: "72%", mapY: "40%" },
  euljiro: { coords: [37.5661, 126.991], mapX: "49%", mapY: "27%" },
};

function areaGeo(areaName) {
  const key = String(areaName || "").trim().toLowerCase()
    .replace(/홍대/, "hongdae").replace(/이태원/, "itaewon").replace(/압구정/, "apgujeong")
    .replace(/신사/, "sinsa").replace(/강남/, "gangnam").replace(/성수/, "seongsu").replace(/을지로/, "euljiro");
  const match = Object.keys(AREA_GEO).find((k) => key.includes(k));
  const base = match ? AREA_GEO[match] : { coords: [37.5503, 126.99], mapX: "50%", mapY: "45%" };
  // small jitter so venues in the same area don't stack exactly
  const jitter = () => (crypto.randomInt(0, 100) - 50) / 25000;
  return {
    lat: base.coords[0] + jitter(),
    lng: base.coords[1] + jitter(),
    mapX: base.mapX,
    mapY: base.mapY,
  };
}

function validImageUrl(raw) {
  const url = String(raw || "").trim().slice(0, 300);
  if (!url) return "";
  if (!/^https:\/\/[^\s"'<>]+$/i.test(url)) {
    throw new ApiError(400, "Image must be an https:// URL");
  }
  return url;
}

route("POST", "/api/owner/venues", (ctx) => {
  const user = requireUser(ctx);
  const { name, type, area, address, music, entry, dress, foreigner, description } = ctx.body;
  if (!name || !String(name).trim()) throw new ApiError(400, "Venue name required");
  if (!area || !String(area).trim()) throw new ApiError(400, "Area required");
  rateLimit(`venue-create:${user.id}`, 3, 24 * 3600 * 1000, "Venue creation limit reached for today");
  const id = `own-${String(name).trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30)}-${crypto.randomInt(100, 999)}`;
  const geo = areaGeo(area);
  db.prepare(
    `INSERT INTO venues (id, name, type, area, district, address, meta, music, entry, dress, foreigner,
      tonight, description, tags, filter_tags, color, lat, lng, map_x, map_y, claim_code, owner_user_id, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  ).run(
    id,
    String(name).trim().slice(0, 60),
    ["club", "bar", "lounge"].includes(type) ? type : "bar",
    String(area).trim().slice(0, 30),
    String(area).trim().slice(0, 30),
    String(address || "").trim().slice(0, 120),
    String(music || "").slice(0, 80),
    String(music || "").slice(0, 120),
    String(entry || "Free").slice(0, 80),
    String(dress || "Casual").slice(0, 60),
    String(foreigner || "Foreigner friendly").slice(0, 80),
    "New on KR NIGHT — updated by the venue.",
    String(description || "").slice(0, 300),
    JSON.stringify(["New"]),
    JSON.stringify([["club", "bar", "lounge"].includes(type) ? type : "bar"]),
    "linear-gradient(135deg, #ff1f8f, #19111f 52%, #05d9ff)",
    geo.lat,
    geo.lng,
    geo.mapX,
    geo.mapY,
    crypto.randomBytes(4).toString("hex").toUpperCase(),
    user.id,
    now()
  );
  if (user.role === "member") {
    db.prepare("UPDATE users SET role = 'owner' WHERE id = ?").run(user.id);
  }
  return { ok: true, venueId: id };
});

function requireOwnedVenue(user, venueId) {
  const venue = db
    .prepare("SELECT * FROM venues WHERE id = ? AND owner_user_id = ?")
    .get(venueId, user.id);
  if (!venue) throw new ApiError(403, "Not your venue");
  return venue;
}

route("GET", "/api/owner/venues", (ctx) => {
  const user = requireUser(ctx);
  const venues = db.prepare("SELECT * FROM venues WHERE owner_user_id = ?").all(user.id);
  return {
    venues: venues.map((v) => {
      const sub = db
        .prepare(
          "SELECT * FROM subscriptions WHERE venue_id = ? AND status = 'active' ORDER BY started_at DESC LIMIT 1"
        )
        .get(v.id);
      return {
        id: v.id,
        name: v.name,
        area: v.area,
        plan: v.plan,
        isPartner: !!v.is_partner,
        subscription: sub
          ? {
              plan: sub.plan,
              monthlyPrice: sub.monthly_price,
              startedAt: sub.started_at,
              currentPeriodEnd: sub.current_period_end,
              method: sub.method,
            }
          : null,
      };
    }),
  };
});

route("GET", "/api/owner/venues/:venueId/stats", (ctx) => {
  const user = requireUser(ctx);
  const venue = requireOwnedVenue(user, ctx.params.venueId);
  const dayAgo = now() - 86400 * 1000;
  const weekAgo = now() - 7 * 86400 * 1000;
  const monthAgo = now() - 30 * 86400 * 1000;

  const count = (sql, ...args) => db.prepare(sql).get(...args).c;
  const checkins24h = count("SELECT COUNT(*) AS c FROM checkins WHERE venue_id = ? AND created_at > ?", venue.id, dayAgo);
  const checkins7d = count("SELECT COUNT(*) AS c FROM checkins WHERE venue_id = ? AND created_at > ?", venue.id, weekAgo);
  const verified7d = count("SELECT COUNT(*) AS c FROM checkins WHERE venue_id = ? AND created_at > ? AND method = 'staff'", venue.id, weekAgo);
  const unique30d = count("SELECT COUNT(DISTINCT user_id) AS c FROM checkins WHERE venue_id = ? AND created_at > ?", venue.id, monthAgo);
  const repeat30d = db
    .prepare(
      `SELECT COUNT(*) AS c FROM (
        SELECT user_id FROM checkins WHERE venue_id = ? AND created_at > ?
        GROUP BY user_id HAVING COUNT(*) > 1)`
    )
    .get(venue.id, monthAgo).c;
  const liveNow = count(
    "SELECT COUNT(DISTINCT user_id) AS c FROM checkins WHERE venue_id = ? AND ended_at IS NULL AND expires_at > ?",
    venue.id, now()
  );
  const pointsIssued30d = db
    .prepare("SELECT COALESCE(SUM(delta),0) AS s FROM points_ledger WHERE venue_id = ? AND delta > 0 AND created_at > ?")
    .get(venue.id, monthAgo).s;
  const couponUses30d = count(
    "SELECT COUNT(*) AS c FROM coupon_redemptions WHERE venue_id = ? AND created_at > ?",
    venue.id, monthAgo
  );
  const loungeMessages24h = count(
    "SELECT COUNT(*) AS c FROM lounge_messages WHERE venue_id = ? AND created_at > ?",
    venue.id, dayAgo
  );
  const recent = db
    .prepare(
      `SELECT c.created_at, c.method, c.points_awarded, u.display_name, u.handle
       FROM checkins c JOIN users u ON u.id = c.user_id
       WHERE c.venue_id = ? ORDER BY c.created_at DESC LIMIT 15`
    )
    .all(venue.id);

  return {
    venue: { id: venue.id, name: venue.name, area: venue.area, plan: venue.plan, isPartner: !!venue.is_partner },
    stats: {
      liveNow,
      checkins24h,
      checkins7d,
      verified7d,
      unique30d,
      repeat30d,
      repeatRate30d: unique30d ? Math.round((repeat30d / unique30d) * 100) : 0,
      pointsIssued30d,
      couponUses30d,
      loungeMessages24h,
    },
    recentCheckins: recent.map((r) => ({
      at: r.created_at,
      method: r.method,
      points: r.points_awarded,
      displayName: r.display_name,
      handle: r.handle,
    })),
  };
});

// owner: edit venue details (business plan 10.3 — venues own their info)
route("PATCH", "/api/owner/venues/:venueId", (ctx) => {
  const user = requireUser(ctx);
  const venue = requireOwnedVenue(user, ctx.params.venueId);
  const fields = {
    name: [String, 60],
    address: [String, 120],
    music: [String, 120],
    entry: [String, 80],
    dress: [String, 60],
    foreigner: [String, 80],
    description: [String, 300],
    tonight: [String, 200],
    instagram: [String, 80],
  };
  const updates = [];
  const values = [];
  for (const [key, [cast, max]] of Object.entries(fields)) {
    if (ctx.body[key] !== undefined) {
      const value = cast(ctx.body[key]).trim().slice(0, max);
      if (key === "name" && !value) throw new ApiError(400, "Venue name cannot be empty");
      updates.push(`${key} = ?`);
      values.push(value);
    }
  }
  if (ctx.body.type !== undefined && ["club", "bar", "lounge"].includes(ctx.body.type)) {
    updates.push("type = ?");
    values.push(ctx.body.type);
  }
  if (ctx.body.imageUrl !== undefined) {
    updates.push("image_url = ?");
    values.push(validImageUrl(ctx.body.imageUrl) || null);
  }
  if (!updates.length) throw new ApiError(400, "Nothing to update");
  db.prepare(`UPDATE venues SET ${updates.join(", ")} WHERE id = ?`).run(...values, venue.id);
  return { ok: true };
});

// owner: tonight's events
route("POST", "/api/owner/venues/:venueId/events", (ctx) => {
  const user = requireUser(ctx);
  const venue = requireOwnedVenue(user, ctx.params.venueId);
  const title = String(ctx.body.title || "").trim().slice(0, 80);
  if (!title) throw new ApiError(400, "Event title required");
  const count = db
    .prepare("SELECT COUNT(*) AS c FROM venue_events WHERE venue_id = ? AND active = 1")
    .get(venue.id).c;
  if (count >= 10) throw new ApiError(400, "Limit of 10 active events — remove one first");
  const id = uid("evt");
  db.prepare(
    "INSERT INTO venue_events (id, venue_id, title, date_label, lineup, entry, active, created_at) VALUES (?, ?, ?, ?, ?, ?, 1, ?)"
  ).run(
    id,
    venue.id,
    title,
    String(ctx.body.dateLabel || "").trim().slice(0, 40),
    String(ctx.body.lineup || "").trim().slice(0, 120),
    String(ctx.body.entry || "").trim().slice(0, 60),
    now()
  );
  return { ok: true, eventId: id };
});

route("DELETE", "/api/owner/events/:eventId", (ctx) => {
  const user = requireUser(ctx);
  const event = db
    .prepare(
      `SELECT e.id FROM venue_events e JOIN venues v ON v.id = e.venue_id
       WHERE e.id = ? AND v.owner_user_id = ?`
    )
    .get(ctx.params.eventId, user.id);
  if (!event) throw new ApiError(403, "Not your event");
  db.prepare("UPDATE venue_events SET active = 0 WHERE id = ?").run(ctx.params.eventId);
  return { ok: true };
});

// owner: coupons
route("POST", "/api/owner/venues/:venueId/coupons", (ctx) => {
  const user = requireUser(ctx);
  const venue = requireOwnedVenue(user, ctx.params.venueId);
  const title = String(ctx.body.title || "").trim().slice(0, 60);
  if (!title) throw new ApiError(400, "Coupon title required");
  const count = db
    .prepare("SELECT COUNT(*) AS c FROM coupons WHERE venue_id = ? AND active = 1")
    .get(venue.id).c;
  if (count >= 5) throw new ApiError(400, "Limit of 5 active coupons — remove one first");
  const pointsCost = Math.max(0, Math.min(100000, Number(ctx.body.pointsCost) || 0));
  const id = uid("cpn");
  db.prepare(
    "INSERT INTO coupons (id, venue_id, title, description, points_cost, active, created_at) VALUES (?, ?, ?, ?, ?, 1, ?)"
  ).run(id, venue.id, title, String(ctx.body.description || "").trim().slice(0, 160), pointsCost, now());
  return { ok: true, couponId: id };
});

route("DELETE", "/api/owner/coupons/:couponId", (ctx) => {
  const user = requireUser(ctx);
  const coupon = db
    .prepare(
      `SELECT c.id FROM coupons c JOIN venues v ON v.id = c.venue_id
       WHERE c.id = ? AND v.owner_user_id = ?`
    )
    .get(ctx.params.couponId, user.id);
  if (!coupon) throw new ApiError(403, "Not your coupon");
  db.prepare("UPDATE coupons SET active = 0 WHERE id = ?").run(ctx.params.couponId);
  return { ok: true };
});

// ---- user VIP membership (business plan 6.3: 우선 혜택·고급 필터·한정 이벤트) ----

const VIP_MONTHLY_PRICE = 6900;

function activeVip(userId) {
  return (
    db
      .prepare(
        "SELECT * FROM user_subscriptions WHERE user_id = ? AND status = 'active' AND current_period_end > ? ORDER BY started_at DESC LIMIT 1"
      )
      .get(userId, now()) || null
  );
}

route("GET", "/api/vip", () => ({
  plan: {
    id: "vip",
    monthlyPrice: VIP_MONTHLY_PRICE,
    features: ["Priority entry lane at partner doors", "Double Night Points", "Members-only events", "Advanced filters"],
  },
}));

route("POST", "/api/vip/subscribe", (ctx) => {
  const user = requireUser(ctx);
  if (activeVip(user.id)) throw new ApiError(409, "VIP is already active");
  // Pilot billing: recorded now, settled by invoice — the same payment
  // gateway integration point as venue subscriptions.
  db.prepare(
    `INSERT INTO user_subscriptions (id, user_id, plan, monthly_price, status, method, started_at, current_period_end)
     VALUES (?, ?, 'vip', ?, 'active', 'pilot_invoice', ?, ?)`
  ).run(uid("vip"), user.id, VIP_MONTHLY_PRICE, now(), now() + 30 * 86400 * 1000);
  db.prepare("UPDATE users SET tier = 'VIP' WHERE id = ?").run(user.id);
  return { ok: true, tier: "VIP", monthlyPrice: VIP_MONTHLY_PRICE };
});

route("POST", "/api/vip/cancel", (ctx) => {
  const user = requireUser(ctx);
  db.prepare(
    "UPDATE user_subscriptions SET status = 'canceled', canceled_at = ? WHERE user_id = ? AND status = 'active'"
  ).run(now(), user.id);
  db.prepare("UPDATE users SET tier = 'Free' WHERE id = ?").run(user.id);
  return { ok: true, tier: "Free" };
});

route("POST", "/api/owner/venues/:venueId/subscribe", (ctx) => {
  const user = requireUser(ctx);
  const venue = requireOwnedVenue(user, ctx.params.venueId);
  const plan = PLANS.find((p) => p.id === ctx.body.plan);
  if (!plan) throw new ApiError(400, "Unknown plan");

  db.prepare("UPDATE subscriptions SET status = 'canceled', canceled_at = ? WHERE venue_id = ? AND status = 'active'")
    .run(now(), venue.id);

  if (plan.id !== "free") {
    // Pilot billing: subscription recorded now, settled by invoice. A payment
    // gateway (TossPayments/Stripe) plugs in here before charging real cards.
    db.prepare(
      `INSERT INTO subscriptions (id, venue_id, plan, monthly_price, status, method, started_at, current_period_end)
       VALUES (?, ?, ?, ?, 'active', 'pilot_invoice', ?, ?)`
    ).run(uid("sub"), venue.id, plan.id, plan.monthlyPrice, now(), now() + 30 * 86400 * 1000);
  }
  db.prepare("UPDATE venues SET plan = ?, is_partner = ? WHERE id = ?").run(
    plan.id,
    plan.id === "free" ? 0 : 1,
    venue.id
  );
  return { ok: true, plan: plan.id, monthlyPrice: plan.monthlyPrice };
});

route("POST", "/api/owner/venues/:venueId/cancel", (ctx) => {
  const user = requireUser(ctx);
  const venue = requireOwnedVenue(user, ctx.params.venueId);
  db.prepare("UPDATE subscriptions SET status = 'canceled', canceled_at = ? WHERE venue_id = ? AND status = 'active'")
    .run(now(), venue.id);
  db.prepare("UPDATE venues SET plan = 'free', is_partner = 0 WHERE id = ?").run(venue.id);
  return { ok: true };
});

route("GET", "/api/health", () => ({ ok: true, service: "kr-night", time: now() }));

// ---------- dispatcher ----------

function handleApi(req, res, urlObj, body, token) {
  const ctx = {
    token,
    body: body || {},
    query: Object.fromEntries(urlObj.searchParams),
    params: {},
  };
  for (const r of routes) {
    if (r.method !== req.method) continue;
    const match = urlObj.pathname.match(r.regex);
    if (!match) continue;
    r.names.forEach((name, i) => {
      ctx.params[name] = decodeURIComponent(match[i + 1]);
    });
    const respond = (result) => {
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(result));
    };
    const fail = (error) => {
      const status = error instanceof ApiError ? error.status : 500;
      if (status === 500) console.error(error);
      res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: error.message || "Server error" }));
    };
    try {
      const result = r.handler(ctx);
      if (result && typeof result.then === "function") {
        result.then(respond, fail);
      } else {
        respond(result);
      }
    } catch (error) {
      fail(error);
    }
    return true;
  }
  return false;
}

// SSE endpoint is handled outside the JSON dispatcher because it keeps the
// response open.
function handleLoungeStream(req, res, urlObj) {
  const match = urlObj.pathname.match(/^\/api\/lounges\/([^/]+)\/stream$/);
  if (!match || req.method !== "GET") return false;
  const venueId = decodeURIComponent(match[1]);
  const token = urlObj.searchParams.get("token");
  const user = userByToken(token);

  const fail = (status, message) => {
    res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ error: message }));
    return true;
  };
  if (!user) return fail(401, "Login required");
  try {
    requireLoungeAccess(user, venueId);
  } catch (error) {
    return fail(error.status || 500, error.message);
  }

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": "*",
  });
  res.write(": connected\n\n");

  if (!loungeStreams.has(venueId)) loungeStreams.set(venueId, new Set());
  loungeStreams.get(venueId).add(res);

  const heartbeat = setInterval(() => {
    try {
      res.write(": ping\n\n");
    } catch {
      cleanup();
    }
  }, 25000);

  const cleanup = () => {
    clearInterval(heartbeat);
    const set = loungeStreams.get(venueId);
    if (set) set.delete(res);
  };
  req.on("close", cleanup);
  return true;
}

module.exports = { handleApi, handleLoungeStream };
