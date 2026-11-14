import type { GrammarPoint } from "@/core/content";
import { grammarPoints } from "./points";
import { lessons1 } from "./lessons-1";
import { lessons2 } from "./lessons-2";
import { lessons3 } from "./lessons-3";
import { lessons4 } from "./lessons-4";
import { lessons5 } from "./lessons-5";
import { lessonsA2a } from "./lessons-a2-1";
import { lessonsA2b } from "./lessons-a2-2";
import { lessonsA2c } from "./lessons-a2-3";
import { moreBlocks, moreExamples, moreExercises } from "./more-exercises";

/** Which unit teaches which grammar point (about three per unit). */
const UNIT_FOR: Record<string, string> = {
  "pronouns-subject": "a1-kennismaken",
  "present-regular": "a1-kennismaken",
  "zijn-hebben": "a1-kennismaken",
  possessives: "a1-familie",
  plurals: "a1-familie",
  articles: "a1-familie",
  "er-is": "a1-eten",
  demonstratives: "a1-eten",
  diminutives: "a1-eten",
  "time-numbers": "a1-dag-en-tijd",
  "verb-second": "a1-dag-en-tijd",
  "separable-verbs": "a1-dag-en-tijd",
  prepositions: "a1-wonen",
  "adjective-e": "a1-wonen",
  imperative: "a1-wonen",
  questions: "a1-werk-en-studie",
  "jij-inversion": "a1-werk-en-studie",
  "modal-verbs": "a1-werk-en-studie",
  negation: "a1-gezondheid",
  "object-pronouns": "a1-gezondheid",
  conjunctions: "a1-gezondheid",
  "het-subject": "a1-vrije-tijd",
  "gaan-future": "a1-vrije-tijd",
  spelling: "a1-basis",
  reflexive: "a1-gezondheid",
  "graag-liever": "a1-kleren",
  comparatives: "a1-kleren",
  "dates-ordinals": "a1-feestdagen",
  // A2
  "perfect-hebben": "a2-verleden",
  "perfect-zijn": "a2-verleden",
  "participles-irregular": "a2-verleden",
  "subordinate-order": "a2-werk",
  "want-omdat": "a2-werk",
  "er-preposition": "a2-wonen",
  "relative-clauses": "a2-wonen",
  "modal-past": "a2-gezondheid",
  "te-infinitive": "a2-gezondheid",
  "imperfect-regular": "a2-reizen",
  "imperfect-irregular": "a2-reizen",
  "perfect-or-past": "a2-reizen",
  "indirect-questions": "a2-media",
  "als-wanneer-toen": "a2-media",
  "om-te": "a2-samenleving",
  "separable-past": "a2-samenleving",
  superlatives: "a2-uitgaan",
  "possessive-van": "a2-uitgaan",
  "er-quantity": "a2-koken",
  "zou-polite": "a2-koken",
  "zullen-future": "a2-natuur",
  "word-order-tmp": "a2-natuur",
};

const lessons = { ...lessons1, ...lessons2, ...lessons3, ...lessons4, ...lessons5, ...lessonsA2a, ...lessonsA2b, ...lessonsA2c };

export const grammar: readonly GrammarPoint[] = grammarPoints.map((g) => ({
  ...g,
  unit: UNIT_FOR[g.id],
  lesson: lessons[g.id] && {
    ...lessons[g.id],
    blocks: [...lessons[g.id].blocks, ...(moreBlocks[g.id] ?? [])],
    examples: [...lessons[g.id].examples, ...(moreExamples[g.id] ?? [])],
    exercises: [...lessons[g.id].exercises, ...(moreExercises[g.id] ?? [])],
  },
}));
