import type { LanguagePack } from "@/core/language-pack";
import type { VerbTables } from "@/core/verbs";
import { conjugateItalian, simpleForms } from "./conjugate";
import { IRREGULAR } from "./irregular";

/** The verbs learners meet first, most useful first; the rest follow alphabetically. */
const TOP = `essere avere fare andare venire potere volere dovere sapere dire dare stare vedere prendere parlare
mangiare bere capire finire dormire uscire lavorare studiare abitare chiamarsi conoscere aprire chiudere leggere
scrivere sentire arrivare partire tornare comprare pagare cercare trovare guardare ascoltare aspettare cominciare
giocare pensare credere vivere mettere chiedere rispondere piacere preferire pulire spedire alzarsi vestirsi
divertirsi svegliarsi sedersi lavarsi rimanere scegliere salire scendere correre perdere vincere costare
portare preparare cucinare ordinare insegnare imparare usare entrare restare telefonare viaggiare`.split(/\s+/);

const INFINITIVE = /(are|ere|ire|rre)$/;

function verbsIn(pack: LanguagePack): Set<string> {
  const out = new Set<string>(Object.keys(IRREGULAR).filter((v) => !["durre"].includes(v)));
  for (const [form, help] of Object.entries(pack.lexicon)) {
    for (const w of [form, help.base?.toLowerCase()]) {
      if (!w || !INFINITIVE.test(w)) continue;
      const own = pack.lexicon[w]?.meaning ?? "";
      if (own.startsWith("to ") || IRREGULAR[w]) out.add(w);
    }
    // Reflexive infinitives: chiamarsi, annoiarsi.
    if (/[aei]rsi$/.test(form) && help.meaning.startsWith("to ")) out.add(form);
  }
  return out;
}

export function verbTools(getPack: () => LanguagePack) {
  let cache: { verbs: Set<string>; forms: Map<string, string> } | null = null;
  const data = () => {
    if (cache) return cache;
    const verbs = verbsIn(getPack());
    const forms = new Map<string, string>();
    for (const v of verbs) {
      const t = conjugateItalian(v);
      if (!t) continue;
      for (const f of simpleForms(t)) if (!forms.has(f)) forms.set(f, v);
    }
    cache = { verbs, forms };
    return cache;
  };
  return {
    conjugate(input: string): VerbTables | null {
      const pack = getPack();
      const inf = input.trim().toLowerCase();
      const meaning = pack.lexicon[inf]?.meaning;
      return conjugateItalian(input, { known: (v) => data().verbs.has(v), meaning: meaning?.startsWith("to ") || IRREGULAR[inf] ? meaning : undefined });
    },
    verbFor(word: string): string | null {
      const w = word.trim().toLowerCase().replace(/’/g, "'");
      if (!w) return null;
      const { verbs, forms } = data();
      if (verbs.has(w)) return w;
      const base = getPack().lexicon[w]?.base?.toLowerCase();
      if (base && verbs.has(base)) return base;
      return forms.get(w) ?? null;
    },
    commonVerbs(): readonly string[] {
      const { verbs } = data();
      const top = TOP.filter((v) => verbs.has(v) || IRREGULAR[v] || /rsi$/.test(v));
      const rest = [...verbs].filter((v) => !top.includes(v)).sort((a, b) => a.localeCompare(b, "it"));
      return [...top, ...rest];
    },
    verbList(): ReadonlySet<string> {
      return data().verbs;
    },
  };
}
