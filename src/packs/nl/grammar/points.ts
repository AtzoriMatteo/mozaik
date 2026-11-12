import type { GrammarPoint } from "@/core/content";

/**
 * Grammar the Dutch course covers, in teaching order.
 * A1 follows the usual NT2 A1 syllabus; every point must be featured by at
 * least one A1 text (checked by tests).
 */
export const grammarPoints: readonly GrammarPoint[] = [
  {
    id: "pronouns-subject",
    level: "A1",
    title: "Subject pronouns",
    summary: "ik, jij/je, u, hij, zij/ze, het, wij/we, jullie, zij/ze: who does the action.",
  },
  {
    id: "present-regular",
    level: "A1",
    title: "Present tense",
    summary: "Stem for ik (ik werk), stem + t for jij/hij (hij werkt), -en for plural (wij werken).",
  },
  {
    id: "zijn-hebben",
    level: "A1",
    title: "zijn and hebben",
    summary: "The two key irregular verbs: ik ben, jij bent, hij is; ik heb, jij hebt, hij heeft.",
  },
  {
    id: "articles",
    level: "A1",
    title: "de, het and een",
    summary: "Most nouns take de, about a quarter take het; all plurals take de. een = a/an.",
  },
  {
    id: "plurals",
    level: "A1",
    title: "Plural nouns",
    summary: "Usually -en (boek → boeken) or -s after unstressed -el, -er, -en, -je (tafel → tafels).",
  },
  {
    id: "verb-second",
    level: "A1",
    title: "Verb second",
    summary: "The conjugated verb is always the second item: Morgen ga ik naar Utrecht.",
  },
  {
    id: "questions",
    level: "A1",
    title: "Questions",
    summary: "Verb first for yes/no (Woon je hier?), or a question word first (Waar woon je?).",
  },
  {
    id: "jij-inversion",
    level: "A1",
    title: "jij after the verb",
    summary: "When jij/je follows the verb, the -t drops: jij werkt → werk jij?",
  },
  {
    id: "negation",
    level: "A1",
    title: "niet and geen",
    summary: "geen replaces een or no article (geen auto); niet negates everything else.",
  },
  {
    id: "possessives",
    level: "A1",
    title: "Possessives",
    summary: "mijn, jouw/je, uw, zijn, haar, ons/onze, jullie, hun: whose it is.",
  },
  {
    id: "object-pronouns",
    level: "A1",
    title: "Object pronouns",
    summary: "mij/me, jou/je, u, hem, haar, ons, jullie, hen/hun: Ik bel hem morgen.",
  },
  {
    id: "adjective-e",
    level: "A1",
    title: "Adjectives before nouns",
    summary: "Add -e before a noun (de grote stad), except with een + het-word (een groot huis).",
  },
  {
    id: "demonstratives",
    level: "A1",
    title: "deze, die, dit, dat",
    summary: "deze/die with de-words, dit/dat with het-words; dit/deze = this, dat/die = that.",
  },
  {
    id: "er-is",
    level: "A1",
    title: "er is / er zijn",
    summary: "There is / there are: Er is een markt. Er zijn veel fietsen.",
  },
  {
    id: "modal-verbs",
    level: "A1",
    title: "Modal verbs",
    summary: "kunnen, willen, moeten, mogen + infinitive at the end: Ik wil koffie drinken.",
  },
  {
    id: "separable-verbs",
    level: "A1",
    title: "Separable verbs",
    summary: "The prefix moves to the end: opstaan → Ik sta om zeven uur op.",
  },
  {
    id: "gaan-future",
    level: "A1",
    title: "gaan + infinitive",
    summary: "Talk about plans: Ik ga morgen koken. The infinitive goes to the end.",
  },
  {
    id: "imperative",
    level: "A1",
    title: "Imperative",
    summary: "Use the stem for instructions: Kom binnen! Snijd de uien.",
  },
  {
    id: "conjunctions",
    level: "A1",
    title: "en, maar, of, want",
    summary: "Join two main clauses without changing word order: Ik blijf thuis, want ik ben moe.",
  },
  {
    id: "time-numbers",
    level: "A1",
    title: "Numbers and time",
    summary: "Ones before tens (vijfentwintig); half negen = 8:30, half the hour before.",
  },
  {
    id: "prepositions",
    level: "A1",
    title: "Common prepositions",
    summary: "in, op, bij, naar, van, met, voor, na, om, uit, aan, onder, naast, tussen.",
  },
  {
    id: "diminutives",
    level: "A1",
    title: "Diminutives",
    summary: "-je, -tje, -pje make things small or friendly, and always take het: het kopje.",
  },
  {
    id: "het-subject",
    level: "A1",
    title: "het as 'it'",
    summary: "Weather, time and general statements: Het regent. Het is half drie. Het is leuk.",
  },
];
