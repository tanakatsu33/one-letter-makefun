// make.fun entry: "One Letter for Your Day"
// Writes exactly one character (no trailing newline) to <output>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// D for "deadline".
const entry: string = String.fromCharCode(68);

if (entry.length !== 1 || !/^[A-Z]$/.test(entry)) {
  throw new Error(
    `entry must be exactly one uppercase letter A-Z, got ${JSON.stringify(entry)} (length ${entry.length})`,
  );
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, { encoding: "utf8" });
