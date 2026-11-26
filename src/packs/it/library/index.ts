import { parsePrompts, type LibraryPack } from "@/core/library";
import { promptsB } from "./prompts-b";
import { promptsC } from "./prompts-c";
import { writingA1 } from "./writing-a1";
import { writingA2 } from "./writing-a2";
import { textsA } from "./texts-a";
import { resources } from "../resources";
import { textsB1 } from "./texts-b1";

/** The Library: writing prompts at every level (and, later, extra texts). */
export const library: LibraryPack = {
  // A1 and A2 are written out in full (frames, cues, model answers); the rest is still the compact list.
  prompts: [...writingA1, ...writingA2, ...parsePrompts([promptsB, promptsC].join("\n\n"))],
  texts: [...textsA, ...textsB1],
  outThere: resources,
};
