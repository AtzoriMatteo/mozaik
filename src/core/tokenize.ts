import type { Token } from "./language-pack";

/**
 * Generic tokeniser built on Intl.Segmenter. Language packs can use it as-is
 * or post-process its output for language-specific rules.
 */
export function segmentText(text: string, locale: string): Token[] {
  const segmenter = new Intl.Segmenter(locale, { granularity: "word" });
  const tokens: Token[] = [];

  for (const { segment, isWordLike } of segmenter.segment(text)) {
    if (isWordLike) {
      tokens.push({
        kind: "word",
        text: segment,
        normalized: segment.toLocaleLowerCase(locale),
      });
    } else if (/^\s+$/u.test(segment)) {
      tokens.push({ kind: "space", text: segment });
    } else {
      tokens.push({ kind: "punctuation", text: segment });
    }
  }

  return tokens;
}
