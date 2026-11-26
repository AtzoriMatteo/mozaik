import type { ReadingText } from "./content";
import type { CefrLevel, LanguagePack } from "./language-pack";
import type { WritingTask } from "./writing";
import type { Book, Resource } from "./resources";

/**
 * The Library: everything at one level, outside the course order. Reading on
 * Mozaik (course texts plus extra Library texts), reading out there (links),
 * and writing prompts to pick from.
 */

export const LIBRARY_LEVELS: readonly CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

/** Library writing ids start with this, so they never clash with unit tasks. */
export const LIBRARY_PREFIX = "lib-";

export type LibraryPack = {
  /** Writing prompts, any level A1–C2. */
  prompts: readonly WritingTask[];
  /** Extra texts that belong to no unit, with the topic they're filed under. */
  texts?: readonly (ReadingText & { topic: string })[];
  /** Out there: a short, curated list per level, one entry per source. */
  outThere?: readonly (Resource | Book)[];
};

const FORMS = new Set<WritingTask["form"]>(["message", "email", "form", "description", "story", "opinion", "diary"]);

/**
 * Prompts written in a compact text format, one block each:
 *
 *   # Topic name                      (sets the topic for the blocks below)
 *   A2 email | Een klacht | A complaint
 *   Situation, in English.
 *   - first point
 *   - second point
 *
 * The id is made from the level and the title, so it stays stable.
 */
export function parsePrompts(source: string): WritingTask[] {
  const out: WritingTask[] = [];
  let topic = "";
  const blocks = source.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  for (const block of blocks) {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    while (lines[0]?.startsWith("# ")) topic = lines.shift()!.slice(2).trim();
    if (lines.length === 0) continue;
    const [head, ...rest] = lines;
    const m = /^(A1|A2|B1|B2|C1|C2)\s+(\w+)\s*\|\s*(.+?)\s*\|\s*(.+)$/.exec(head);
    if (!m) throw new Error(`Library prompt header not understood: "${head}"`);
    const [, level, form, title, titleTranslation] = m;
    if (!FORMS.has(form as WritingTask["form"])) throw new Error(`Unknown writing form "${form}" in "${head}"`);
    const situation = rest.filter((l) => !l.startsWith("- ")).join(" ");
    const points = rest.filter((l) => l.startsWith("- ")).map((l) => ({ prompt: l.slice(2).trim() }));
    out.push({
      id: `${LIBRARY_PREFIX}${level.toLowerCase()}-${slug(title)}`,
      level: level as CefrLevel,
      title,
      titleTranslation,
      form: form as WritingTask["form"],
      situation,
      points,
      model: "",
      topic,
    });
  }
  return out;
}

function slug(s: string): string {
  return s
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function libraryPrompts(pack: LanguagePack, level?: CefrLevel): WritingTask[] {
  const all = pack.library?.prompts ?? [];
  return level ? all.filter((p) => p.level === level) : [...all];
}

export function findLibraryPrompt(pack: LanguagePack, id: string): WritingTask | undefined {
  return pack.library?.prompts.find((p) => p.id === id);
}

export type ShelfText = { text: ReadingText; topic: string; words: number };

/** The Library's own texts at a level: few, long, outside the course. */
export function readingShelf(pack: LanguagePack, level: CefrLevel): ShelfText[] {
  const count = (t: ReadingText) =>
    t.paragraphs.flat().reduce((n, s) => n + pack.tokenize(s.text).filter((x) => x.kind === "word").length, 0);
  return (pack.library?.texts ?? [])
    .filter((t) => t.level === level)
    .map((t) => ({ text: t, topic: t.topic, words: count(t) }));
}

/** How many course texts a level has (they're read in the course, not listed here). */
export function courseTextCount(pack: LanguagePack, level: CefrLevel): number {
  return pack.units.filter((u) => u.level === level).reduce((n, u) => n + u.texts.length, 0);
}

export function outThere(pack: LanguagePack, level: CefrLevel): (Resource | Book)[] {
  return (pack.library?.outThere ?? []).filter((r) => r.level === level);
}
