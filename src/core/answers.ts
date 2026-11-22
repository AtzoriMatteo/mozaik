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

const RANK: Record<Verdict, number> = { right: 2, almost: 1, wrong: 0 };
const best = (vs: Verdict[]): Verdict => vs.reduce((b, v) => (RANK[v] > RANK[b] ? v : b), "wrong" as Verdict);

/**
 * A rewrite exercise: the learner may type the whole new sentence, or only
 * the part that changes. if putting what
 * they typed in place of some stretch of the original gives an accepted
 * answer, it counts.
 */
export function judgeTransform(typed: string, from: string, accepted: string[]): Verdict {
  const whole = judge(typed, accepted);
  if (whole === "right") return whole;
  const t = normalizeWords(typed);
  const f = normalizeWords(from);
  if (!t.length) return "wrong";
  const tries: Verdict[] = [whole];
  // Copying words that are already there isn't a change (a deletion needs the whole sentence).
  const isCopy = f.some((_, i) => t.every((w, k) => f[i + k] === w));
  if (isCopy) return whole;
  for (let i = 0; i <= f.length; i++) {
    for (let j = 0; i + j <= f.length; j++) {
      const sentence = [...f.slice(0, i), ...t, ...f.slice(f.length - j)].join(" ");
      const v = judge(sentence, accepted);
      if (v === "right") return v;
      tries.push(v);
    }
  }
  return best(tries);
}

/** A gap exercise: the missing word(s), or the whole sentence typed out. */
export function judgeFill(typed: string, before: string, after: string, accepted: string[]): Verdict {
  const gap = judge(typed, accepted);
  if (gap === "right") return gap;
  return best([gap, judge(typed, accepted.map((a) => `${before}${a}${after}`))]);
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
