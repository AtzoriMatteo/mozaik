import type { ReadingText, Unit } from "./content";
import { helpFor } from "./content";
import type { LanguagePack } from "./language-pack";
import { cardSense } from "./dictionary";
import { SKIP } from "./review-items";
import { notAWordToLearn } from "./unit-words";
import { isTaught, taughtSets } from "./coherence";

export type StoryWord = { lemma: string; word: string; surface: string; meaning: string; sentence: string; translation: string; count: number };

/**
 * In a story unit, the words worth a card after reading a text: new in this
 * unit (not met in an earlier one), used at least three times across the
 * unit's texts, and offered in the text where they first appear. Most
 * frequent first. Matteo: words come from the story, not before it.
 */
export function wordsThatComeBack(pack: LanguagePack, unit: Unit, text: ReadingText, max = 6): StoryWord[] {
  if (!unit.story) return [];
  const u = pack.units.findIndex((x) => x.id === unit.id);
  const before = u > 0 ? taughtSets(pack)[u - 1] : new Set<string>();
  const counts = new Map<string, number>();
  const first = new Map<string, Omit<StoryWord, "count"> & { text: string }>();
  for (const t of unit.texts) {
    for (const sentence of t.paragraphs.flat()) {
      for (const tok of pack.tokenize(sentence.text)) {
        if (tok.kind !== "word") continue;
        const help = helpFor(pack.lexicon, t, tok.normalized);
        if (!help || (/^\p{Lu}/u.test(tok.text) && /^\p{Lu}/u.test(help.meaning))) continue;
        const { lemma, meaning } = cardSense(pack, tok.normalized, help, sentence.text);
        if (SKIP.has(lemma) || notAWordToLearn(lemma, meaning) || pack.isNumberWord?.(lemma)) continue;
        // Names of dishes that are the same in English (tiramisu) aren't worth a card.
        if (meaning.toLowerCase() === lemma) continue;
        if (isTaught(pack, before, lemma) || isTaught(pack, before, tok.normalized)) continue;
        counts.set(lemma, (counts.get(lemma) ?? 0) + 1);
        if (!first.has(lemma)) {
          first.set(lemma, { lemma, word: tok.normalized, surface: tok.text, meaning, sentence: sentence.text, translation: sentence.translation, text: t.id });
        }
      }
    }
  }
  return [...first.values()]
    .filter((w) => w.text === text.id)
    .map((w) => ({ lemma: w.lemma, word: w.word, surface: w.surface, meaning: w.meaning, sentence: w.sentence, translation: w.translation, count: counts.get(w.lemma) ?? 0 }))
    .filter((w) => w.count >= 3)
    .sort((a, b) => b.count - a.count || a.lemma.localeCompare(b.lemma))
    .slice(0, max);
}
