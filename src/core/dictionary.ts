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
/**
 * The word as a card shows it: nouns with their article ("de gracht"),
 * everything else bare. A word that is both a noun and a verb (eten) gets
 * the article only in its noun sense: pass the card's meaning to decide.
 */
export function dictionaryLabel(pack: LanguagePack, lemma: string, meaning?: string): string {
  const article = cardArticle(pack, lemma, meaning);
  const written = cardCase(pack, lemma, meaning);
  return article ? withArticle(article, written) : written;
}

/**
 * How the word is written on its card. The card's own meaning decides first:
 * "leiden = to lead" and "wei = meadow" stay lower case, "Wei (a name)" and
 * "Ahmet (a name)" take their capital. Otherwise the pack's own rule.
 */
export function cardCase(pack: LanguagePack, lemma: string, meaning?: string): string {
  if (meaning) {
    if (/^to /.test(meaning)) return lemma;
    // A name the pack doesn't list itself (Ahmet, Accra): its meaning spells it.
    const own = meaning.slice(0, lemma.length);
    const listed = !!pack.lexicon[lemma];
    if (!listed && own.toLowerCase() === lemma && own !== lemma && !/\p{L}/u.test(meaning[lemma.length] ?? "")) return own;
    if (/^\p{Ll}/u.test(meaning) && !/^the /.test(meaning)) return lemma;
  }
  return pack.displayCase?.(lemma) ?? lemma;
}

/** The article a card's noun takes, or null (not a noun, used as a verb or adverb here, or a name). */
export function cardArticle(pack: LanguagePack, lemma: string, meaning?: string): string | null {
  const article = pack.nounArticle?.(lemma) ?? null;
  if (!article || (meaning && /^to /.test(meaning))) return null;
  const homograph = pack.homographs?.[lemma];
  if (homograph && meaning !== undefined && meaning === homograph.other) return null;
  // Names and places: Spanje, Mientje, Visser. Only a few keep one (de Noordzee).
  if (/^\p{Lu}/u.test(cardCase(pack, lemma, meaning)) && !pack.properArticles?.has(lemma)) return null;
  return article;
}

