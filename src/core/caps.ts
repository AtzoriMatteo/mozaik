/**
 * Whether a typed gap starts a sentence. Phones capitalise the first letter
 * of an empty field by default; that's only right at the start of a sentence.
 */
export function gapStartsSentence(before: string): boolean {
  const t = before.trim();
  return t === "" || /^["“‘']$/.test(t) || /[.!?]["”’']?\s*["“‘']?$/.test(t);
}

/** The autoCapitalize value for a gap that follows `before`. */
export function capsFor(before: string): "sentences" | "none" {
  return gapStartsSentence(before) ? "sentences" : "none";
}
