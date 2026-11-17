import type { CefrLevel } from "./language-pack";
import type { WritingTask } from "./writing";
import type { TaughtWord } from "./coherence";

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
   * The meaning to show on a card for this dictionary form, when `meaning`
   * also covers another use of the same spelling (vragen = "questions" in a
   * text, but "to ask" on a card).
   */
  dictionary?: string;
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
  /** Comprehension tasks, done after reading. */
  tasks?: Task[];
};

/**
 * A comprehension task, after reading or listening. Prompts and options are
 * in the explanation language unless the field says otherwise.
 */
export type Task =
  /** Pick the right answer. */
  | { kind: "choice"; prompt: string; options: string[]; answer: number }
  /** A statement in the target language: true or false? */
  | { kind: "truefalse"; statement: string; translation: string; answer: boolean }
  /** Put events in order; `items` is the correct order. */
  | { kind: "order"; prompt: string; items: string[]; inTarget?: boolean }
  /** Connect each left item to its right item; `pairs` lists the right matches. */
  | { kind: "match"; prompt: string; pairs: [string, string][]; leftInTarget?: boolean; rightInTarget?: boolean }
  /** Listening only: type the missing words of a line while hearing it. */
  | { kind: "gaps"; line: number; words: string[] }
  /** Listening only: which of these words did you hear in the line? */
  | { kind: "heard"; line: number; options: string[]; answer: number };

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
  /** Extra tasks after the detail questions: true/false, gaps, order, heard. */
  tasks?: Task[];
  /** Indexes of lines to write down. Short, clear lines work best. */
  dictation: number[];
  grammar: string[];
  /** Help that only applies here; overrides the pack lexicon. */
  words?: Record<string, WordHelp>;
};

/** Speaking practice for a unit: sounds to drill, then sentences to shadow. */
export type UnitSpeaking = {
  /** Sound ids from the pack's sound list. */
  sounds: string[];
  /** Short sentences quoted from the unit's material. */
  shadowing: Sentence[];
};

/** Tile motifs available to every language pack. */
export type Motif =
  | "tulip" | "birds" | "cheese" | "clock" | "gable" | "book"
  | "herb" | "windmill" | "clog" | "crown" | "star"
  | "bridge"
  // Italian
  | "sun" | "laurel" | "olive" | "moka" | "lemon" | "column";

/** Polychrome Delftware glazes. */
export type Glaze = "cobalt" | "manganese" | "ochre" | "copper" | "iron";

