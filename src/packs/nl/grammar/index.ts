import type { GrammarPoint } from "@/core/content";
import { grammarPoints } from "./points";
import { lessons1 } from "./lessons-1";
import { lessons2 } from "./lessons-2";
import { lessons3 } from "./lessons-3";
import { lessons4 } from "./lessons-4";
import { lessons5 } from "./lessons-5";
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
};

const lessons = { ...lessons1, ...lessons2, ...lessons3, ...lessons4, ...lessons5 };

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