/** "walk, stroll" → "to walk, to stroll"; leaves "can, …", "(in 'tot ziens')" and parts already with to. */
export function asVerbMeaning(meaning: string): string {
  return meaning
    .split(/;\s*/)
    .map((part) =>
      part
        .split(/,\s*(?![^(]*\))/)
        .map((m) => (/^(be |get |have )?\(|^(shall|will|can|could|may|might|must|to)\b/.test(m) ? m : `to ${m}`))
        .join(", "),
    )
    .join("; ");
}

/** Keep the verb parts ("to eat") or the other parts ("food, meal") of a mixed meaning. */
export function pickSense(meaning: string, pos: "noun" | "verb" | null): string {
  if (!pos) return meaning;
  const parts = meaning.split(/;\s*|,\s*(?![^(]*\))/);
  const verb = parts.filter((p) => /^to /.test(p));
  const other = parts.filter((p) => !/^to /.test(p));
  if (!verb.length || !other.length) return meaning;
  return (pos === "verb" ? verb : other).join(", ");
}

/**
 * What a card says about a word met in a sentence: its dictionary form and
 * the meaning of that form in this sentence. "iets te eten" gives
 * eten = to eat; "het eten is klaar" gives het eten = food, meal; "we
 * fietsen" gives fietsen = to cycle, not de fiets.
 */
function computeCardSense(
  pack: LanguagePack,
  form: string,
  help: { meaning: string; base?: string },
  sentence: string,
): { lemma: string; meaning: string } {
  // The sentence's hint counts only when the word can be that: "te duur" is "too expensive", not a verb.
  const hint = pack.posInContext?.(form, sentence) ?? null;
  const base = (help.base ?? form).toLowerCase();
  const key = pack.homographs?.[base] ? base : form.toLowerCase();
  const homograph = pack.homographs?.[key];
  if (homograph) {
    // "twee dagen": a plural of the noun is the noun, whatever comes before it.
    const plural = form.toLowerCase() !== base && form.toLowerCase().startsWith(base) && /(en|s)$/.test(form) && !homograph.nounLemma;
    // "twee boeken": the lexicon reads the form as the plural, unless the sentence says verb.
    // "een enkele keer": an inflected adjective, never the noun.
    const adjective = form.toLowerCase() !== base && form.toLowerCase() === `${base}e`;
    const capital = key.charAt(0).toUpperCase() + key.slice(1);
    const named = !!homograph.nounWhenCapital && hint !== "verb" && new RegExp(`\\b${capital}\\b`, "u").test(sentence);
    const asNoun = named || (hint === "noun" && !adjective) || (hint !== "verb" && (plural || (!!homograph.nounLemma && base === homograph.nounLemma)));
    return asNoun
      ? { lemma: homograph.nounLemma ?? base, meaning: homograph.noun }
      : // "we fietsen": the verb's own form, not the noun the lexicon gives as base.
        { lemma: homograph.otherLemma ?? (homograph.nounLemma ? key : base), meaning: homograph.other };
  }
  const canBeVerb = !!pack.verbFor?.(form) || isVerb(pack, (help.base ?? form).toLowerCase());
  let lemma = (help.base ?? form).toLowerCase();
  // "het schaatsen" is the verb used as a noun: with no article of its own, its card is the verb.
  const pos = (hint === "verb" && !canBeVerb) || (hint === "noun" && !pack.nounArticle?.(lemma)) ? null : hint;
  const inf = pack.verbFor?.(form);
  if (pos === "verb" && inf && inf !== lemma && pack.nounArticle?.(lemma)) lemma = inf;
  // "ik vroeg": a past form whose lexicon entry is the adjective (vroeg = early) is the verb vragen.
  if (pos === "verb" && inf && inf !== lemma && !isVerb(pack, lemma) && help.base === undefined) lemma = inf;
  // Met in its dictionary form: the sentence's own meaning is the right sense.
  // Met inflected (lacht): the dictionary form's own entry ("to laugh").
  const dictionary = pack.lexicon[lemma]?.dictionary;
  const own = form === lemma ? (dictionary && pos !== "noun" ? dictionary : help.meaning) : cardMeaning(pack, lemma, help.meaning);
  let meaning = pickSense(own, pos);
  const verb =
    pos === "verb" || (pos === null && !pack.nounArticle?.(lemma) && (isVerb(pack, lemma) || pack.verbFor?.(lemma) === lemma));
  if (verb) meaning = asVerbMeaning(meaning);
  // "il telefono = phone; I phone": a noun card keeps only the noun's senses.
  if (cardArticle(pack, lemma, meaning)) meaning = withoutVerbForms(meaning);
  return { lemma, meaning };
}

const senseCache = new WeakMap<LanguagePack, Map<string, { lemma: string; meaning: string }>>();

/**
 * The card a word gets from the sentence it's in (see computeCardSense).
 * Remembered: the same word in the same sentence always gives the same card,
 * and Review and the Words pages ask for thousands of them.
 */
export function cardSense(
  pack: LanguagePack,
  form: string,
  help: { meaning: string; base?: string },
  sentence: string,
): { lemma: string; meaning: string } {
  let cache = senseCache.get(pack);
  if (!cache) senseCache.set(pack, (cache = new Map()));
  const key = `${form}\u0000${help.base ?? ""}\u0000${help.meaning}\u0000${sentence}`;
  let sense = cache.get(key);
  if (!sense) {
    sense = computeCardSense(pack, form, help, sentence);
    if (cache.size > 50000) cache.clear();
    cache.set(key, sense);
  }
  return sense;
}

/** Drops senses that are a conjugated verb ("I phone", "(they) work") from a noun's meaning. */
function withoutVerbForms(meaning: string): string {
  const parts = meaning.split(/;\s*/);
  const kept = parts.filter((p) => !/^(I|you|he|she|we|they|\((I|you|he|she|it|we|they)\)) /.test(p));
  return kept.length && kept.length < parts.length ? kept.join("; ") : meaning;
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
  const own = pack.lexicon[lemma]?.dictionary ?? pack.lexicon[lemma]?.meaning;
  // A plural met in a text, with no entry for the singular: make the English singular too.
  const meaning = own ?? (pack.nounArticle?.(lemma) ? formMeaning.split(/([;,]\s*)/).map(singular).join("") : formMeaning);
  if (isVerb(pack, lemma)) return asVerbMeaning(meaning);
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
