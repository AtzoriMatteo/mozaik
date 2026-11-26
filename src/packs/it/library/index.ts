import { parsePrompts, type LibraryPack } from "@/core/library";
import { promptsA } from "./prompts-a";
import { promptsB } from "./prompts-b";
import { promptsC } from "./prompts-c";
import { textsA } from "./texts-a";
import { resources } from "../resources";
import { textsB1 } from "./texts-b1";

/** The Library: writing prompts at every level (and, later, extra texts). */
export const library: LibraryPack = {
  prompts: parsePrompts([promptsA, promptsB, promptsC].join("\n\n")),
  texts: [...textsA, ...textsB1],
  outThere: resources,
};
