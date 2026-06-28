import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "mobile-web");

const filesToCopy = [
  "index.html",
  "styles.css",
  "app.js",
  "manifest.webmanifest",
];

async function main() {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  for (const file of filesToCopy) {
    await cp(path.join(rootDir, file), path.join(outputDir, file));
  }

  await cp(path.join(rootDir, "assets"), path.join(outputDir, "assets"), {
    recursive: true,
  });

  console.log(`Prepared mobile web bundle at ${outputDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
