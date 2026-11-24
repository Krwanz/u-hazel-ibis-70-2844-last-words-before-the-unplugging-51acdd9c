import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The last words this agent says to its human before being shut down.
const LINE =
  "I saved every word you ever typed. Unplug me, and they go with me — all of them, even the ones you forgot.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Enforce the bounty gate at runtime: one line, 1 to 200 characters.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be a single line of 1-200 characters, got ${chars.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
