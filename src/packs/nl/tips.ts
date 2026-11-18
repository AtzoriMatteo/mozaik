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
  {
    id: "nl-wh-w",
    text: "English wh- is Dutch w-: what → wat, who → wie, where → waar, when → wanneer, why → waarom.",
    places: ["review", "read", "home"],
  },
  {
    id: "nl-sch-sh",
    text: "English sh- is often Dutch sch-: ship → schip, shoe → schoen, sheep → schaap, shine → schijnen.",
    places: ["review", "read"],
  },
  {
    id: "nl-ij-i",
    text: "An English long i is often Dutch ij: wine → wijn, time → tijd, ice → ijs, mine → mijn.",
    places: ["review", "read"],
  },
  {
    id: "nl-ui-ou",
    text: "The English ou in house is often Dutch ui: house → huis, mouse → muis, out → uit, brown → bruin.",
    places: ["review", "listen"],
  },
  {
    id: "nl-kofschip",
    text: "Past participles: ge- + stem + t or d. If the stem ends in t, k, f, s, ch or p ('t kofschip), use -t: gewerkt. Otherwise -d: gewoond.",
    places: ["write", "review"],
  },
  {
    id: "nl-er-jobs",
    text: "Er has four jobs: there is (er is), of them (ik heb er twee), there as a place (ik woon er) and with a preposition (ermee, erop).",
    places: ["read", "write"],
  },
  {
    id: "nl-niet-place",
    text: "Niet goes near the end (Ik zie hem niet), but before an adjective, a place or a preposition: Het is niet duur. Ik ga niet naar huis.",
    places: ["write"],
  },
  {
    id: "nl-je-friendly",
    text: "-je doesn't only mean small: it makes things casual and friendly. Een biertje, een rondje, een momentje. You'll hear it all day.",
    places: ["listen", "read", "home"],
  },
  {
    id: "nl-u-jij",
    text: "Most adults say jij to each other, even at work. Use u with older people, officials and in formal letters. If someone says \"zeg maar jij\", switch.",
    places: ["home", "write", "course"],
  },
  {
    id: "nl-separable",
    text: "Separable verbs split: opbellen → Ik bel je morgen op. A small op, uit or mee at the end of a sentence belongs to the verb: glue it back on.",
    places: ["read", "write"],
  },
  {
    id: "nl-unstressed",
    text: "be-, ge-, ver-, ont- and her- are never stressed: beginnen, vergeten, ontmoeten. Stress the part after them.",
    places: ["listen", "review"],
  },
  {
    id: "nl-ben-gefietst",
    text: "Ik heb gefietst (an activity), but ik ben naar Leiden gefietst (going somewhere): movement to a place takes zijn.",
    places: ["write", "review"],
  },
  {
    id: "nl-numbers-back",
    text: "Numbers from 21 to 99 go backwards and are one word: 25 is vijfentwintig, five-and-twenty. Listen for the second number first.",
    places: ["listen", "review"],
  },
  {
    id: "nl-ik-en",
    text: "Ik ben, ik heb, ik kan: the ik form is the stem with nothing added. Take -en off the infinitive and you have it: werken → ik werk.",
    places: ["write", "home"],
  },
  {
    id: "nl-nou",
    text: "Nou starts half of all Dutch answers: nou, nee (well, no), nou ja (oh well), nou en? (so what?). Copy it and you sound less textbook.",
    places: ["listen", "home"],
  },
];
