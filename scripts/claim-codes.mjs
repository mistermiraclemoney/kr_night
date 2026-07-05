// Ops tool: list every venue's claim code. KR NIGHT hands the code to the
// real venue owner in person; they enter it in Partner Console → Claim.
//   node scripts/claim-codes.mjs
import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dataDir = process.env.DATA_DIR || path.join(root, "data");
const db = new DatabaseSync(path.join(dataDir, "krnight.db"), { readOnly: true });

const rows = db
  .prepare("SELECT id, name, area, claim_code, owner_user_id FROM venues ORDER BY area, name")
  .all();

console.log("KR NIGHT venue claim codes\n");
for (const v of rows) {
  const status = v.owner_user_id ? "CLAIMED" : "open";
  console.log(`${String(v.claim_code || "-").padEnd(10)} ${String(v.area || "").padEnd(12)} ${v.name}  [${status}]`);
}
