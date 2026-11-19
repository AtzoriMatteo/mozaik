/**
 * Is a Dutch word used as a noun or a verb here? Only clear cases: after an
 * article or possessive it's a noun (het eten, mijn fiets); after a subject
 * pronoun, te, om or a helper verb it's a verb (we eten, iets te eten, ik
 * wil fietsen). Anything else: null, and the card keeps the dictionary sense.
 */
const NOUN_BEFORE = new Set(["de", "het", "een", "mijn", "jouw", "haar", "ons", "onze", "hun", "uw", "dit", "deze", "die", "geen", "elk", "elke", "welk", "welke"]);
const VERB_BEFORE = new Set([
  "ik", "jij", "u", "hij", "zij", "we", "wij", "jullie", "men", "te", "om",
  "ga", "gaat", "gaan", "wil", "wilt", "willen", "kan", "kun", "kunt", "kunnen", "moet", "moeten", "mag", "mogen", "zal", "zult", "zullen", "zou", "zouden", "blijf", "blijft", "blijven", "leer", "leert", "leren",
]);

const PLURAL = new Set(["we", "wij", "jullie"]);
const SUBJECTS = new Set(["ik", "jij", "u", "hij", "zij", "we", "wij", "jullie", "men"]);

export function dutchPosInContext(form: string, words: readonly string[]): "noun" | "verb" | null {
  const i = words.indexOf(form);
  if (i < 0) return null;
  const prev = words[i - 1];
  if (prev === undefined) return null;
  // "kan het stormen": het is the subject here, after a helper verb.
  if (prev === "het" && VERB_BEFORE.has(words[i - 2] ?? "")) return "verb";
  if (NOUN_BEFORE.has(prev)) return "noun";
  // "een goede reden", "het mooie leven": an inflected adjective between.
  if (/e$/.test(prev) && NOUN_BEFORE.has(words[i - 2] ?? "") && !VERB_BEFORE.has(prev)) return "noun";
  // After te, om or a helper verb only an infinitive is a verb: "te vroeg" is "too early".
  // After we/wij/jullie too: "moeten we vroeg vertrekken" is "early", not a verb.
  if (VERB_BEFORE.has(prev)) return (SUBJECTS.has(prev) && !PLURAL.has(prev)) || /n$/.test(form) ? "verb" : null;
  return null;
}
