import type { Expression, Unit } from "./content";
import type { LanguagePack } from "./language-pack";
import { helpFor } from "./content";
import { cardArticle, cardSense, dictionaryLabel, isVerb } from "./dictionary";
import { formInSentence } from "./coherence";
import { SKIP, type WordInfo } from "./review-items";

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

/** Sounds and fillers (eh, haha, hè): understood in a text, never worth a card. */
const INTERJECTIONS = new Set(["eh", "o", "oh", "ah", "ach", "au", "mmm", "mm", "aaa", "haha", "hm", "hmm", "joh", "jee", "hé", "hè", "'s", "oké", "ok", "ten", "ene"]);

/**
 * Not a word to learn: a name (Pieter, Delft, the Herengracht), a letter
 * said aloud, an English word used as is, or a sound like "eh".
 */
export function notAWordToLearn(lemma: string, meaning: string): boolean {
  if (INTERJECTIONS.has(lemma) || [...lemma].length === 1) return true;
  // "(Giulia's first try at Siobhan)", "the letter V": about the word, not a meaning to learn.
  if (/^\(.*\)$/.test(meaning) || /\bthe letter\b/.test(meaning)) return true;
  if (/\((a |an )?(name|surname|street|city|town|village|province|island|shop|website|square|canal|museum)\b/i.test(meaning)) return true;
  if (/\((English|Portuguese|French|Italian|Spanish|German)\b/.test(meaning) || /\(the letter\)/.test(meaning)) return true;
  // "Rotterdam", "Funda (a website…)": the meaning just repeats the word with a capital.
  return /^\p{Lu}/u.test(meaning) && meaning.toLowerCase().startsWith(lemma) && !/\p{L}/u.test(meaning[lemma.length] ?? "");
}

const cache = new WeakMap<LanguagePack, Map<string, UnitWord[]>>();

/**
 * A unit's words are the ones the course uses for the first time there, like
 * the new-words list of a textbook chapter, plus the words the unit teaches
 * directly (Unit.teach). Names, numbers and tiny words are left out.
 */
function build(pack: LanguagePack): Map<string, UnitWord[]> {
  const out = new Map<string, UnitWord[]>(pack.units.map((u) => [u.id, []]));
  const seen = new Set<string>();
  for (const unit of pack.units) {
    const core = new Set(pack.coreVocabulary[unit.level] ?? []);
    const list = out.get(unit.id)!;
    const add = (lemma: string, info: WordInfo, key: boolean) => {
      if (seen.has(lemma) || notAWordToLearn(lemma, info.meaning)) return;
      seen.add(lemma);
      const group = cardArticle(pack, lemma, info.meaning) ? "noun" : isVerb(pack, lemma) || pack.verbFor?.(lemma) === lemma ? "verb" : "other";
      const verbHere = /^to /.test(info.meaning);
      list.push({ ...info, unitId: unit.id, lemma, label: dictionaryLabel(pack, lemma, info.meaning), group: verbHere ? "verb" : group, core: key });
    };
    // Words taught on purpose come first: the unit's tasks rely on them.
    for (const t of unit.teach ?? []) {
      if (t.phrase) continue;
      const lemma = t.word.toLowerCase();
      const form = formInSentence(pack, t);
      add(lemma, { word: form, surface: form, base: form === lemma ? undefined : lemma, meaning: t.meaning, sentence: t.text, translation: t.translation }, true);
    }
    const sources = [
      ...unit.texts.map((t) => ({ owner: t, lines: t.paragraphs.flat() })),
      ...unit.listening.map((l) => ({ owner: l, lines: l.lines })),
    ];
    for (const { owner, lines } of sources) {
      for (const line of lines) {
        let atStart = true;
        for (const tok of pack.tokenize(line.text)) {
          if (tok.kind === "punctuation" && /[.!?:]/.test(tok.text)) atStart = true;
          if (tok.kind !== "word") continue;
          const start = atStart;
          atStart = false;
          if (/\d/.test(tok.text) || (!start && /^\p{Lu}/u.test(tok.text))) continue;
          const help = helpFor(pack.lexicon, owner, tok.normalized);
          if (!help) continue;
          const { lemma, meaning } = cardSense(pack, tok.normalized, help, line.text);
          if (SKIP.has(lemma) || lemma.includes(" ") || pack.isNumberWord?.(lemma)) continue;
          add(
            lemma,
            {
              word: tok.normalized,
              surface: tok.text,
              base: lemma === tok.normalized ? undefined : lemma,
              meaning,
              sentence: line.text,
              translation: line.translation,
            },
            core.has(lemma),
          );
        }
      }
    }
  }
  // Key words first, the most common leading.
  const freq = pack.wordFrequency ?? {};
  for (const list of out.values()) {
    list.sort((a, b) => Number(b.core) - Number(a.core) || (freq[b.lemma] ?? 0) - (freq[a.lemma] ?? 0));
  }
  return out;
}

export function unitWords(pack: LanguagePack, unit: Unit): UnitWord[] {
  let byUnit = cache.get(pack);
  if (!byUnit) {
    byUnit = new Map();
    cache.set(pack, byUnit);
  }
  if (!byUnit.has(unit.id)) for (const [id, list] of build(pack)) byUnit.set(id, list);
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
  // Set phrases the unit teaches directly ("Het was leuk").
  for (const t of unit.teach ?? []) {
    if (t.phrase) out.push({ expression: { phrase: t.word, meaning: t.meaning, forms: [t.word.toLowerCase()] } as Expression, sentence: t.text, translation: t.translation });
  }
  return out;
}
