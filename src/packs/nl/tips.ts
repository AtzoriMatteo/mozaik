import type { LearningTip } from "@/core/tips";

/** Tips about Dutch itself: patterns that save hours, and how to sound local. */
export const tips: readonly LearningTip[] = [
  {
    id: "nl-keep-dutch",
    text: "When someone switches to English, say: \"Mag het in het Nederlands? Ik ben aan het oefenen.\" Most people happily switch back.",
    places: ["home", "course"],
  },
  {
    id: "nl-th-d",
    text: "English th is often Dutch d: think → denken, thank → danken, three → drie, thing → ding, that → dat.",
    places: ["review", "read", "home"],
  },
  {
    id: "nl-ght-cht",
    text: "English -ght is often Dutch -cht: night → nacht, light → licht, right → recht, eight → acht.",
    places: ["review", "read"],
  },
  {
    id: "nl-y-g",
    text: "An English y often hides a Dutch g: day → dag, yellow → geel, yesterday → gisteren, way → weg.",
    places: ["review", "read"],
  },
  {
    id: "nl-je-het",
    text: "Every word ending in -je is a het-word, even when the big word is de: de tafel, but het tafeltje.",
    places: ["review", "write"],
  },
  {
    id: "nl-ing-de",
    text: "Words ending in -ing, -heid or -tie are always de-words: de woning, de vrijheid, de politie.",
    places: ["review", "write"],
  },
  {
    id: "nl-plural-de",
    text: "Every plural takes de: het huis, de huizen. And if you must guess for a single word, guess de: about two in three nouns are de-words.",
    places: ["review", "write"],
  },
  {
    id: "nl-verb-second",
    text: "The verb always takes the second spot. Start with \"Morgen\" and the verb jumps ahead of the subject: Morgen ga ik.",
    places: ["write", "read"],
  },
  {
    id: "nl-softeners",
    text: "Little words soften a sentence. \"Kom even\" or \"Kom maar\" sounds friendly; plain \"Kom\" sounds like an order.",
    places: ["listen", "write", "home"],
  },
  {
    id: "nl-lekker",
    text: "Lekker isn't only for food: lekker weer (lovely weather), lekker slapen (sleep well), lekker bezig (doing great).",
    places: ["listen", "read"],
  },
  {
    id: "nl-compounds",
    text: "Long words are short words glued together. Ziekenhuis is zieken + huis, the sick people's house. Split them and they stop being scary.",
    places: ["read", "review"],
  },
  {
    id: "nl-open-closed",
    text: "Spelling follows a rule: maan has a long aa, but add a syllable and one a goes: manen. The vowel ends the syllable, so it stays long.",
    places: ["write"],
  },
  {
    id: "nl-met",
    text: "Answer the phone like a local: \"Met Lotte.\" (It's Lotte.) Most Dutch people answer with met plus their name.",
    places: ["listen", "home"],
  },
  {
    id: "nl-goodbyes",
    text: "Doei is for friends, dag works with anyone, tot ziens is for shops and strangers. Doei in a job interview sounds odd.",
    places: ["listen", "course"],
  },
  {
    id: "nl-888",
    text: "On Dutch public TV (NPO), subtitles in Dutch are on teletext page 888, and in the NPO Start app. Dutch audio plus Dutch text is ideal.",
    places: ["listen", "home"],
  },
];
