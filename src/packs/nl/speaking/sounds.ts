import type { Sound } from "@/core/pronunciation";

/**
 * The Dutch sounds learners find hardest, in the order feedback checks them
 * (more specific spellings first: "sch" before "g", "aa" before "a").
 * Every pair is two real words that differ only in this sound.
 */
export const sounds: readonly Sound[] = [
  {
    id: "sch",
    title: "sch",
    spellings: ["sch"],
    how: "Say s, then go straight into the throaty Dutch g: s-ch. Never 'sk' or 'sh'.",
    examples: ["school", "schrijven", "scheikunde", "Scheveningen"],
    pairs: [],
  },
  {
    id: "ui",
    title: "ui",
    spellings: ["ui"],
    how: "Start from the 'ow' in 'house', round your lips and push your tongue forward. No English sound is quite like it.",
    examples: ["huis", "ui", "buiten", "thuis", "fruit"],
    pairs: [["huis", "hoes"], ["buik", "boek"], ["tuin", "toen"]],
  },
  {
    id: "eu",
    title: "eu",
    spellings: ["eu"],
    how: "Say the 'ay' of 'say', then round your lips as for 'oo' while keeping your tongue still. Like French 'peu'.",
    examples: ["leuk", "deur", "keuken", "neus"],
    pairs: [["deur", "duur"], ["leuk", "look"]],
  },
  {
    id: "ij",
    title: "ij / ei",
    spellings: ["ij", "ei"],
    how: "Between English 'eye' and 'ay': open your mouth more than for 'ay', but don't slide all the way to 'eye'. ij and ei sound the same.",
    examples: ["mijn", "tijd", "wijn", "klein", "trein"],
    pairs: [["pijn", "peen"], ["mijn", "meen"]],
  },
  {
    id: "oe-u",
    title: "oe and uu",
    spellings: ["oe", "uu", "u(?![ie])"],
    how: "oe is English 'oo' (boek). uu is 'ee' with lips rounded tight, like French 'tu'. Keep them apart.",
    examples: ["boek", "goed", "duur", "minuut", "buur"],
    pairs: [["boer", "buur"], ["voer", "vuur"]],
  },
  {
    id: "aa-a",
    title: "aa and a",
    spellings: ["aa"],
    how: "aa is long and open, like 'a' in 'father'. A single a in a closed syllable is short and quick, like 'u' in 'cut' but further back.",
    examples: ["jaar", "straat", "maan", "man", "kat"],
    pairs: [["man", "maan"], ["tak", "taak"], ["ram", "raam"]],
  },
  {
    id: "g",
    title: "g and ch",
    spellings: ["(?<!n)g", "ch"],
    how: "A soft scrape at the back of the throat, like clearing it gently or Spanish 'j'. g and ch sound the same. Never the 'g' of 'go'.",
    examples: ["goed", "graag", "gezellig", "morgen", "acht"],
    pairs: [["geel", "heel"], ["goud", "koud"]],
  },
  {
    id: "w-v",
    title: "w and v",
    spellings: ["w", "v"],
    how: "For w, touch your lower lip lightly to your upper teeth and let air through: softer than English v, without rounding like English w.",
    examples: ["water", "wonen", "weer", "vader", "vijf"],
    pairs: [["wal", "val"], ["wet", "vet"]],
  },
  {
    id: "en",
    title: "-en at the end",
    spellings: ["en$"],
    how: "In normal speech the n of a final -en is dropped: 'lopen' sounds like 'lope', 'eten' like 'ete'. Saying the n clearly sounds stiff.",
    examples: ["lopen", "eten", "wonen", "meisjes", "huizen"],
    pairs: [],
  },
];
