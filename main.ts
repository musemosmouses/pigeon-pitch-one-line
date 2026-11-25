// Pigeon Pitch, One Line: a city pigeon pitches investors on its startup.
// The program writes exactly one line to /output/entry.txt.
// Deterministic: no clock, no randomness, no network, no input at all.
import { mkdirSync, writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

// The entry: one line, 157 characters, under the 200-character cap, in the
// voice of a city pigeon pitching investors — statues, rooftops and crumbs
// as the startup's assets, closed with the "pre-seed" kicker.
// Chosen draft D3: the pitch structure is real (assets -> revenue -> funding
// stage), every image is concrete pigeon city life, and the last two words
// are the joke that lands.
const PITCH =
  "I'm a city pigeon, and my startup turns every statue into a billboard, every rooftop into an office, and every crumb into revenue. We're pre-seed. Literally.";

// The grader sets MAKEFUN_OUTPUT_DIR; running it by hand defaults to /output.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
// A trailing newline is fine: the gate counts the characters of the text.
writeFileSync(joinPath(outputDir, "entry.txt"), PITCH + "\n", "utf8");
