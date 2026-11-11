import type { CefrLevel } from "./language-pack";

/**
 * Help for one word, written by hand for course texts.
 * Only `meaning` is shown on tap; the other layers sit behind small optional
 * buttons and must be one short line each. Leave a layer out rather than
 * fill it with trivia: it should teach something you can use.
 */
export type WordHelp = {
  /** Short meaning in the explanation language, e.g. "hospital". */
  meaning: string;
  /** Dictionary form when the word in the text is inflected, e.g. "wonen". */
  base?: string;
  /**
   * "Look closer": something that makes the word click or stick — literal
   * parts, a cognate plus the sound rule behind it, a memorable link.
   */
  closer?: string;
  /**
   * "Like a local": how it's really used — set phrases, register, a
   * pronunciation trap, a common mistake to avoid.
   */
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
  /** Grammar points (ids) this text deliberately features. */
  grammar: string[];
  /** Help that only applies in this text; overrides the pack lexicon. */
  words?: Record<string, WordHelp>;
};

/** A topic unit: several different texts on one theme, with clear goals. */
export type Unit = {
  id: string;
  level: CefrLevel;
  title: string;
  titleTranslation: string;
  /** What you can do after this unit, in plain words. */
  canDo: string[];
  texts: ReadingText[];
};

export type GrammarPoint = {
  id: string;
  level: CefrLevel;
  /** Short name, e.g. "Verb second". */
  title: string;
  /** One-line plain explanation with an example. */
  summary: string;
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

/** Dictionary form of a word: its `base` if inflected, otherwise itself. */
export function lemmaOf(help: WordHelp | undefined, normalized: string): string {
  return (help?.base ?? normalized).toLowerCase();
}

export function countWords(text: ReadingText): number {
  return text.paragraphs
    .flat()
    .reduce((n, s) => n + s.text.split(/\s+/).filter(Boolean).length, 0);
}

/** Rough reading time at a slow, learner pace (~60 words a minute). */
export function minutesToRead(text: ReadingText): number {
  return Math.max(1, Math.round(countWords(text) / 60));
}
