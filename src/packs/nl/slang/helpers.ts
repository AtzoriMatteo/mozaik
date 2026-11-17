import type { SlangItem, SlangLine } from "@/core/content";

export { mc, pairs } from "../units/helpers";

/** A line as it's really said, then the textbook version, then the meaning. */
export const say = (speaker: string, text: string, textbook: string, translation: string): SlangLine => ({
  speaker,
  text,
  textbook,
  translation,
});

/** A slang item: form, meaning, who says it, and the rest. */
export const item = (form: string, meaning: string, who: SlangItem["who"], rest: Omit<SlangItem, "form" | "meaning" | "who"> = {}): SlangItem => ({
  form,
  meaning,
  who,
  ...rest,
});
