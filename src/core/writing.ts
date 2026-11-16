import type { CefrLevel, LanguagePack } from "./language-pack";

/**
 * Writing: topics to write about, at a length you choose, checked for
 * spelling and grammar. Language-agnostic; each pack supplies the tasks,
 * its grammar rules and (optionally) a spelling dictionary.
 */

/** One thing the text should cover. `cues` are words that show it's there. */
export type WritingPoint = {
  /** What to say, in the explanation language. */
  prompt: string;
  /** Words that show the point is covered (also shown as hints). */
  cues?: string[];
  /**
   * A sentence frame to complete, "…" marking the learner's own part:
   * "Mijn lievelingsseizoen is … ." Shown at A1, where writing is most guided.
   */
  frame?: string;
  /** The prompt in the target language: from late A2 on, instructions move into the language. */
  promptTarget?: string;
};

export type WritingTask = {
  id: string;
  level: CefrLevel;
  title: string;
  titleTranslation: string;
  /** What kind of text: shapes the tone. */
  form: "message" | "email" | "form" | "description" | "story" | "opinion" | "diary";
  /** The situation, in the explanation language. */
  situation: string;
  /** The situation in the target language (late A2 on). */
  situationTarget?: string;
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
  /** Which rule found it, when other code needs to tell rules apart ("no-verb"). */
  rule?: string;
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

/* ---------------------------------------------------------------- */
/* Point by point                                                    */
/* ---------------------------------------------------------------- */

export type Span = { text: string; start: number; end: number };

/** Split a text into sentences (ends at . ! ? or a line break), with their places. */
export function sentenceSpans(text: string): Span[] {
  const out: Span[] = [];
  // A stop between digits (2.600, 16.40) doesn't end a sentence.
  const re = /(?:[^.!?\n]|\.(?=\d))+[.!?]*/g;
  for (let m = re.exec(text); m; m = re.exec(text)) {
    const raw = m[0];
    const lead = raw.length - raw.trimStart().length;
    const body = raw.trim();
    if (!/[\p{L}\p{N}]/u.test(body)) continue;
    out.push({ text: body, start: m.index + lead, end: m.index + lead + body.length });
  }
  return out;
}

/** Lower-cased words of a text, each with its dictionary form too. */
function wordSet(pack: LanguagePack, text: string): Set<string> {
  return new Set(
    pack
      .tokenize(text)
      .filter((t) => t.kind === "word")
      .flatMap((t) => [t.normalized, (pack.lexicon[t.normalized]?.base ?? "").toLowerCase()].filter(Boolean)),
  );
}

const hasCue = (pack: LanguagePack, text: string, point: WritingPoint) => {
  if (!point.cues?.length) return true;
  const words = wordSet(pack, text);
  return point.cues.some((c) => c.split(" ").every((w) => words.has(w.toLowerCase())));
};

/**
 * Example sentences for each point, taken from the model answer. The model
 * follows the points in order, so each point takes the first matching
 * sentence after the previous point's.
 */
export function pointExamples(pack: LanguagePack, task: WritingTask): string[] {
  const sentences = sentenceSpans(task.model).map((s) => s.text);
  let cursor = 0;
  return task.points.map((p) => {
    const after = sentences.findIndex((s, i) => i >= cursor && hasCue(pack, s, p));
    const at = after >= 0 ? after : sentences.findIndex((s) => hasCue(pack, s, p));
    if (at < 0) return "";
    cursor = at + 1;
    return sentences[at];
  });
}

/** Words that are fine without a verb: greetings, thanks, goodbyes ("Veel liefs en tot gauw, Nina"). */
const isFormula = (pack: LanguagePack, words: string[]) =>
  !!pack.formulas &&
  ((words.length <= 6 && words.some((w) => pack.formulas!.has(w))) || (words.length <= 8 && pack.formulas.has(words[0])));

/**
 * Sentences with no verb ("Ik 25 jaar.", "Mijn naam Luca.", a lone "jaar").
 * Real writing is full of short verbless lines that are fine ("En jij?",
 * "Wat leuk!", "Heel goed."), so the rule stays quiet for questions, short
 * exclamations, two-word lines, signatures, greetings, "Label: value" lines,
 * and any sentence with a word the course doesn't know (its verb may be there).
 */
export function noVerbIssues(pack: LanguagePack, text: string): WritingIssue[] {
  if (!pack.verbFor && !pack.couldBeVerb) return [];
  const couldBeVerb = (w: string) => (pack.couldBeVerb ? pack.couldBeVerb(w) : !!pack.verbFor?.(w));
  const out: WritingIssue[] = [];
  for (const s of sentenceSpans(text)) {
    if (s.text.includes(":") || /\?["”»]?$/.test(s.text)) continue;
    const toks = pack.tokenize(s.text).filter((t) => t.kind === "word");
    const words = toks.map((t) => t.normalized);
    if (words.length === 0 || words.length === 2 || isFormula(pack, words)) continue;
    if (words.length <= 4 && /!["”»]?$/.test(s.text)) continue;
    if (words.some((w) => couldBeVerb(w))) continue;
    if (words.length === 1) {
      // A signature (Luca) or a number on its own line is fine; a lone word answering a point isn't.
      if (/^\p{Lu}/u.test(toks[0].text) || /\d/.test(toks[0].text)) continue;
    } else if (!toks.every((t, i) => pack.lexicon[t.normalized] || /\d/.test(t.text) || (i > 0 && /^\p{Lu}/u.test(t.text)))) {
      continue;
    }
    out.push({
      start: s.start,
      end: s.end,
      kind: "grammar",
      rule: "no-verb",
      message: "No verb here. That's fine in a quick reply, but for each point write at least one full sentence: who does what?",
      source: "mozaik",
    });
  }
  return out;
}

export type PointStatus =
  /** Nothing written yet. */
  | "empty"
  /** Only words, no real sentence. */
  | "no-sentence"
  /** A sentence, but Mozaik can't see the point in it. */
  | "missing"
  /** The example sentence, word for word. */
  | "copied"
  | "ok";

const plain = (s: string) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();

/** Does this box say what the point asks, in at least one real sentence? */
export function pointStatus(pack: LanguagePack, text: string, point: WritingPoint, example = ""): PointStatus {
  const sentences = sentenceSpans(text);
  if (sentences.length === 0) return "empty";
  if (example && plain(text) === plain(example)) return "copied";
  const noVerb = noVerbIssues(pack, text);
  const real = sentences.filter((s) => !noVerb.some((i) => i.start === s.start));
  if (real.length === 0) return "no-sentence";
  return real.some((s) => hasCue(pack, s.text, point)) ? "ok" : "missing";
}

/** A few of a point's cue words, as hints ("try words like…"). */
export function cueHints(point: WritingPoint, n = 3): string[] {
  return (point.cues ?? []).slice(0, n);
}

/** Join the boxes into one text, a sentence-ending stop after each. */
export function joinPoints(parts: readonly string[]): string {
  return parts
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => (/[.!?]$/.test(p) ? p : `${p}.`))
    .join(" ");
}

/* ---------------------------------------------------------------- */
/* How much help a task gives                                        */
/* ---------------------------------------------------------------- */

export type Guidance = {
  /** Sentence frames: shown with each point, one tap away, or not given. */
  frames: "shown" | "tap" | "none";
  /** "Show an example" for each point. */
  examples: boolean;
  /** Instructions in English, in both languages, or in the target language only. */
  instructions: "en" | "both" | "target";
  /** Words or phrases to borrow, before writing. */
  wordBank: boolean;
};

/**
 * Help fades slowly, the way a textbook's exercises do: A1 gives a frame for
 * every sentence; later A1 keeps them one tap away; A2 drops frames but keeps
 * examples, and its second half gives the instructions in the language with
 * English underneath; from B1 the task is in the language only, with phrases
 * to borrow; from B2 there's just the task.
 */
export function guidanceFor(pack: LanguagePack, task: WritingTask): Guidance {
  const levelUnits = pack.units.filter((u) => u.level === task.level);
  const unitIndex = levelUnits.findIndex((u) => (u.writing ?? []).some((t) => t.id === task.id));
  const through = levelUnits.length > 1 && unitIndex >= 0 ? unitIndex / (levelUnits.length - 1) : 0;
  const hasTarget = !!task.situationTarget;
  switch (task.level) {
    case "A1":
      return { frames: through < 0.65 ? "shown" : "tap", examples: true, instructions: "en", wordBank: true };
    case "A2":
      return { frames: "tap", examples: true, instructions: through >= 0.5 && hasTarget ? "both" : "en", wordBank: true };
    case "B1":
      return { frames: "none", examples: false, instructions: hasTarget ? "target" : "en", wordBank: true };
    default:
      return { frames: "none", examples: false, instructions: hasTarget ? "target" : "en", wordBank: false };
  }
}

/**
 * Word counts for a task: the level's lengths, but a little shorter early in
 * a level, so the first texts are small (a unit-1 note is 20–60 words).
 */
export function lengthsFor(pack: LanguagePack, task: WritingTask): readonly [number, number, number] {
  const base = WRITING_LENGTHS[task.level];
  const levelUnits = pack.units.filter((u) => u.level === task.level);
  const i = levelUnits.findIndex((u) => (u.writing ?? []).some((t) => t.id === task.id));
  const through = levelUnits.length > 1 && i >= 0 ? i / (levelUnits.length - 1) : 1;
  const scale = through < 1 / 3 ? 0.6 : through < 2 / 3 ? 0.8 : 1;
  return base.map((n) => Math.round((n * scale) / 5) * 5) as unknown as readonly [number, number, number];
}
