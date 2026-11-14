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
    commonVerbs(): readonly string[] {
      const pack = getPack();
      const freq = pack.wordFrequency ?? {};
      const all = new Set([...Object.keys(IRREGULAR), ...Object.keys(pack.lexicon).filter((w) => isVerb(pack, w))]);
      return [...all].sort((a, b) => (freq[b] ?? 0) - (freq[a] ?? 0) || a.localeCompare(b));
    },
  };
}
