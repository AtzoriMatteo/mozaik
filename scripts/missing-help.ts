/** Words in a unit that have no help yet. Usage: npx tsx scripts/missing-help.ts it it-a1-giornata */
import { getPack } from "../src/core/registry";
import { helpFor } from "../src/core/content";
const [code, unitId] = process.argv.slice(2);
const pack = getPack(code)!;
const unit = pack.units.find((u) => u.id === unitId)!;
const missing = new Map<string, string>();
const check = (text: string, ctx: { words?: Record<string, unknown> }, where: string) => {
  for (const t of pack.tokenize(text))
    if (t.kind === "word" && !helpFor(pack.lexicon, ctx as never, t.normalized) && !pack.isNumberWord?.(t.normalized) && !missing.has(t.normalized)) missing.set(t.normalized, where);
};
for (const t of unit.texts) for (const s of t.paragraphs.flat()) check(s.text, t, t.id);
for (const l of unit.listening) for (const x of l.lines) check(x.text, l, l.id);
if (unit.checkpoint) for (const s of [...unit.checkpoint.text.flat(), ...unit.checkpoint.listening.lines]) check(s.text, { words: unit.checkpoint.words }, "checkpoint");
console.log([...missing.keys()].join(" "));
