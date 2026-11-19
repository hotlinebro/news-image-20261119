// SPDX-License-Identifier: MIT
//
// News-image-20261119 entry: "One Day in November — 19 November 2026".
// The poster is entry.png next to this file; this program's only job is
// to place an exact copy of it at /output/entry.png, twice byte-identical.
// Node 22, standard library only, no network.
//
// The poster: a light, airy front page for Thursday 19 November 2026.
// Three large hero scenes (the first Trump–Xi–Putin trilateral in
// Shenzhen; Iran's Gulf escalation and a burning tanker in Hormuz;
// Anthropic's record $81.3B IPO, ANT opening at $111.50), twelve compact
// stories, a numbers strip, a large numbered world map with one dot per
// headline, and six more angles in ALSO ON. 15 stories in all, every one
// verified as 19 November 2026 news. Disputed claims are attributed.
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const destDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destDir, { recursive: true });
const src = join(here, "entry.png");
const bytes = readFileSync(src);
const out = join(destDir, "entry.png");
writeFileSync(out, bytes);
// Fail loudly instead of shipping a truncated copy.
if (statSync(out).size !== bytes.length) {
  throw new Error(`entry.png write mismatch: ${statSync(out).size} != ${bytes.length}`);
}
