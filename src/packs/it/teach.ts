import type { TaughtWord } from "@/core/coherence";

/** Words each Italian unit teaches directly (see the Dutch teach list). */
const t = (word: string, meaning: string, text: string, translation: string): TaughtWord => ({ word, meaning, text, translation });

export const teachIt: Record<string, TaughtWord[]> = {};
