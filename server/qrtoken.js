const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

// Rotating signed QR tokens (business plan 4.2): the pass is not a static image.
// Format: KRN1.<userId>.<slot>.<sig>  where slot = floor(epoch/30s).
// A 6-digit manual code is derived from the same signature so staff can type it
// when camera scanning is not available at the door.

// 90s slots: the guest taps to reveal their pass and it stays valid for the
// whole time it is on screen (staff scan accepts the adjacent slot too).
const SLOT_SECONDS = 90;
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, "..", "data");

function loadSecret() {
  if (process.env.QR_SECRET) return process.env.QR_SECRET;
  const secretFile = path.join(DATA_DIR, "qr-secret");
  try {
    return fs.readFileSync(secretFile, "utf8").trim();
  } catch {
    const secret = crypto.randomBytes(32).toString("hex");
    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(secretFile, secret, { mode: 0o600 });
    return secret;
  }
}

const SECRET = loadSecret();

function currentSlot() {
  return Math.floor(Date.now() / 1000 / SLOT_SECONDS);
}

function signature(userId, slot) {
  return crypto
    .createHmac("sha256", SECRET)
    .update(`${userId}.${slot}`)
    .digest("hex")
    .slice(0, 16);
}

function manualCode(sig) {
  return String(parseInt(sig.slice(0, 12), 16) % 1000000).padStart(6, "0");
}

function issue(userId) {
  const slot = currentSlot();
  const sig = signature(userId, slot);
  const secondsLeft = SLOT_SECONDS - (Math.floor(Date.now() / 1000) % SLOT_SECONDS);
  return {
    qr: `KRN1.${userId}.${slot}.${sig}`,
    code: manualCode(sig),
    slotSeconds: SLOT_SECONDS,
    secondsLeft,
  };
}

// Accept the current slot and one slot either side so a QR shown right at the
// rotation boundary still scans.
function verifyQr(qrString) {
  const parts = String(qrString || "").trim().split(".");
  if (parts.length !== 4 || parts[0] !== "KRN1") return null;
  const [, userId, slotRaw, sig] = parts;
  const slot = Number(slotRaw);
  if (!Number.isInteger(slot)) return null;
  const nowSlot = currentSlot();
  if (Math.abs(nowSlot - slot) > 1) return null;
  if (signature(userId, slot) !== sig) return null;
  return { userId, sig };
}

function verifyManualCode(userId, code) {
  const nowSlot = currentSlot();
  for (const slot of [nowSlot, nowSlot - 1, nowSlot + 1]) {
    const sig = signature(userId, slot);
    if (manualCode(sig) === String(code).trim()) return { userId, sig };
  }
  return null;
}

module.exports = { issue, verifyQr, verifyManualCode, SLOT_SECONDS };
