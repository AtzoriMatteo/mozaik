import { isItalianNumber, italianGrammarIn, italianStems } from "./grammar-use";
import { speakers } from "./speakers";
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
  isNumberWord: isItalianNumber,
  stems: italianStems,
  grammarIn: (text) => italianGrammarIn(italian, text),
  formulas: new Set([
    "ciao", "salve", "buongiorno", "buonasera", "buonanotte", "arrivederci", "arrivederla", "presto", "grazie", "prego",
    "scusa", "scusi", "sì", "no", "caro", "cara", "cari", "care", "gentile", "saluti", "baci", "abbracci", "auguri",
    "complimenti", "benvenuto", "benvenuta", "piacere", "buon", "buona", "tanti", "mille",
  ]),
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
  homographs: {
    // "Sì, piacere!" is a greeting; "mi piace" is the verb. One card for both.
    piacere: { noun: "pleasure; nice to meet you", other: "nice to meet you; pleasure; to please (mi piace = I like it)" },
  },
  articles: { definite: ["il", "lo", "la", "l'", "i", "gli", "le"], indefinite: ["un", "uno", "una", "un'"] },
  cast,
  expressions,
  speakers,
  speakingNote: {
    title: "Parla con Matteo!",
    text: "There's no speaking practice in this course. The best way to practise Italian is to talk to an Italian, and Matteo, who built this, is one. Send him a voice message in Italian. Worst case, he corrects your double consonants.",
  },
  handbook,
  ...verbTools(() => italian),
  // c'è, dov'è, com'è and ecco do a verb's job.
  couldBeVerb: (w) => /'(è|era|erano|sono)$/.test(w) || w === "ecco" || !!italian.verbFor?.(w),
};
