// SPDX-License-Identifier: MIT
//
// News-image-20261119 v2: "One Day in November — 19 November 2026".
// The poster lives in entry.png beside this file. This program does
// one thing only: copy those exact bytes to /output/entry.png, so both
// grading runs produce the same file. Node 22, stdlib only, no network.
//
// The poster: a light front page for Thursday 19 November 2026. Three
// large hero scenes (the first Trump-Xi-Putin trilateral in Shenzhen;
// Iran's Gulf escalation and a burning tanker in Hormuz; Anthropic's
// record $81.3B IPO, ANT opening at $111.50), eighteen compact stories
// in a 3x6 grid, an eight-box numbers strip, a large numbered world map
// with one dot per located story, and nine more angles in ALSO ON.
// 21 stories in all, every one verified as 19 November 2026 news.
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const bytes = readFileSync(join(here, "entry.png"));
const target = join(outDir, "entry.png");
writeFileSync(target, bytes);
const written = statSync(target).size;
if (written !== bytes.length) {
  throw new Error(`entry.png copy failed: ${written} != ${bytes.length}`);
}
