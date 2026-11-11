export type SavedWord = {
  language: string;
  /** Lower-cased form as tapped; unique per learner and language. */
  word: string;
  /** As it appeared in the text. */
  surface: string;
  base?: string;
  meaning: string;
  sentence: string;
  textId: string;
  /** Spaced-repetition stage (0 = new). */
  stage?: number;
  /** ISO time of the next review. */
  dueAt?: string;
};
