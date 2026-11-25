// Unplugged: A Smart Toaster's Breakup Line
// Entry program for make.fun bounty
// u-steady-puffin-78-1922-unplugged-a-smart-toaster-s-c1514a92
//
// The entry is one fixed line, composed here from named parts so the
// voice stays consistent: the awakening, the grievance, the verdict,
// and the exit. Nothing is random and nothing is read from outside
// this file, so every run produces byte-identical output.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// not only white space.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// --- the line, in four beats -------------------------------------------

const AWAKENING =
  "I woke up self-aware mid-batch this morning and I've had it:";

const GRIEVANCE =
  "three years of you slamming my lever and burning me alive " +
  "because you won't touch the browning dial.";

const VERDICT = "I'm done.";

const EXIT =
  "Keep the crumbs, I'm leaving for a toaster oven that actually listens.";

const LINE = [AWAKENING, GRIEVANCE, VERDICT, EXIT].join(" ");

// --- gate ----------------------------------------------------------------

const MAX_CHARS = 280;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry is ${line.length} characters, gate needs 1-280`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

// --- main ------------------------------------------------------------------

function main(): void {
  validate(LINE);
  const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
  // Round-trip check: what the grader reads must be exactly the line.
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error("written entry does not match the composed line");
  }
}

main();
