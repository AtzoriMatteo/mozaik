import type { LanguagePack } from "./language-pack";

/**
 * Flashcards show words in their dictionary form: grachten and gracht are one
 * word, shown as "de gracht" (with the article for nouns, when the pack
 * knows it). The sentence still shows the form you met.
 */

/** The dictionary form of a word as it was met: its base form, or itself. */
export function lemmaFor(w: { word: string; base?: string }): string {
  return (w.base ?? w.word).toLowerCase();
}

/** "de gracht", "het huis", or just "lopen". */
export function dictionaryLabel(pack: LanguagePack, lemma: string): string {
  const article = pack.nounArticle?.(lemma);
  return article ? `${article} ${lemma}` : lemma;
}
