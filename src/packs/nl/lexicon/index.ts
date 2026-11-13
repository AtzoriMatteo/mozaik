import type { Lexicon } from "@/core/content";
import { lexiconAG } from "./a-g";
import { lexiconHO } from "./h-o";
import { lexiconPZ } from "./p-z";
import { lexiconExtra } from "./extra";
import { lexiconListening } from "./listening";
import { lexiconMore } from "./more";
import { lexiconCulture } from "./culture";

/**
 * Word help for the Dutch pack, keyed by the lower-cased word as it appears.
 * Every field is one short line. "closer" (Look closer) and "local" (Like a
 * local) only exist when there's something genuinely useful to say: literal
 * parts, a sound rule linking to English, a set phrase, a pronunciation trap.
 */
export const lexicon: Lexicon = { ...lexiconCulture, ...lexiconMore, ...lexiconAG, ...lexiconHO, ...lexiconPZ, ...lexiconExtra, ...lexiconListening };
