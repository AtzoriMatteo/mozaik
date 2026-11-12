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

/** A multiple-choice question; options and prompt in the explanation language. */
export type Question = {
  prompt: string;
  options: string[];
  /** Index of the correct option. */
  answer: number;
};

export type ListeningLine = {
  /** Who speaks (for dialogues); each speaker gets their own voice. */
  speaker?: string;
  text: string;
  translation: string;
};

/** Audio material for a unit: heard first, read only afterwards. */
export type ListeningItem = {
  id: string;
  level: CefrLevel;
  title: string;
  titleTranslation: string;
  kind: "dialogue" | "monologue" | "announcement" | "voicemail";
  /** One line of context before listening, e.g. "You're on the platform…". */
  situation: string;
  lines: ListeningLine[];
  /** What is it about? Answered after the first listen. */
  gist: Question;
  /** Specific details; you may replay as often as you like. */
  details: Question[];
  /** Indexes of lines to write down. Short, clear lines work best. */
  dictation: number[];
  grammar: string[];
  /** Help that only applies here; overrides the pack lexicon. */
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
  listening: ListeningItem[];
};

/** One tile in a word-order diagram. */
export type Slot = {
  text: string;
  /** Small label under the tile, e.g. "verb". */
  label?: string;
  /** Highlights the tile the lesson is about. */
  focus?: boolean;
};

/** A building block of a grammar explanation. */
export type LessonBlock =
  | { kind: "text"; text: string }
  /** Sentences as rows of tiles: shows word order at a glance. */
  | { kind: "slots"; caption?: string; rows: { slots: Slot[]; translation?: string }[] }
  | { kind: "table"; caption?: string; headers: string[]; rows: string[][] };

/** A sentence quoted from the course, with the words that show the pattern. */
export type Example = { text: string; translation: string; highlight: string[] };

export type Exercise =
  /** Type the missing word(s): before + ___ + after. */
  | { kind: "fill"; before: string; after: string; answers: string[]; translation: string; hint?: string }
  /** Pick the form that fits the gap. */
  | { kind: "choice"; before: string; after: string; options: string[]; answer: number; translation: string }
  /** Rewrite a sentence as instructed. */
  | { kind: "transform"; instruction: string; from: string; answers: string[]; translation: string }
  /** Put shuffled tiles in order; `tiles` is the correct order. */
  | { kind: "build"; tiles: string[]; translation: string; alsoCorrect?: string[] };

export type GrammarLesson = {
  blocks: LessonBlock[];
  examples: Example[];
  exercises: Exercise[];
};

export type GrammarPoint = {
  id: string;
  level: CefrLevel;
  /** Short name, e.g. "Verb second". */
  title: string;
  /** One-line plain explanation with an example. */
  summary: string;
  /** The unit where this point is taught. */
  unit?: string;
  lesson?: GrammarLesson;
};

/** Pack-wide word help, keyed by the lower-cased word as it appears in texts. */
export type Lexicon = Record<string, WordHelp>;

export function helpFor(
  lexicon: Lexicon,
  text: { words?: Record<string, WordHelp> },
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
