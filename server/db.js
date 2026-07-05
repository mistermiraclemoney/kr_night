const { DatabaseSync } = require("node:sqlite");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, "..", "data");
fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new DatabaseSync(path.join(DATA_DIR, "krnight.db"));
db.exec("PRAGMA journal_mode = WAL;");
db.exec("PRAGMA foreign_keys = ON;");

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  handle TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  email TEXT UNIQUE,
  password_hash TEXT,
  salt TEXT,
  provider TEXT DEFAULT 'local',
  language TEXT DEFAULT 'en',
  location_sharing INTEGER DEFAULT 0,
  role TEXT DEFAULT 'member',
  tier TEXT DEFAULT 'Free',
  is_bot INTEGER DEFAULT 0,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS venues (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  area TEXT,
  district TEXT,
  address TEXT,
  meta TEXT,
  music TEXT,
  entry TEXT,
  dress TEXT,
  foreigner TEXT,
  tonight TEXT,
  description TEXT,
  tags TEXT DEFAULT '[]',
  filter_tags TEXT DEFAULT '[]',
  lat REAL, lng REAL,
  map_x TEXT, map_y TEXT,
  color TEXT,
  map_count INTEGER DEFAULT 0,
  viewers INTEGER DEFAULT 0,
  instagram TEXT,
  owner_user_id TEXT REFERENCES users(id),
  is_partner INTEGER DEFAULT 0,
  plan TEXT DEFAULT 'free',
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS checkins (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  venue_id TEXT NOT NULL REFERENCES venues(id),
  method TEXT NOT NULL, -- 'staff' (verified scan) | 'self' (pilot/unverified)
  staff_user_id TEXT REFERENCES users(id),
  points_awarded INTEGER DEFAULT 0,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  ended_at INTEGER
);
CREATE INDEX IF NOT EXISTS idx_checkins_user ON checkins(user_id, created_at);
CREATE INDEX IF NOT EXISTS idx_checkins_venue ON checkins(venue_id, created_at);
CREATE TABLE IF NOT EXISTS points_ledger (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  delta INTEGER NOT NULL,
  reason TEXT NOT NULL,
  venue_id TEXT,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS lounge_messages (
  id TEXT PRIMARY KEY,
  venue_id TEXT NOT NULL REFERENCES venues(id),
  user_id TEXT NOT NULL REFERENCES users(id),
  display_name TEXT NOT NULL,
  handle TEXT NOT NULL,
  body TEXT NOT NULL,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_lounge_venue ON lounge_messages(venue_id, created_at);
CREATE TABLE IF NOT EXISTS friends (
  user_id TEXT NOT NULL REFERENCES users(id),
  friend_id TEXT NOT NULL REFERENCES users(id),
  status TEXT NOT NULL DEFAULT 'pending', -- pending | accepted
  created_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, friend_id)
);
CREATE TABLE IF NOT EXISTS used_qr_tokens (
  sig TEXT PRIMARY KEY,
  used_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS subscriptions (
  id TEXT PRIMARY KEY,
  venue_id TEXT NOT NULL REFERENCES venues(id),
  plan TEXT NOT NULL,
  monthly_price INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'active', -- active | canceled
  method TEXT NOT NULL DEFAULT 'pilot_invoice',
  started_at INTEGER NOT NULL,
  current_period_end INTEGER NOT NULL,
  canceled_at INTEGER
);
CREATE TABLE IF NOT EXISTS coupons (
  id TEXT PRIMARY KEY,
  venue_id TEXT NOT NULL REFERENCES venues(id),
  title TEXT NOT NULL,
  description TEXT,
  points_cost INTEGER DEFAULT 0,
  active INTEGER DEFAULT 1,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS venue_events (
  id TEXT PRIMARY KEY,
  venue_id TEXT NOT NULL REFERENCES venues(id),
  title TEXT NOT NULL,
  date_label TEXT,
  lineup TEXT,
  entry TEXT,
  active INTEGER DEFAULT 1,
  created_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  plan TEXT NOT NULL DEFAULT 'vip',
  monthly_price INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  method TEXT NOT NULL DEFAULT 'pilot_invoice',
  started_at INTEGER NOT NULL,
  current_period_end INTEGER NOT NULL,
  canceled_at INTEGER
);
CREATE TABLE IF NOT EXISTS email_verifications (
  email TEXT PRIMARY KEY,
  pin TEXT NOT NULL,
  attempts INTEGER DEFAULT 0,
  verify_token TEXT,
  created_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS coupon_redemptions (
  id TEXT PRIMARY KEY,
  coupon_id TEXT NOT NULL REFERENCES coupons(id),
  user_id TEXT NOT NULL REFERENCES users(id),
  venue_id TEXT NOT NULL REFERENCES venues(id),
  created_at INTEGER NOT NULL
);
`);

// lightweight migrations for databases created before these columns existed
for (const migration of [
  "ALTER TABLE users ADD COLUMN avatar TEXT DEFAULT '🌙'",
  "ALTER TABLE venues ADD COLUMN claim_code TEXT",
  "ALTER TABLE venues ADD COLUMN image_url TEXT",
]) {
  try {
    db.exec(migration);
  } catch {
    /* column already exists */
  }
}

db.exec(`
CREATE TABLE IF NOT EXISTS blocks (
  user_id TEXT NOT NULL REFERENCES users(id),
  blocked_id TEXT NOT NULL REFERENCES users(id),
  created_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, blocked_id)
);
CREATE TABLE IF NOT EXISTS reports (
  id TEXT PRIMARY KEY,
  reporter_id TEXT NOT NULL REFERENCES users(id),
  target_type TEXT NOT NULL, -- 'lounge_message' | 'user'
  target_id TEXT NOT NULL,
  reason TEXT,
  status TEXT NOT NULL DEFAULT 'open',
  created_at INTEGER NOT NULL
);
`);

const now = () => Date.now();
const uid = (prefix) => `${prefix}_${crypto.randomBytes(9).toString("hex")}`;

function seed() {
  const venueCount = db.prepare("SELECT COUNT(*) AS c FROM venues").get().c;
  if (venueCount === 0) {
    const venues = JSON.parse(
      fs.readFileSync(path.join(__dirname, "venues.seed.json"), "utf8")
    );
    const insert = db.prepare(`
      INSERT INTO venues (id, name, type, area, district, address, meta, music, entry, dress,
        foreigner, tonight, description, tags, filter_tags, lat, lng, map_x, map_y, color,
        map_count, viewers, is_partner, plan, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    for (const v of venues) {
      insert.run(
        v.id, v.name, v.type, v.area, v.district, v.address, v.meta, v.music,
        v.entry, v.dress, v.foreigner, v.tonight, v.description,
        JSON.stringify(v.tags || []), JSON.stringify(v.filterTags || []),
        v.coords ? v.coords[0] : null, v.coords ? v.coords[1] : null,
        v.mapX || null, v.mapY || null, v.color || null,
        v.mapCount || 0, v.viewers || 0, 0, "free", now()
      );
    }
  }

  const botCount = db.prepare("SELECT COUNT(*) AS c FROM users WHERE is_bot = 1").get().c;
  if (botCount === 0) {
    const bots = [
      { handle: "@mike", name: "Mike", venue: "the-henz-club" },
      { handle: "@ana", name: "Ana", venue: "cakeshop" },
      { handle: "@jin", name: "Jin", venue: "seoul-brewery-seongsu" },
      { handle: "@lucy", name: "Lucy", venue: "faust" },
      { handle: "@kai", name: "Kai", venue: "times-apgu" },
    ];
    const insertUser = db.prepare(`
      INSERT INTO users (id, handle, display_name, provider, language, location_sharing, is_bot, created_at)
      VALUES (?, ?, ?, 'seed', 'en', 1, 1, ?)
    `);
    const insertCheckin = db.prepare(`
      INSERT INTO checkins (id, user_id, venue_id, method, points_awarded, created_at, expires_at)
      VALUES (?, ?, ?, 'self', 0, ?, ?)
    `);
    for (const bot of bots) {
      const id = uid("usr");
      insertUser.run(id, bot.handle, bot.name, now());
      const venueExists = db.prepare("SELECT id FROM venues WHERE id = ?").get(bot.venue);
      if (venueExists) {
        // bots stay "at" their venue so the social screen has life during the pilot
        insertCheckin.run(uid("chk"), id, bot.venue, now(), now() + 1000 * 60 * 60 * 24 * 365);
      }
    }
  }

  const couponCount = db.prepare("SELECT COUNT(*) AS c FROM coupons").get().c;
  if (couponCount === 0) {
    const defaults = [
      ["cakeshop", "Welcome drink", "Show your KR NIGHT check-in at the bar for one welcome drink.", 0],
      ["the-henz-club", "₩5,000 entry discount", "Verified QR check-in gets ₩5,000 off entry tonight.", 0],
      ["club-ff", "Free shot with first drink", "Redeem with 200 Night Points after check-in.", 200],
    ];
    const insert = db.prepare(
      "INSERT INTO coupons (id, venue_id, title, description, points_cost, active, created_at) VALUES (?, ?, ?, ?, ?, 1, ?)"
    );
    for (const [venueId, title, description, cost] of defaults) {
      const venueExists = db.prepare("SELECT id FROM venues WHERE id = ?").get(venueId);
      if (venueExists) insert.run(uid("cpn"), venueId, title, description, cost, now());
    }
  }
}

seed();

// every venue gets a claim code KR NIGHT ops hands to the real owner
// (list them with: node scripts/claim-codes.mjs)
{
  const missing = db.prepare("SELECT id FROM venues WHERE claim_code IS NULL").all();
  const setCode = db.prepare("UPDATE venues SET claim_code = ? WHERE id = ?");
  for (const venue of missing) {
    setCode.run(crypto.randomBytes(4).toString("hex").toUpperCase(), venue.id);
  }
}

module.exports = { db, uid, now };
