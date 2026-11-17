/**
 * What a unit's texts carry that the rest of the course relies on, before
 * rewriting them as a story: grammar examples quoted only from them, and core
 * words met only in them. Usage: npx tsx scripts/story-constraints.ts nl a1-dag-en-tijd
 */
import { getPack } from "../src/core/registry";
import { helpFor, lemmaOf } from "../src/core/content";

const [code, unitId] = process.argv.slice(2);
const pack = getPack(code)!;
const unit = pack.units.find((u) => u.id === unitId)!;
const own = unit.texts.flatMap((t) => t.paragraphs.flat().map((s) => s.text));
const others = [
  ...pack.units.filter((u) => u !== unit).flatMap((u) => u.texts.flatMap((t) => t.paragraphs.flat().map((s) => s.text))),
  ...pack.units.flatMap((u) => u.listening.flatMap((l) => l.lines.map((x) => x.text))),
];
console.log("## Grammar examples quoted only from this unit's texts");
for (const g of pack.grammar)
  for (const ex of g.lesson?.examples ?? [])
    if (own.some((s) => s.includes(ex.text)) && !others.some((s) => s.includes(ex.text))) console.log(`${g.id}: ${ex.text}`);
const met = (texts: typeof unit.texts) => {
  const m = new Set<string>();
  for (const t of texts) for (const s of t.paragraphs.flat()) for (const tok of pack.tokenize(s.text)) {
    if (tok.kind !== "word") continue;
    m.add(tok.normalized);
    m.add(lemmaOf(helpFor(pack.lexicon, t, tok.normalized), tok.normalized));
  }
  return m;
};
const elsewhere = met(pack.units.filter((u) => u !== unit && u.level === unit.level).flatMap((u) => u.texts));
const here = met(unit.texts);
console.log("\n## Core words met only here");
console.log((pack.coreVocabulary[unit.level] ?? []).filter((w) => here.has(w) && !elsewhere.has(w)).join(", "));
console.log("\n## Grammar points tagged only here");
const tagged = new Set(pack.units.filter((u) => u !== unit && u.level === unit.level).flatMap((u) => u.texts.flatMap((t) => t.grammar)));
console.log([...new Set(unit.texts.flatMap((t) => t.grammar))].filter((g) => !tagged.has(g)).join(", "));
console.log("\n## Texts:", unit.texts.map((t) => t.id).join(", "));
console.log("## Listening:", unit.listening.map((l) => `${l.id} (${l.lines.map((x) => x.speaker).filter((v, i, a) => a.indexOf(v) === i).join("/")})`).join(", "));
console.log("## Writing:", (unit.writing ?? []).map((w) => w.id).join(", "));
console.log("## Grammar lessons:", pack.grammar.filter((g) => g.unit === unit.id).map((g) => g.id).join(", "));

// Words later tasks need that only these texts teach (gaps if the texts went away).
import { coherenceGaps } from "../src/core/coherence";
const base = new Set(coherenceGaps(pack).map((g) => JSON.stringify(g)));
const without = { ...pack, units: pack.units.map((u) => (u === unit ? { ...u, texts: [] } : u)) };
console.log("\n## Words other tasks need that only these texts teach");
console.log(coherenceGaps(without as typeof pack).filter((g) => !base.has(JSON.stringify(g))).map((g) => `${g.where}: ${(g as {word?: string}).word ?? JSON.stringify(g)}`).join("\n"));
