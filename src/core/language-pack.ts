/**
 * The contract every language pack fulfils.
 *
 * The core app never refers to a specific language. Everything that differs
 * between languages (how text splits into words, the accent colour, later:
 * course content, grammar notes, pronunciation data) comes from a pack.
 */

import type { VerbTables } from "./verbs";
import type { Handbook } from "./handbook";
import type { Expression, GrammarPoint, Lexicon, ReadingText, Unit } from "./content";
import type { Sound } from "./pronunciation";
import type { Resource } from "./resources";
import type { LearningTip } from "./tips";
import type { WritingIssue } from "./writing";

export const CEFR_LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
export type CefrLevel = (typeof CEFR_LEVELS)[number];

/** One piece of a text, as the reader will display it. */
export type Token =
  | { kind: "word"; text: string; /** lower-cased lookup form */ normalized: string }
  | { kind: "space"; text: string }
  | { kind: "punctuation"; text: string };

export interface LanguagePack {
  /** BCP-47 code, e.g. "nl". Also used in URLs. */
  code: string;
  /** Name in English, e.g. "Dutch". */
  name: string;
  /** Name in the language itself, e.g. "Nederlands". */
  nativeName: string;
  /** Accent colour for this language, for light and dark mode. */
  accent: { light: string; dark: string };
  /** Levels this pack currently has content for. */
  levels: readonly CefrLevel[];
  /** Split a text into words, spaces and punctuation. */
  tokenize(text: string): Token[];
  /** A greeting for the given hour (0–23), with its English meaning. */
  greeting(hour: number): { text: string; meaning: string };
  /** The course: topic units in suggested order, each with its texts. */
  units: readonly Unit[];
  /** Word help shared by all texts in this pack. */
  lexicon: Lexicon;
  /** Grammar points the course covers, per level. */
  grammar: readonly GrammarPoint[];
  /** The language's tricky sounds, with how-to tips and minimal pairs. */
  sounds: readonly Sound[];
  /** Core words (dictionary forms) a learner should meet at each level. */
  coreVocabulary: Partial<Record<CefrLevel, readonly string[]>>;
  /** How common words are (Zipf scale, dictionary forms): New words shows common words first. */
  wordFrequency?: Readonly<Record<string, number>>;
  /** Grammar checks for learner writing (spelling is done separately). */
  checkWriting?: (text: string) => WritingIssue[];
  /** Hunspell dictionary for spelling, served from /public; words in the lexicon always pass. */
  spelling?: { aff: string; dic: string; isWord?: (word: string) => boolean };
  /** Language code for LanguageTool, if it supports the language. */
  languageTool?: string;
  /** Real material outside the course (links only), per level. */
  resources?: readonly Resource[];
  /** The article of a noun (dictionary form), for flashcards: "de", "het"… or null. */
  nounArticle?: (lemma: string) => string | null;
  /** Learning tips about this language, shown around the site. */
  tips?: readonly LearningTip[];
  /** All forms of a verb, for the Handbook: give an infinitive ("zich wassen" for reflexive). */
  conjugate?: (infinitive: string) => VerbTables | null;
  /** The infinitive for any form a learner types or taps (telde → tellen), or null if it isn't a verb. */
  verbFor?: (word: string) => string | null;
  /** Verbs to browse in the Handbook, most common first. */
  commonVerbs?: () => readonly string[];
  /** Reference tables for the Handbook: words by topic, phrases, spelling. */
  handbook?: Handbook;
  /** Fixed expressions (op tijd, er een nachtje over slapen) to recognise in texts and save as one card. */
  expressions?: readonly Expression[];
  /** Who speaks in the listening material, so recorded audio gives each character a fitting voice. */
  cast?: Cast;
}

/**
 * Voices for recorded audio. Named characters keep one voice across the whole
 * course; generic roles (a shop assistant, an announcer) get a voice per clip.
 */
export type Cast = {
  /** "f" or "m" per speaker label; "any" lets the generator choose for variety. */
  gender: Readonly<Record<string, "f" | "m" | "any">>;
  /** Labels that are roles, not people: each listening item gets its own voice for them. */
  generic: readonly string[];
  /** Per-item corrections, keyed "itemId/Speaker". */
  overrides?: Readonly<Record<string, "f" | "m">>;
  /** The voice that reads the reading texts. */
  narrator: "f" | "m";
};

/** A unit's number within its level (A2 starts again at 1), and how many units the level has. */
export function unitNumber(pack: LanguagePack, unit: Unit): { n: number; of: number } {
  const level = pack.units.filter((u) => u.level === unit.level);
  return { n: level.indexOf(unit) + 1, of: level.length };
}

/** Every text in a pack, in course order. */
export function allTexts(pack: LanguagePack): ReadingText[] {
  return pack.units.flatMap((u) => u.texts);
}
