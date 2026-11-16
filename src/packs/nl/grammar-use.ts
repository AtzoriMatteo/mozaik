import type { LanguagePack } from "@/core/language-pack";
import { tenseUses } from "@/core/coherence";

/**
 * Grammar a Dutch text uses beyond the present tense, as grammar point ids,
 * so production tasks never ask for grammar the course hasn't taught yet.
 */

const HELPERS = new Set(["heb", "hebt", "heeft", "hebben", "ben", "bent", "is", "zijn"]);
/** Participles that work as plain adjectives or set phrases at A1. */
const FIXED = new Set(["geboren", "getrouwd", "gescheiden", "gesloten", "geopend", "bekend", "verkouden", "geïnteresseerd", "gezellig"]);
const MODALS = new Set(["kunnen", "moeten", "willen", "mogen"]);
const SUBORDINATORS = new Set(["omdat", "terwijl", "nadat", "voordat", "zodat", "hoewel", "zodra", "totdat"]);
const ER_PREP = /^er(in|op|van|mee|over|bij|aan|voor|na|uit|achter|naast|onder|boven|tegen|door|om|af|heen|toe)$/;
const IRREGULAR_SUPERLATIVE: Record<string, string> = { best: "goed", beste: "goed", meest: "veel", meeste: "veel" };
const IRREGULAR_COMPARATIVE = new Set(["beter"]);

export function dutchGrammarIn(pack: LanguagePack, text: string): { grammar: string; word: string }[] {
  const out = tenseUses(
    pack,
    text,
    (tense, inf, form) => {
      if (tense === "perfect") return /zijn/.test(pack.conjugate!(inf)!.auxiliary) && !/hebben/.test(pack.conjugate!(inf)!.auxiliary) ? "perfect-zijn" : "perfect-hebben";
      if (inf === "zullen") return null; // zou: handled below
      if (tense === "past") {
        if (MODALS.has(inf)) return "modal-past";
        return pack.conjugate!(inf)!.irregular || inf === "zijn" || inf === "hebben" ? "imperfect-irregular" : "imperfect-regular";
      }
      if (tense === "conditional") return "zou-polite";
      void form;
      return null;
    },
    HELPERS,
    FIXED,
  );
  // A sentence at a time, for the patterns the verb tables can't see.
  for (const sentence of text.split(/(?<=[.!?,])\s+|\n+/)) {
    const toks = pack.tokenize(sentence).filter((t) => t.kind === "word");
    const ws = toks.map((t) => t.normalized);
    const question = /\?\s*["”]?$/.test(sentence);
    ws.forEach((w, i) => {
      const word = toks[i].text;
      if (w === "zou" || w === "zouden") out.push({ grammar: "zou-polite", word });
      if ((w === "zal" || w === "zult" || (w === "zullen" && ws[i + 1] !== "we")) && !(i === 0 && question)) out.push({ grammar: "zullen-future", word });
      if (SUBORDINATORS.has(w) || (w === "wanneer" && !question)) out.push({ grammar: "subordinate-order", word });
      if (w === "toen") out.push({ grammar: "als-wanneer-toen", word });
      if (ER_PREP.test(w)) out.push({ grammar: "er-preposition", word });
      if (w === "zich") out.push({ grammar: "reflexive", word });
      if (w === "om" && ws.slice(i + 1, i + 8).includes("te")) {
        const after = ws[ws.indexOf("te", i + 1) + 1];
        if (after && pack.verbFor?.(after) === after) out.push({ grammar: "om-te", word });
      }
      if (w === "te" && ws[i - 1] !== "om" && !ws.slice(Math.max(0, i - 7), i).includes("om")) {
        const next = ws[i + 1];
        if (next && pack.verbFor?.(next) === next && pack.verbFor?.(next) && !pack.lexicon[next]?.meaning?.startsWith("too")) out.push({ grammar: "te-infinitive", word });
      }
      // Superlatives and comparatives of adjectives the lexicon knows.
      const base = pack.lexicon[w]?.base?.toLowerCase();
      // "Beste Sanne," / "Beste meneer De Groot," opens a letter.
      const greeting = i === 0 && w === "beste";
      const ordinal = base && pack.isNumberWord?.(base);
      if (!greeting && !ordinal && (IRREGULAR_SUPERLATIVE[w] || (base && (w === `${base}st` || w === `${base}ste`) && !pack.verbFor?.(w)))) {
        out.push({ grammar: "superlatives", word });
      }
      if (IRREGULAR_COMPARATIVE.has(w) || (base && /^(.+)(d?er|d?ere)$/.test(w) && (w === `${base}er` || w === `${base}der` || w === `${base}ere`) && !pack.verbFor?.(w))) {
        out.push({ grammar: "comparatives", word });
      }
    });
  }
  return out;
}
