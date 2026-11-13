import type { ListeningLine, Sentence, Task } from "@/core/content";

/**
 * Short helpers so course material reads almost like a script.
 *   s("Ik woon in Leiden.", "I live in Leiden.")
 *   tf("Luca komt uit Italië.", "Luca is from Italy.", true)
 */

export const s = (text: string, translation: string): Sentence => ({ text, translation });

export const line = (speaker: string, text: string, translation: string): ListeningLine => ({
  speaker,
  text,
  translation,
});

/** True or false: a statement in Dutch. */
export const tf = (statement: string, translation: string, answer: boolean): Task => ({
  kind: "truefalse",
  statement,
  translation,
  answer,
});

/** Multiple choice; `answer` is the index of the right option. */
export const mc = (prompt: string, options: string[], answer: number): Task => ({
  kind: "choice",
  prompt,
  options,
  answer,
});

/** Put in order; items are given in the right order. */
export const order = (prompt: string, ...items: string[]): Task => ({ kind: "order", prompt, items });

/** Put Dutch items in order. */
export const orderNl = (prompt: string, ...items: string[]): Task => ({
  kind: "order",
  prompt,
  items,
  inTarget: true,
});

/** Match pairs: "left=right | left=right". */
export const pairs = (prompt: string, list: string, leftInTarget = false, rightInTarget = false): Task => ({
  kind: "match",
  prompt,
  pairs: list.split("|").map((p) => p.split("=").map((x) => x.trim()) as [string, string]),
  leftInTarget,
  rightInTarget,
});

/** Listening: type these words of line `n` while hearing it. */
export const gaps = (n: number, ...words: string[]): Task => ({ kind: "gaps", line: n, words });

/** Listening: which word is in line `n`? */
export const heard = (n: number, options: string[], answer: number): Task => ({
  kind: "heard",
  line: n,
  options,
  answer,
});
