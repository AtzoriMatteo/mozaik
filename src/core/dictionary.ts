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

/** Article and noun together: "de gracht", but "l'amico" with no space after an apostrophe. */
export const withArticle = (article: string, lemma: string) => (article.endsWith("'") ? `${article}${lemma}` : `${article} ${lemma}`);

/** "de gracht", "het huis", "l'acqua", or just "lopen". */
export function dictionaryLabel(pack: LanguagePack, lemma: string): string {
  const article = pack.nounArticle?.(lemma);
  return article ? withArticle(article, lemma) : lemma;
}

const verbCache = new WeakMap<LanguagePack, ReadonlySet<string>>();

/**
 * Infinitives the pack knows as verbs: some form points to them as its base
 * and looks conjugated (telt, telde, geteld). Nouns and adjectives never get
 * forms like that, so "getal" stays a noun while "tellen" is a verb.
 */
function verbsOf(pack: LanguagePack): ReadonlySet<string> {
  let verbs = verbCache.get(pack);
  if (!verbs && pack.verbList) {
    verbs = pack.verbList();
    verbCache.set(pack, verbs);
  }
  if (!verbs) {
    const set = new Set<string>();
    for (const [form, help] of Object.entries(pack.lexicon)) {
      const base = help.base?.toLowerCase();
      if (!base || base === form || !/(en|^(gaan|staan|slaan|doen|zien))$/.test(base)) continue;
      // Ordinals (tiende, zevende) look like past forms but aren't: they're the base + de.
      if (form === `${base}de` || form === `${base}ste`) continue;
      if (form.startsWith("ge") || /(t|de|te|den|ten)$/.test(form)) set.add(base);
    }
    verbs = set;
    verbCache.set(pack, verbs);
  }
  return verbs;
}

export const isVerb = (pack: LanguagePack, lemma: string) => verbsOf(pack).has(lemma) && !pack.nounArticle?.(lemma);

/**
 * The English side of a flashcard: the meaning of the dictionary form, not of
 * the form you met. Saving "telt" gives "to count", saving "getallen" gives
 * "number", even though the sentence keeps the form you read.
 */
export function cardMeaning(pack: LanguagePack, lemma: string, formMeaning: string): string {
  const own = pack.lexicon[lemma]?.meaning;
  // A plural met in a text, with no entry for the singular: make the English singular too.
  const meaning = own ?? (pack.nounArticle?.(lemma) ? formMeaning.split(/([;,]\s*)/).map(singular).join("") : formMeaning);
  if (isVerb(pack, lemma) && !/^to /.test(meaning)) {
    return meaning
      .split(/;\s*/)
      .map((part) => part.split(/,\s*/).map((m) => (/^(be |get |have )?\(/.test(m) ? m : `to ${m.replace(/^to /, "")}`)).join(", "))
      .join("; ");
  }
  return meaning;
}

const IRREGULAR_PLURALS: Record<string, string> = {
  children: "child", people: "person", men: "man", women: "woman", feet: "foot", teeth: "tooth", mice: "mouse",
};

/** English singular of a plural noun meaning: numbers → number, cities → city, boxes → box. */
export function singular(text: string): string {
  return text.replace(/^([\w' -]*?)(\w+)(\s*\(.*\))?$/, (all, head: string, word: string, note = "") => {
    const lower = word.toLowerCase();
    let one = word;
    if (IRREGULAR_PLURALS[lower]) one = IRREGULAR_PLURALS[lower];
    else if (/[^aeiou]ies$/.test(lower)) one = word.slice(0, -3) + "y";
    else if (/(ches|shes|xes|sses|zes)$/.test(lower)) one = word.slice(0, -2);
    else if (/uses$/.test(lower)) one = word.slice(0, -2);
    else if (/[^su]s$/.test(lower) && !/(news|series|species|is)$/.test(lower)) one = word.slice(0, -1);
    return `${head}${one}${note}`;
  });
}
