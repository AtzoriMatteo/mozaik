import type { LanguagePack } from "@/core/language-pack";
import type { VerbTables } from "@/core/verbs";
import { cardMeaning, isVerb } from "@/core/dictionary";
import { conjugateDutch } from "./conjugate";
import { IRREGULAR } from "./irregular";

/** Irregular forms back to their infinitive: liep → lopen, gegeten → eten. */
const FORMS: ReadonlyMap<string, string> = new Map(
  Object.entries(IRREGULAR).flatMap(([inf, v]) => [v.pastSg, v.pastPl, v.participle].filter(Boolean).map((f) => [f!, inf] as const)),
);

const known = (pack: LanguagePack, v: string) => !!IRREGULAR[v] || isVerb(pack, v);

export function verbTools(getPack: () => LanguagePack) {
  return {
    conjugate(input: string): VerbTables | null {
      const pack = getPack();
      const inf = input.trim().toLowerCase().replace(/^zich\s+/, "");
      const meaning = pack.lexicon[inf] ? cardMeaning(pack, inf, pack.lexicon[inf].meaning) : undefined;
      return conjugateDutch(input, { knownVerb: (v) => known(pack, v), meaning });
    },
    verbFor(word: string): string | null {
      const pack = getPack();
      const w = word.trim().toLowerCase().replace(/^zich\s+/, "");
      if (!w) return null;
      if (known(pack, w)) return w;
      const base = pack.lexicon[w]?.base?.toLowerCase();
      if (base && known(pack, base)) return base;
      return FORMS.get(w) ?? null;
    },
    couldBeVerb(word: string): boolean {
      const pack = getPack();
      const w = word.toLowerCase();
      if (pack.verbFor?.(w)) return true;
      // The lexicon points to an infinitive (mis → missen) even when the verb has no other forms in the course.
      const base = pack.lexicon[w]?.base?.toLowerCase();
      if (base && base !== w && /en$/.test(base) && !pack.nounArticle?.(base)) return true;
      // Plural verb forms are the infinitive (ze noemen, we verbeteren): any -en word that isn't a noun might be one.
      if (!base && /[^e]en$/.test(w) && pack.lexicon[w] && !pack.nounArticle?.(w)) return true;
      // Present forms of verbs the lexicon only knows as nouns or not at all:
      // fiets → fietsen, zwem → zwemmen, woon → wonen, geef → geven, lees → lezen.
      const stems = new Set([w, w.replace(/t$/, ""), w.replace(/(de|te|den|ten)$/, "")]);
      for (const st of stems) {
        if (st.length < 2) continue;
        const soft = st.replace(/f$/, "v").replace(/s$/, "z");
        const single = (x: string) => x.replace(/(aa|ee|oo|uu)([^aeiou])$/, (_, v: string, c: string) => v[0] + c);
        const tries = [`${st}en`, `${st}${st.at(-1)}en`, `${single(st)}en`, `${single(soft)}en`, `${soft}en`, `${st}n`];
        if (tries.some((inf) => known(pack, inf))) return true;
      }
      return false;
    },
    commonVerbs(): readonly string[] {
      const pack = getPack();
      const freq = pack.wordFrequency ?? {};
      const all = new Set([...Object.keys(IRREGULAR), ...Object.keys(pack.lexicon).filter((w) => isVerb(pack, w))]);
      return [...all].sort((a, b) => (freq[b] ?? 0) - (freq[a] ?? 0) || a.localeCompare(b));
    },
  };
}
