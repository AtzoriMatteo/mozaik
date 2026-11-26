import { parsePrompts, type LibraryPack } from "@/core/library";
import { promptsA } from "./prompts-a";
import { promptsB } from "./prompts-b";
import { promptsC } from "./prompts-c";
import { writingA1 } from "./writing-a1";
import { textsA } from "./texts-a";
import { libraryResources } from "../resources-library";
import { textsB1 } from "./texts-b1";

/** The Library: writing prompts at every level (and, later, extra texts). */
export const library: LibraryPack = {
  // A1 is written out in full (frames, cues, model answers); the rest is still the compact list.
  prompts: [...writingA1, ...parsePrompts([promptsA, promptsB, promptsC].join("\n\n")).filter((p) => p.level !== "A1")],
  texts: [...textsA, ...textsB1],
  outThere: libraryResources,
};
