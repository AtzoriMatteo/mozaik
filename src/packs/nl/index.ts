import type { LanguagePack, Token } from "@/core/language-pack";
import { segmentText } from "@/core/tokenize";
import { lexicon } from "./lexicon";
import { grammar } from "./grammar";
import { units } from "./units";
import { coreVocabularyA1 } from "./vocabulary";
import { sounds } from "./speaking/sounds";
import { resources } from "./resources";
import { tips } from "./tips";
import { zipfA1 } from "./frequency";
import { makeChecker } from "./writing/check";
import { isNumberWord } from "./writing/data";

/**
 * Dutch uses apostrophes inside words ("auto's", "baby's") and as the start
 * of short forms ("'s ochtends", "'t is"). The generic segmenter splits these
 * apart, so we glue them back into single words.
 */
function tokenizeDutch(text: string): Token[] {
  // Normalise the typographic apostrophe so both forms behave the same.
  const raw = segmentText(text.replace(/’/g, "'"), "nl");
  const out: Token[] = [];

  for (let i = 0; i < raw.length; i++) {
    const tok = raw[i];
    const next = raw[i + 1];
    const prev = out[out.length - 1];

    // Plural/genitive apostrophe: word + "'" + "s"  ->  "auto's"
    if (
      tok.kind === "punctuation" &&
      tok.text === "'" &&
      prev?.kind === "word" &&
      next?.kind === "word" &&
      /^s$/i.test(next.text)
    ) {
      const text = prev.text + "'" + next.text;
      out[out.length - 1] = { kind: "word", text, normalized: text.toLowerCase() };
      i++;
      continue;
    }

    // Short forms: "'s" / "'t" / "'n" at the start of a word.
    if (
      tok.kind === "punctuation" &&
      tok.text === "'" &&
      (prev === undefined || prev.kind !== "word") &&
      next?.kind === "word" &&
      /^(s|t|n)$/i.test(next.text)
    ) {
      const text = "'" + next.text;
      out.push({ kind: "word", text, normalized: text.toLowerCase() });
      i++;
      continue;
    }

    out.push(tok);
  }

  return out;
}

function greetingFor(hour: number) {
  if (hour >= 5 && hour < 12) return { text: "Goedemorgen", meaning: "Good morning" };
  if (hour >= 12 && hour < 18) return { text: "Goedemiddag", meaning: "Good afternoon" };
  if (hour >= 18 && hour < 24) return { text: "Goedenavond", meaning: "Good evening" };
  return { text: "Goedenacht", meaning: "Good night" };
}

export const dutch: LanguagePack = {
  checkWriting: makeChecker(lexicon, tokenizeDutch),
  spelling: { aff: "/dictionaries/nl/index.aff", dic: "/dictionaries/nl/index.dic", isWord: isNumberWord },
  languageTool: "nl",
  code: "nl",
  name: "Dutch",
  nativeName: "Nederlands",
  accent: { light: "#1d3f8c", dark: "#8fb0f0" }, // Delft blue
  levels: ["A1"],
  tokenize: tokenizeDutch,
  greeting: greetingFor,
  units,
  lexicon,
  grammar,
  sounds,
  coreVocabulary: { A1: coreVocabularyA1 },
  resources,
  tips,
  wordFrequency: zipfA1,
};
