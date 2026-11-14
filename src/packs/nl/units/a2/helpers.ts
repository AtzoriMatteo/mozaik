import type { WritingPoint, WritingTask } from "@/core/writing";

export { gaps, heard, line, mc, order, pairs, s, tf } from "../helpers";

/** A writing point: what to cover, and words that show you covered it. */
export const p = (prompt: string, ...cues: string[]): WritingPoint => ({ prompt, cues });

/** An A2 writing topic. */
export const a2 = (t: Omit<WritingTask, "level">): WritingTask => ({ ...t, level: "A2" });
