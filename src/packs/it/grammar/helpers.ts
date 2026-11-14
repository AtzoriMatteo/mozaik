import type { Example, Exercise, LessonBlock, Slot } from "@/core/content";

/**
 * Small helpers so grammar lessons read almost like plain notes.
 *
 * slots("caption", "Domani:time | vado:verb* | a Roma")
 *   → one row of tiles; "text:label", a trailing * marks the focus tile.
 * build("Domani | vado | a Roma", "…") → tiles in the right order.
 */

export const text = (t: string): LessonBlock => ({ kind: "text", text: t });

function parseSlot(raw: string): Slot {
  const s = raw.trim();
  const focus = s.endsWith("*");
  const body = focus ? s.slice(0, -1) : s;
  const [t, label] = body.split(":");
  return { text: t.trim(), label: label?.trim(), focus: focus || undefined };
}

export function slots(caption: string | undefined, ...rows: (string | [string, string])[]): LessonBlock {
  return {
    kind: "slots",
    caption,
    rows: rows.map((r) => {
      const [line, translation] = Array.isArray(r) ? r : [r, undefined];
      return { slots: line.split("|").map(parseSlot), translation };
    }),
  };
}

export const table = (caption: string | undefined, headers: string[], ...rows: string[][]): LessonBlock => ({
  kind: "table",
  caption,
  headers,
  rows,
});

export const example = (t: string, translation: string, ...highlight: string[]): Example => ({
  text: t,
  translation,
  highlight,
});

const list = (a: string | string[]) => (Array.isArray(a) ? a : [a]);

export const fill = (
  before: string,
  after: string,
  answers: string | string[],
  translation: string,
  hint?: string,
): Exercise => ({ kind: "fill", before, after, answers: list(answers), translation, hint });

export const choice = (
  before: string,
  after: string,
  options: string[],
  answer: number,
  translation: string,
): Exercise => ({ kind: "choice", before, after, options, answer, translation });

export const transform = (
  instruction: string,
  from: string,
  answers: string | string[],
  translation: string,
): Exercise => ({ kind: "transform", instruction, from, answers: list(answers), translation });

export const build = (tiles: string, translation: string, ...alsoCorrect: string[]): Exercise => ({
  kind: "build",
  tiles: tiles.split("|").map((t) => t.trim()),
  translation,
  alsoCorrect: alsoCorrect.length ? alsoCorrect : undefined,
});

/** spot("Io sei di Roma.", "sei", "sono", "I am from Rome.") */
export const spot = (
  sentence: string,
  wrong: string,
  fix: string | string[],
  translation: string,
  correct?: string,
): Exercise => {
  const fixes = list(fix);
  return {
    kind: "spot",
    sentence,
    wrong,
    fix: fixes,
    correct: correct ?? sentence.replace(new RegExp(`(^|[^\\p{L}])${wrong}(?![\\p{L}])`, "u"), `$1${fixes[0]}`),
    translation,
  };
};

/** match("Connect…", "io=sono | tu=sei", "…") */
export const match = (prompt: string, pairs: string, translation: string): Exercise => ({
  kind: "match",
  prompt,
  pairs: pairs.split("|").map((p) => p.split("=").map((x) => x.trim()) as [string, string]),
  translation,
});

/** sort("il or la?", ["il", "la"], "libro=0 | casa=1", "…") */
export const sort = (prompt: string, groups: string[], items: string, translation: string): Exercise => ({
  kind: "sort",
  prompt,
  groups,
  items: items.split("|").map((p) => {
    const [w, g] = p.split("=").map((x) => x.trim());
    return [w, Number(g)] as [string, number];
  }),
  translation,
});
