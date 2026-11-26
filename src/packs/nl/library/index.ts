import { parsePrompts, type LibraryPack } from "@/core/library";
import { promptsA } from "./prompts-a";
import { promptsB } from "./prompts-b";
import { promptsC } from "./prompts-c";

/** The Library: writing prompts at every level (and, later, extra texts). */
export const library: LibraryPack = {
  prompts: parsePrompts([promptsA, promptsB, promptsC].join("\n\n")),
};
