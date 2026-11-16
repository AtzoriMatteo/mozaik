import type { Lexicon } from "@/core/content";

/**
 * Card meanings for dictionary forms whose spelling has another use in the
 * texts (vragen: "questions" or "to ask"; zijn: "are" or "his"). Merged into
 * the lexicon entries as `dictionary`.
 */
export const DICTIONARY_MEANINGS: Record<string, string> = {
  delen: "to share; to divide",
  reizen: "to travel",
  koken: "to cook",
  roken: "to smoke",
  vragen: "to ask",
  zingen: "to sing",
  zijn: "to be",
  bewegen: "to move; to exercise",
  bieden: "to offer",
  laden: "to load; to charge (a battery)",
  laten: "to let; to leave; to have (something) done",
  zwijgen: "to stay silent",
  varen: "to sail, to go by boat",
  verliezen: "to lose",
  eten: "to eat",
  zullen: "shall, will",
  zwemmen: "to swim",
};

export function withDictionaryMeanings(lexicon: Lexicon): Lexicon {
  for (const [w, m] of Object.entries(DICTIONARY_MEANINGS)) {
    if (lexicon[w]) lexicon[w] = { ...lexicon[w], dictionary: m };
  }
  return lexicon;
}
