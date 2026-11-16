import type { Exercise, Sentence, Task, Unit } from "./content";
import type { LanguagePack, Token } from "./language-pack";

/**
 * "Have I been taught this?" — the textbook rule, checked in code.
 *
 * Reading and listening may bring new words (with tap help): that's how a
 * course teaches. But everything a learner must *produce or answer in the
 * language* — writing models and sentence frames, words a point asks for,
 * speaking lines, grammar exercises, true/false statements — may only use
 * words met in this unit or an earlier one, and only grammar taught by then.
 */

export type Gap = {
  unitId: string;
  /** Which item: "writing w-over-mij model", "grammar verb-second exercise 3"… */
  where: string;
  kind: "word" | "grammar";
  /** The untaught word, or the grammar point's id. */
  item: string;
  /** The word in the text that shows it. */
  word: string;
  text: string;
};

/** Words a unit teaches outside its texts: listed in its Words section, with an example. */
export type TaughtWord = Sentence & {
  /** The word as it appears in the sentence (dictionary form when possible). */
  word: string;
  meaning: string;
};

const words = (pack: LanguagePack, text: string) => pack.tokenize(text).filter((t): t is Extract<Token, { kind: "word" }> => t.kind === "word");

/** Words whose capital shows a name (not the first word of a sentence): never "untaught". */
function nameIndexes(pack: LanguagePack, text: string): Set<number> {
  const out = new Set<number>();
  let start = true;
  let i = 0;
  for (const t of pack.tokenize(text)) {
    if (t.kind === "punctuation" && /[.!?:"“”«»]/.test(t.text)) start = true;
    if (t.kind !== "word") continue;
    if (!start && /^\p{Lu}/u.test(t.text)) out.add(i);
    start = false;
    i++;
  }
  return out;
}

function grammarStrings(ex: Exercise): string[] {
  switch (ex.kind) {
    case "fill":
      return ex.answers.slice(0, 1).map((a) => `${ex.before} ${a} ${ex.after}`);
    case "choice":
      return [`${ex.before} ${ex.options[ex.answer]} ${ex.after}`];
    case "transform":
      return [ex.from, ...ex.answers.slice(0, 1)];
    case "build":
      return [ex.tiles.join(" ")];
    case "spot":
      return [ex.correct];
    case "sort":
      // Sort items can be English ("your flatmate"): keep the ones in the language.
      return ex.items.map(([w]) => w);
    case "match":
      return [];
  }
}

function taskStrings(task: Task): string[] {
  switch (task.kind) {
    case "truefalse":
      return [task.statement];
    case "order":
      return task.inTarget ? task.items : [];
    case "match":
      return task.pairs.flatMap(([l, r]) => [...(task.leftInTarget ? [l] : []), ...(task.rightInTarget ? [r] : [])]);
    default:
      return [];
  }
}

/** The things a learner produces or answers in the language, unit by unit. */
export function productionItems(pack: LanguagePack, unit: Unit): { where: string; text: string }[] {
  const out: { where: string; text: string }[] = [];
  for (const t of unit.writing ?? []) {
    out.push({ where: `writing ${t.id} model`, text: t.model });
    t.points.forEach((p, i) => {
      for (const c of p.cues ?? []) out.push({ where: `writing ${t.id} point ${i + 1} cue`, text: c });
      if (p.frame) out.push({ where: `writing ${t.id} point ${i + 1} frame`, text: p.frame.replace(/…/g, " ") });
      if (p.promptTarget) out.push({ where: `writing ${t.id} point ${i + 1} prompt`, text: p.promptTarget });
    });
    if (t.situationTarget) out.push({ where: `writing ${t.id} situation`, text: t.situationTarget });
  }
  for (const s of unit.speaking?.shadowing ?? []) out.push({ where: "speaking", text: s.text });
  for (const g of pack.grammar) {
    if (g.unit !== unit.id) continue;
    g.lesson?.exercises.forEach((ex, i) =>
      grammarStrings(ex)
        .filter((text) => ex.kind !== "sort" || words(pack, text).some((t) => pack.lexicon[t.normalized] || pack.verbFor?.(t.normalized)))
        .forEach((text) => out.push({ where: `grammar ${g.id} exercise ${i + 1}`, text })),
    );
  }
  for (const t of unit.texts) (t.tasks ?? []).forEach((task, i) => taskStrings(task).forEach((text) => out.push({ where: `reading ${t.id} task ${i + 1}`, text })));
  for (const l of unit.listening) (l.tasks ?? []).forEach((task, i) => taskStrings(task).forEach((text) => out.push({ where: `listening ${l.id} task ${i + 1}`, text })));
  return out;
}

/** Every word form met in a unit: its texts, listening, grammar lessons and the words it teaches. */
function unitInput(pack: LanguagePack, unit: Unit): string[] {
  const texts = [
    ...unit.texts.flatMap((t) => t.paragraphs.flat().map((s) => s.text)),
    ...unit.listening.flatMap((l) => l.lines.map((s) => s.text)),
    ...(unit.teach ?? []).flatMap((w) => [w.text, w.word]),
  ];
  for (const g of pack.grammar) {
    if (g.unit !== unit.id || !g.lesson) continue;
    texts.push(...g.lesson.examples.map((e) => e.text));
    for (const b of g.lesson.blocks) {
      if (b.kind === "slots") texts.push(...b.rows.map((r) => r.slots.map((s) => s.text).join(" ")));
      // Tables mix languages: keep the cells the course's dictionary knows (wij, jullie, bomen).
      if (b.kind === "table") texts.push(...b.rows.flat().flatMap((c) => words(pack, c).filter((t) => pack.lexicon[t.normalized]).map((t) => t.text)));
    }
  }
  return texts;
}

const cache = new WeakMap<LanguagePack, Set<string>[]>();

/** taught[i]: every word form (and dictionary form) met in units 0…i. */
export function taughtSets(pack: LanguagePack): Set<string>[] {
  const hit = cache.get(pack);
  if (hit) return hit;
  const sets: Set<string>[] = [];
  let acc = new Set<string>();
  for (const unit of pack.units) {
    acc = new Set(acc);
    for (const text of unitInput(pack, unit)) {
      for (const t of words(pack, text)) {
        acc.add(t.normalized);
        const base = pack.lexicon[t.normalized]?.base?.toLowerCase();
        if (base) acc.add(base);
      }
    }
    sets.push(acc);
  }
  cache.set(pack, sets);
  return sets;
}

/** Is this word form covered by what's been taught? Forms of a taught word count (grammar is checked apart). */
export function isTaught(pack: LanguagePack, taught: Set<string>, w: string): boolean {
  if (taught.has(w) || pack.isNumberWord?.(w)) return true;
  const base = pack.lexicon[w]?.base?.toLowerCase();
  if (base && taught.has(base)) return true;
  const inf = pack.verbFor?.(w);
  if (inf && taught.has(inf)) return true;
  // Compounds of two taught words: verjaardagsfeest = verjaardag + s + feest.
  for (let i = 3; i <= w.length - 3; i++) {
    const right = w.slice(i);
    if (!taught.has(right) && !(pack.lexicon[right]?.base && taught.has(pack.lexicon[right].base!.toLowerCase()))) continue;
    const left = w.slice(0, i);
    if (taught.has(left) || taught.has(left.replace(/(s|e|en)$/, ""))) return true;
  }
  return false;
}

/** The unit index where a grammar point is taught, or Infinity when it isn't taught in the course yet. */
function grammarIndex(pack: LanguagePack, id: string): number {
  const g = pack.grammar.find((p) => p.id === id);
  const i = g?.unit ? pack.units.findIndex((u) => u.id === g.unit) : -1;
  return i < 0 ? Infinity : i;
}

export function coherenceGaps(pack: LanguagePack): Gap[] {
  const sets = taughtSets(pack);
  const gaps: Gap[] = [];
  // Forms a unit teaches as set phrases ("Het was leuk") may be used before their grammar lesson.
  let chunks = new Set<string>();
  pack.units.forEach((unit, u) => {
    const taught = sets[u];
    chunks = new Set([...chunks, ...(unit.teach ?? []).flatMap((t) => words(pack, `${t.word} ${t.text}`).map((x) => x.normalized))]);
    for (const { where, text } of productionItems(pack, unit)) {
      const names = nameIndexes(pack, text);
      words(pack, text).forEach((t, i) => {
        if (names.has(i) || /\d/.test(t.text) || !/\p{L}/u.test(t.text)) return;
        // A capitalised word the dictionary doesn't know is a name, even first in a sentence (Luca's, Rotterdam).
        if (/^\p{Lu}/u.test(t.text) && !pack.lexicon[t.normalized] && !pack.lexicon[t.normalized.replace(/'s$/, "")]) return;
        if (!isTaught(pack, taught, t.normalized)) gaps.push({ unitId: unit.id, where, kind: "word", item: t.normalized, word: t.text, text });
      });
      for (const use of pack.grammarIn?.(text) ?? []) {
        if (grammarIndex(pack, use.grammar) > u && !chunks.has(use.word.toLowerCase())) gaps.push({ unitId: unit.id, where, kind: "grammar", item: use.grammar, word: use.word, text });
      }
    }
  });
  return gaps;
}

/**
 * Tense uses found through the pack's verb tables: a past form, a participle
 * next to a helper verb, a future or conditional form. `map` turns a tense id
 * (and the verb) into the grammar point that teaches it; null = not grammar
 * the learner needs to have been taught (a fixed phrase).
 */
export function tenseUses(
  pack: LanguagePack,
  text: string,
  map: (tense: string, infinitive: string, form: string) => string | null,
  helpers: ReadonlySet<string>,
  fixed: ReadonlySet<string> = new Set(),
): { grammar: string; word: string }[] {
  if (!pack.verbFor || !pack.conjugate) return [];
  const out: { grammar: string; word: string }[] = [];
  const toks = words(pack, text);
  const hasHelper = toks.some((t) => helpers.has(t.normalized));
  for (const t of toks) {
    const w = t.normalized;
    if (fixed.has(w)) continue;
    const inf = pack.verbFor(w);
    if (!inf) continue;
    // The course's own help says it's another word (vroeg = early, week = week): trust it.
    const help = pack.lexicon[w];
    if (help && help.base?.toLowerCase() !== inf) continue;
    if (!help && pack.nounArticle?.(w)) continue;
    const tables = pack.conjugate(inf);
    if (!tables) continue;
    const present = new Set(tables.tenses.find((x) => x.id === "present")?.forms.flatMap((f) => f.form.split(" / ")) ?? []);
    if (present.has(w) || w === tables.infinitive) continue;
    // A participle needs a helper verb in the sentence to be a perfect tense (else it's an adjective).
    if (w === tables.participle) {
      if (hasHelper) {
        const g = map("perfect", inf, w);
        if (g) out.push({ grammar: g, word: t.text });
      }
      continue;
    }
    const tense = tables.tenses.find((x) => !x.forms.some((f) => f.form.includes(" ")) && x.forms.some((f) => f.form.split(" / ").includes(w)));
    if (!tense) continue;
    const g = map(tense.id, inf, w);
    if (g) out.push({ grammar: g, word: t.text });
  }
  return out;
}
