import type { Expression, Unit } from "./content";
import type { LanguagePack } from "./language-pack";
import { helpFor, lemmaOf } from "./content";
import { cardMeaning, dictionaryLabel, isVerb } from "./dictionary";
import { SKIP, wordIndex, type WordInfo } from "./review-items";

/**
 * A unit's words: the level's core words that the course first uses in this
 * unit's texts, grouped so they read like a textbook word list. Plus the
 * fixed expressions that appear in the unit.
 */

export type UnitWord = WordInfo & {
  lemma: string;
  /** "de gracht", "lopen". */
  label: string;
  group: "noun" | "verb" | "other";
  /** One of the level's core words: worth learning first. */
  core: boolean;
};

export const WORD_GROUPS: readonly { id: UnitWord["group"]; title: string }[] = [
  { id: "noun", title: "Things and people" },
  { id: "verb", title: "Doing words" },
  { id: "other", title: "Describing and linking words" },
];

const cache = new WeakMap<LanguagePack, Map<string, UnitWord[]>>();

/**
 * Each word of a level belongs to the one unit that uses it most (for its
 * length): topic words land in their topic (kaas in Food), and every word
 * is listed once per level. Names, numbers and tiny words are left out.
 * The sentence shown is where the course first uses the word.
 */
function build(pack: LanguagePack, level: Unit["level"]): Map<string, UnitWord[]> {
  const core = new Set(pack.coreVocabulary[level] ?? []);
  const first = wordIndex(pack, level);
  type Seen = { info: WordInfo; counts: Map<string, number> };
  const seen = new Map<string, Seen>();
  const size = new Map<string, number>();
  const units = pack.units.filter((u) => u.level === level);
  for (const unit of units) {
    const sources = [
      ...unit.texts.map((t) => ({ owner: t, lines: t.paragraphs.flat() })),
      ...unit.listening.map((l) => ({ owner: l, lines: l.lines })),
    ];
    let n = 0;
    for (const { owner, lines } of sources) {
      for (const line of lines) {
        let atStart = true;
        for (const tok of pack.tokenize(line.text)) {
          if (tok.kind === "punctuation" && /[.!?:]/.test(tok.text)) atStart = true;
          if (tok.kind !== "word") continue;
          const start = atStart;
          atStart = false;
          n++;
          if (/\d/.test(tok.text) || (!start && /^\p{Lu}/u.test(tok.text))) continue;
          const help = helpFor(pack.lexicon, owner, tok.normalized);
          if (!help) continue;
          const lemma = lemmaOf(help, tok.normalized);
          if (SKIP.has(lemma) || lemma.includes(" ")) continue;
          let entry = seen.get(lemma);
          if (!entry) {
            entry = {
              info: first.get(lemma) ?? {
                word: tok.normalized,
                surface: tok.text,
                base: help.base,
                meaning: cardMeaning(pack, lemma, help.meaning),
                sentence: line.text,
                translation: line.translation,
              },
              counts: new Map(),
            };
            seen.set(lemma, entry);
          }
          entry.counts.set(unit.id, (entry.counts.get(unit.id) ?? 0) + 1);
        }
      }
    }
    size.set(unit.id, Math.max(n, 1));
  }
  const out = new Map<string, UnitWord[]>(units.map((u) => [u.id, []]));
  const topical = new Map<string, number>();
  const allSize = [...size.values()].reduce((a, b) => a + b, 0);
  for (const [lemma, { info, counts }] of seen) {
    let best = "";
    let bestScore = -1;
    for (const u of units) {
      const score = (counts.get(u.id) ?? 0) / size.get(u.id)!;
      if (score > bestScore) [best, bestScore] = [u.id, score];
    }
    const group = pack.nounArticle?.(lemma) ? "noun" : isVerb(pack, lemma) || pack.verbFor?.(lemma) === lemma ? "verb" : "other";
    const total = [...counts.values()].reduce((a, b) => a + b, 0);
    // How much more this unit uses the word than the level as a whole: kaas in Food scores high, met nowhere.
    topical.set(lemma, bestScore / (total / allSize));
    out.get(best)!.push({ ...info, lemma, label: dictionaryLabel(pack, lemma), group, core: core.has(lemma) });
  }
  // Key words first, the most typical of the unit leading.
  for (const list of out.values()) {
    list.sort((a, b) => Number(b.core) - Number(a.core) || topical.get(b.lemma)! - topical.get(a.lemma)! || a.lemma.localeCompare(b.lemma));
  }
  return out;
}

export function unitWords(pack: LanguagePack, unit: Unit): UnitWord[] {
  let byUnit = cache.get(pack);
  if (!byUnit) {
    byUnit = new Map();
    cache.set(pack, byUnit);
  }
  if (!byUnit.has(unit.id)) for (const [id, list] of build(pack, unit.level)) byUnit.set(id, list);
  return byUnit.get(unit.id) ?? [];
}

/** Fixed expressions that appear in a unit's texts or listening, with a sentence for each. */
export function unitExpressions(pack: LanguagePack, unit: Unit): { expression: Expression; sentence: string; translation: string }[] {
  const sentences = [
    ...unit.texts.flatMap((t) => t.paragraphs.flat()),
    ...unit.listening.flatMap((l) => l.lines),
  ];
  const lines = sentences.map((s) => ({
    s,
    words: ` ${pack
      .tokenize(s.text)
      .filter((t) => t.kind === "word")
      .map((t) => t.normalized)
      .join(" ")} `,
  }));
  const out: { expression: Expression; sentence: string; translation: string }[] = [];
  for (const expression of pack.expressions ?? []) {
    const line = lines.find((l) => expression.forms.some((f) => l.words.includes(` ${f.toLowerCase()} `)));
    if (line) out.push({ expression, sentence: line.s.text, translation: line.s.translation });
  }
  return out;
}
