import type { LanguagePack } from "@/core/language-pack";
import { lexicon } from "./lexicon";
import { grammar } from "./grammar";
import { units } from "./units";
import { coreVocabularyA1 } from "./vocabulary";
import { sounds } from "./sounds";
import { tips } from "./tips";
import { articleFor } from "./articles";
import { cast } from "./cast";
import { expressions } from "./expressions";
import { handbook } from "./handbook";
import { resources } from "./resources";
import { tokenizeItalian } from "./tokenize";
import { verbTools } from "./verbs";

function greetingFor(hour: number) {
  if (hour >= 5 && hour < 14) return { text: "Buongiorno", meaning: "Good morning" };
  if (hour >= 14 && hour < 18) return { text: "Buon pomeriggio", meaning: "Good afternoon" };
  if (hour >= 18 && hour < 24) return { text: "Buonasera", meaning: "Good evening" };
  return { text: "Buonanotte", meaning: "Good night" };
}

export const italian: LanguagePack = {
  code: "it",
  name: "Italian",
  nativeName: "Italiano",
  accent: { light: "#9e2b25", dark: "#ec8f80" }, // Pompeian red
  theme: "ravenna",
  verbShape: "Italian infinitives end in -are, -ere or -ire (parlare, prendere, dormire), or -arsi for reflexive verbs.",
  exams: "CILS, CELI or PLIDA",
  checkerCovers: "Spelling looks right, and LanguageTool found no grammar problems.",
  spelling: { aff: "/dictionaries/it/index.aff", dic: "/dictionaries/it/index.dic" },
  languageTool: "it",
  levels: ["A1"],
  tokenize: tokenizeItalian,
  greeting: greetingFor,
  units,
  lexicon,
  grammar,
  sounds,
  coreVocabulary: { A1: coreVocabularyA1 },
  resources,
  tips,
  nounArticle: articleFor,
  articles: { definite: ["il", "lo", "la", "l'", "i", "gli", "le"], indefinite: ["un", "uno", "una", "un'"] },
  cast,
  expressions,
  handbook,
  ...verbTools(() => italian),
};
