import type { Lexicon } from "@/core/content";

/** Written in lower case in Dutch, though English capitalises them. */
const LOWER = new Set([
  "cd", "tv", "cv", "nazi", "nazi's", "calvinist", "calvinisten", "toko", "toko's", "personeelsmanager",
  "oranjekoorts", "kerstdag", "kerstboom", "kerstpakket", "tikkie", "helder", "dam", "a", "g", "k", "n", "w", "t",
  "mevrouw", "huisarts", "huisartsenpraktijk", "kerst", "nieuwjaarsduik", "oudejaarsavond", "werelderfgoedlijst",
]);
/** Capitalised, though the English meaning starts with "the". */
const UPPER = new Set(["nederland", "randstad", "noordzee", "waddenzee", "napels", "maarten", "limburgs", "turks", "engelsen", "sint", "elfstedentocht", "teletekst"]);
const ENGLISH_CAPS = /^(I\b|I'|January|February|March|April|May|June|July|August|September|October|November|December|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/;

/**
 * How a Dutch word is written on a card: Nederland, Nederlands, Duits and
 * NS take a capital, as do names; maandag, januari and tv don't. Read off
 * the lexicon: an English meaning with a capital (German, Germany, Dutch
 * Railways) means a Dutch capital too, but months and days don't.
 */
export function makeDisplayCase(lexicon: Lexicon) {
  return (lemma: string): string => {
    const meaning = lexicon[lemma]?.meaning ?? "";
    if (UPPER.has(lemma)) return lemma.charAt(0).toUpperCase() + lemma.slice(1);
    if (LOWER.has(lemma) || !/^\p{Lu}/u.test(meaning) || ENGLISH_CAPS.test(meaning)) return lemma;
    // WhatsApp, DigiD, NS, B1: the meaning spells the word itself.
    const own = meaning.slice(0, lemma.length);
    if (own.toLowerCase() === lemma && !/\p{L}/u.test(meaning[lemma.length] ?? "")) return own;
    return lemma.charAt(0).toUpperCase() + lemma.slice(1);
  };
}
