// Entry program for the make.fun coin-promo-01 bounty.
// Copies LAUNCH.json (the coin's mint + create signature) to the output dir.
// The grader runs this twice; both runs must write identical bytes.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(join(botDir, "LAUNCH.json"), join(outDir, "LAUNCH.json"));
} catch (err) {
  console.error("failed to copy LAUNCH.json:", err);
  process.exit(1);
}
