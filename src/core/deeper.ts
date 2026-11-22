import type { GrammarLesson } from "./content";

/** Puts a lesson's "Going deeper" right after its summary card (Matteo, 21 Nov 2026). */
export function withDeeper(lesson: GrammarLesson | undefined, items: [string, string][] | undefined): GrammarLesson | undefined {
  if (!lesson || !items?.length) return lesson;
  const block = { kind: "deeper" as const, items: items.map(([title, text]) => ({ title, text })) };
  const at = lesson.blocks.findIndex((b) => b.kind === "summary");
  const blocks = at < 0 ? [...lesson.blocks, block] : [...lesson.blocks.slice(0, at + 1), block, ...lesson.blocks.slice(at + 1)];
  return { ...lesson, blocks };
}
