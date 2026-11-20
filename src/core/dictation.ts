/**
 * Forgiving dictation check. Capitals and punctuation don't count; accents
 * that are missing count as "almost". The result is a word-by-word diff the
 * UI can colour, aligned with the longest common subsequence.
 */

/**
 * word is the plain form used for comparing; display is how the sentence
 * really writes it (capital, punctuation, quote marks), for showing.
 */
export type DiffPart =
  | { kind: "correct"; word: string; display: string }
  | { kind: "almost"; word: string; typed: string; display: string }
  | { kind: "missing"; word: string; display: string }
  | { kind: "extra"; typed: string };

export type DictationResult = { parts: DiffPart[]; score: number; perfect: boolean };

const stripAccents = (s: string) => s.normalize("NFD").replace(/\p{M}/gu, "");

export function normalizeWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^\p{L}\p{N}'\s-]/gu, " ")
    .replace(/(^|\s)'(?!s\b|t\b|n\b)/g, "$1") // quote marks, but keep 's 't 'n
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * The expected sentence as written, one entry per compared word: "Hoe heet
 * jij?" gives Hoe, heet, jij?. A chunk that compares as several words (8:30)
 * shows whole on its first word and empty on the rest.
 */
export function displayWords(text: string): string[] {
  const out: string[] = [];
  for (const chunk of text.split(/\s+/).filter(Boolean)) {
    const n = normalizeWords(chunk).length;
    if (n === 0) {
      // A lone dash or quote mark: hang it on the word before.
      if (out.length) out[out.length - 1] += ` ${chunk}`;
      continue;
    }
    out.push(chunk);
    for (let k = 1; k < n; k++) out.push("");
  }
  return out;
}

export function checkDictation(expected: string, typed: string): DictationResult {
  const a = normalizeWords(expected);
  const shown = displayWords(expected);
  const show = (i: number) => (shown.length === a.length ? shown[i] : a[i]);
  const b = normalizeWords(typed);
  const same = (x: string, y: string) => stripAccents(x) === stripAccents(y);

  // LCS table on accent-insensitive equality.
  const dp = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      dp[i][j] = same(a[i], b[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }

  const parts: DiffPart[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (same(a[i], b[j])) {
      parts.push(
        a[i] === b[j]
          ? { kind: "correct", word: a[i], display: show(i) }
          : { kind: "almost", word: a[i], typed: b[j], display: show(i) },
      );
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      parts.push({ kind: "missing", word: a[i], display: show(i) });
      i++;
    } else {
      parts.push({ kind: "extra", typed: b[j++] });
    }
  }
  while (i < a.length) {
    parts.push({ kind: "missing", word: a[i], display: show(i) });
    i++;
  }
  while (j < b.length) parts.push({ kind: "extra", typed: b[j++] });

  const right = parts.filter((p) => p.kind === "correct" || p.kind === "almost").length;
  const wrongExtra = parts.filter((p) => p.kind === "extra").length;
  const score = a.length === 0 ? 1 : Math.max(0, right - wrongExtra) / a.length;
  const perfect = parts.every((p) => p.kind === "correct");
  return { parts, score, perfect };
}
