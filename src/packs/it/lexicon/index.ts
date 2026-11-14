import type { Lexicon } from "@/core/content";
import { lexiconAL } from "./a-l";
import { lexiconMZ } from "./m-z";

/** All Italian word help, keyed by the lower-cased form as it appears. */
export const lexicon: Lexicon = { ...lexiconAL, ...lexiconMZ };
