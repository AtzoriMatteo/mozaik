/**
 * The Handbook: reference material a learner can look up anytime (word lists
 * by topic, phrases by situation, how spelling works). Language packs supply
 * the content; grammar summaries come from the pack's grammar lessons.
 */

/** One row: the word or phrase, its English, and an optional note. */
export type HandbookEntry = { nl: string; en: string; note?: string };

export type HandbookTable = {
  id: string;
  title: string;
  /** One line on how to use it, or a pattern worth noticing. */
  intro?: string;
  level: "A1" | "A2";
  /** Rows; nouns are written without article and get de/het from the pack. */
  entries: HandbookEntry[];
  /** Show de/het in front of nouns (word lists), or not (phrases, numbers). */
  articles?: boolean;
  /** A short tip shown under the table. */
  tip?: string;
};

export type Handbook = {
  /** Words by topic. */
  topics: HandbookTable[];
  /** Phrases by situation. */
  phrases: HandbookTable[];
  /** Spelling and sounds: explanation blocks with example rows. */
  spelling: HandbookTable[];
};
