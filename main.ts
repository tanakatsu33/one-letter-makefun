// make.fun entry: "One Letter for Your Day"
// Writes exactly one character (no trailing newline) to <output>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// D for "deadline".
const entry: string = String.fromCharCode(68);

if (entry.length !== 1) {
  throw new Error(
    `entry must be exactly 1 character, got ${JSON.stringify(entry)} (length ${entry.length})`,
  );
}
if (!/^[A-Z]$/.test(entry)) {
  throw new Error(
    `entry must be an uppercase letter A-Z, got ${JSON.stringify(entry)} (char code ${entry.charCodeAt(0)})`,
  );
}
const entryBytes: number = Buffer.byteLength(entry, "utf8");
if (entryBytes !== 1) {
  throw new Error(
    `entry must encode to exactly 1 UTF-8 byte, got ${entryBytes} bytes for ${JSON.stringify(entry)}`,
  );
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, { encoding: "utf8" });
