import type { Lexicon } from "@/core/content";
import { lexiconAL } from "./a-l";
import { lexiconMZ } from "./m-z";
import { lexiconStory } from "./story";
import { lexiconMore } from "./a1-more";

/** All Italian word help, keyed by the lower-cased form as it appears. */
export const lexicon: Lexicon = { ...lexiconAL, ...lexiconMZ, ...lexiconStory, ...lexiconMore };
