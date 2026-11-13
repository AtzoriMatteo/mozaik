import type { CefrLevel, LanguagePack } from "./language-pack";

/**
 * Writing: topics to write about, at a length you choose, checked for
 * spelling and grammar. Language-agnostic; each pack supplies the tasks,
 * its grammar rules and (optionally) a spelling dictionary.
 */

/** One thing the text should cover. `cues` are words that show it's there. */
export type WritingPoint = { prompt: string; cues?: string[] };

export type WritingTask = {
  id: string;
  level: CefrLevel;
  title: string;
  titleTranslation: string;
  /** What kind of text: shapes the tone. */
  form: "message" | "email" | "form" | "description" | "story" | "opinion" | "diary";
  /** The situation, in the explanation language. */
  situation: string;
  /** Up to six points; shorter lengths ask for the first few. */
  points: WritingPoint[];
  /** A model answer for the longest length, in the target language. */
  model: string;
};

/** Word counts to choose from, per level: short, medium, long. */
export const WRITING_LENGTHS: Record<CefrLevel, readonly [number, number, number]> = {
  A1: [30, 60, 100],
  A2: [60, 100, 150],
  B1: [100, 175, 250],
  B2: [150, 250, 350],
  C1: [200, 300, 450],
  C2: [250, 400, 600],
};

/** How many points to cover at each length: more words, more to say. */
export const POINTS_PER_LENGTH = [2, 4, 6] as const;

/** How many of a unit's tasks you finish to earn its writing tile. */
export const WRITING_REQUIRED = 2;

/** A text counts as long enough at 80% of the target. */
export const LONG_ENOUGH = 0.8;

export type IssueKind = "spelling" | "grammar" | "style";

/** A problem in a text, as a span with an explanation and maybe a fix. */
export type WritingIssue = {
  start: number;
  end: number;
  kind: IssueKind;
  message: string;
  /** Replacement for the span, when there's a clear one. */
  fix?: string;
  /** Grammar point id to link to, when there's a lesson for it. */
  lesson?: string;
  /** Who found it. */
  source: "mozaik" | "languagetool";
};

export function countWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

export function unitWriting(pack: LanguagePack, unitId: string): WritingTask[] {
  return pack.units.find((u) => u.id === unitId)?.writing ?? [];
}

/** Which points are covered: a point counts when one of its cue words appears. */
export function coveredPoints(pack: LanguagePack, text: string, points: WritingPoint[]): boolean[] {
  const words = new Set(
    pack
      .tokenize(text)
      .filter((t) => t.kind === "word")
      .flatMap((t) => [t.normalized, (pack.lexicon[t.normalized]?.base ?? "").toLowerCase()]),
  );
  return points.map((p) => !p.cues?.length || p.cues.some((c) => c.split(" ").every((w) => words.has(w.toLowerCase()))));
}

/**
 * Merge issues from several checkers: keep the first one for any span that
 * overlaps (Mozaik's own rules come first: they explain in learner terms).
 */
export function mergeIssues(...lists: WritingIssue[][]): WritingIssue[] {
  const out: WritingIssue[] = [];
  for (const issue of lists.flat()) {
    if (out.some((o) => issue.start < o.end && o.start < issue.end)) continue;
    out.push(issue);
  }
  return out.sort((a, b) => a.start - b.start);
}
