/**
 * The contract every language pack fulfils.
 *
 * The core app never refers to a specific language. Everything that differs
 * between languages (how text splits into words, the accent colour, later:
 * course content, grammar notes, pronunciation data) comes from a pack.
 */

import type { Lexicon, ReadingText } from "./content";

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
  /** Reading texts, in suggested order. */
  texts: readonly ReadingText[];
  /** Word help shared by all texts in this pack. */
  lexicon: Lexicon;
}
