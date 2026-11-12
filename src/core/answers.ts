import { normalizeWords } from "./dictation";

export type Verdict = "right" | "almost" | "wrong";

const stripAccents = (s: string) => s.normalize("NFD").replace(/\p{M}/gu, "");

/**
 * Compare a typed answer with the accepted answers. Capitals and
 * punctuation don't matter; a missing accent is "almost" (counted right).
 */
export function judge(typed: string, accepted: string[]): Verdict {
  const t = normalizeWords(typed).join(" ");
  if (!t) return "wrong";
  for (const a of accepted) if (normalizeWords(a).join(" ") === t) return "right";
  for (const a of accepted) {
    if (stripAccents(normalizeWords(a).join(" ")) === stripAccents(t)) return "almost";
  }
  return "wrong";
}

/** A stable shuffle (same order on server and client) that never returns the original order. */
export function shuffleTiles<T>(items: readonly T[], seed: string): T[] {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const rand = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  if (out.length > 1 && out.every((x, i) => x === items[i])) out.push(out.shift()!);
  return out;
}