/** A topic unit: several different texts on one theme, with clear goals. */
export type Unit = {
  id: string;
  level: CefrLevel;
  title: string;
  titleTranslation: string;
  /** What you can do after this unit, in plain words. */
  canDo: string[];
  /** The unit's tile: a motif and a glaze colour (see components/unit-tile). */
  look?: { motif: Motif; glaze: Glaze };
  texts: ReadingText[];
  listening: ListeningItem[];
  speaking?: UnitSpeaking;
  /** Writing topics; finishing WRITING_REQUIRED of them earns the unit's writing tile. */
  writing?: WritingTask[];
  /**
   * Words the unit teaches directly (in its Words section) because its tasks
   * need them and its texts don't happen to use them: "lievelings-", "omdat".
   */
  teach?: TaughtWord[];
  /** The unit's continuing story (trial shape, see Story). */
  story?: Story;
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
  | { kind: "build"; tiles: string[]; translation: string; alsoCorrect?: string[] }
  /** One word is wrong: tap it, then type the fix. `correct` is the fixed sentence. */
  | { kind: "spot"; sentence: string; wrong: string; fix: string[]; correct: string; translation: string }
  /** Connect pairs, e.g. pronoun ↔ verb form; `pairs` lists the right matches. */
  | { kind: "match"; prompt: string; pairs: [string, string][]; translation: string }
  /** Sort words into groups, e.g. de / het. */
  | { kind: "sort"; prompt: string; groups: string[]; items: [string, number][]; translation: string };

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

/** A fixed expression: several words that mean one thing together. */
export type Expression = {
  /** Its dictionary form: "op tijd", "er een nachtje over slapen". */
  phrase: string;
  meaning: string;
  /** Shapes it takes in sentences (lower-case words), the phrase first. */
  forms: readonly string[];
  /** How natives use it. */
  local?: string;
};

/**
 * The expressions in a sentence that include the word at `index` (an index
 * into the sentence's words, lower-cased). Returns the matched word range.
 */
export function expressionsAt(
  list: readonly Expression[],
  words: readonly string[],
  index: number,
): { expression: Expression; from: number; to: number }[] {
  const out: { expression: Expression; from: number; to: number }[] = [];
  for (const expression of list) {
    for (const form of expression.forms) {
      const parts = form.toLowerCase().split(" ");
      for (let start = Math.max(0, index - parts.length + 1); start <= index; start++) {
        if (parts.every((p, k) => words[start + k] === p)) {
          out.push({ expression, from: start, to: start + parts.length - 1 });
          break;
        }
      }
      if (out.at(-1)?.expression === expression) break;
    }
  }
  // Longest first: "er een nachtje over slapen" before "een".
  return out.sort((a, b) => b.to - b.from - (a.to - a.from));
}

/**
 * Who says a piece of real-life Dutch (or any language), so a learner knows
 * when it fits. Kept apart from the course: slang only lives in slang parts.
 */
export type SlangRegister =
  /** Informal but fine with almost anyone you're on first-name terms with. */
  | "everyone"
  /** Friends, housemates, colleagues you're close to. Not with strangers or your boss. */
  | "casual"
  /** Mostly people under 35. */
  | "young"
  /** Mostly teenagers. Recognise it; from an adult it sounds like trying too hard. */
  | "teens"
  /** Straattaal: young people in cities, from Sranan, Moroccan Arabic, English… Recognise it. */
  | "street"
  /** Only written, in chats and texts. */
  | "chat"
  /** Swearing. See `strength`. */
  | "rude"
  /** Textbook favourite that people rarely say any more. */
  | "rare";

/** One slang word or phrase in a slang part, with when to use it. */
export type SlangItem = {
  /** As it's written in the part: "ff", "nee hè", "mattie". */
  form: string;
  /** Other shapes it takes in the lines (lower-case), if any. */
  forms?: string[];
  meaning: string;
  /** The everyday standard word it stands for: ff → "even". */
  standard?: string;
  who: SlangRegister;
  /** Swearing only: 1 mild, 2 strong, 3 very offensive. */
  strength?: 1 | 2 | 3;
  /** Where it's said, when not everywhere in the Netherlands. */
  where?: string;
  /** How it's really used, and when not to use it. One or two short lines. */
  note?: string;
  /** Where it comes from, when that helps it stick. */
  origin?: string;
  /** Not in the lines: worth recognising, explained in the list only. */
  heardOnly?: boolean;
};

/** One message or line: as people really say it, and the textbook version. */
export type SlangLine = {
  speaker: string;
  text: string;
  /** The same thing in the course's standard Dutch. */
  textbook: string;
  translation: string;
};

/**
 * A bonus part with real-life Dutch: a chat (written) or a talk (spoken,
 * recorded). It sits in a unit but outside the course: it never counts for the
 * mosaic or Continue, and its slang never appears in the course itself.
 */
export type SlangPart = {
  id: string;
  level: CefrLevel;
  /** The unit it belongs with. */
  unit: string;
  kind: "chat" | "talk";
  title: string;
  titleTranslation: string;
  /** One line of context: who is talking, where. */
  situation: string;
  lines: SlangLine[];
  items: SlangItem[];
  /** Quick checks, in the explanation language. */
  tasks: Task[];
  /** Help for other words in the lines; overrides the pack lexicon. */
  words?: Record<string, WordHelp>;
};

/**
 * The trial story shape (Matteo, Nov 2026): one continuing story per unit,
 * told in episodes. Each episode is read while heard, then one grammar
 * pattern from it is noticed and practised, then the learner says something
 * back. Words come from the story, not before it.
 */
export type Notice = {
  /** The grammar point it introduces or recalls (its lesson stays the reference). */
  grammar: string;
  title: string;
  /** One or two plain sentences. */
  explain: string;
  /** Pieces quoted word for word from the episode, with the pattern in them. */
  examples: string[];
  exercises: Exercise[];
};

/** Say something back: a prompt, an optional frame, and one possible answer. */
export type SayItBack = {
  prompt: string;
  /** A sentence frame to start from, with … for the gaps. */
  frame?: string;
  model: string;
  translation: string;
};

export type Episode = ReadingText & { notice: Notice; say: SayItBack[] };

export type Story = {
  id: string;
  title: string;
  titleTranslation: string;
  /** One line: who and what, before episode 1. */
  intro: string;
  episodes: Episode[];
};
