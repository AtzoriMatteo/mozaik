import type { CefrLevel } from "./language-pack";

/**
 * Help for one word, written by hand for course texts.
 * Only `meaning` is shown on tap; the other layers sit behind small optional
 * buttons and should be one short line each.
 */
export type WordHelp = {
  /** Short meaning in the explanation language, e.g. "hospital". */
  meaning: string;
  /** Dictionary form when the word in the text is inflected, e.g. "wonen". */
  base?: string;
  /** "See it differently": etymology, literal meaning, cognate, mnemonic. */
  closer?: string;
  /** "Sound native": how locals actually use it. */
  local?: string;
};

export type Sentence = {
  /** The sentence in the target language. */
  text: string;
  /** Natural translation in the explanation language. */
  translation: string;
};

export type ReadingText = {
  /** URL-safe id, unique within its pack. */
  id: string;
  level: CefrLevel;
  /** Title in the target language. */
  title: string;
  /** Title in the explanation language. */
  titleTranslation: string;
  paragraphs: Sentence[][];
  /** Help that only applies in this text; overrides the pack lexicon. */
  words?: Record<string, WordHelp>;
};

/** Pack-wide word help, keyed by the lower-cased word as it appears in texts. */
export type Lexicon = Record<string, WordHelp>;

export function helpFor(
  lexicon: Lexicon,
  text: ReadingText,
  normalized: string,
): WordHelp | undefined {
  return text.words?.[normalized] ?? lexicon[normalized];
}

/** Rough reading time at a slow, learner pace (~60 words a minute). */
export function minutesToRead(text: ReadingText): number {
  const words = text.paragraphs
    .flat()
    .reduce((n, s) => n + s.text.split(/\s+/).filter(Boolean).length, 0);
  return Math.max(1, Math.round(words / 60));
}
