import type { Token } from "@/core/language-pack";
import { segmentText } from "@/core/tokenize";

/** Words that keep their apostrophe inside: c'è is one word for a learner ("there is"). */
const WHOLE = new Set(["c'è", "c'era", "c'erano", "dov'è", "com'è", "cos'è", "quand'è", "va'", "fa'", "da'", "sta'", "di'"]);

/**
 * Italian elides: l'amico, dell'arte, un'amica, quest'anno. The generic
 * segmenter keeps those as one word; a learner needs two (the article and
 * the noun), so we split after the apostrophe. A word that ends in an
 * apostrophe (un po', va') keeps it.
 */
export function tokenizeItalian(text: string): Token[] {
  const raw = segmentText(text.replace(/’/g, "'"), "it");
  const out: Token[] = [];
  for (let i = 0; i < raw.length; i++) {
    const tok = raw[i];
    const next = raw[i + 1];
    if (tok.kind === "word" && tok.text.includes("'") && !WHOLE.has(tok.normalized)) {
      const cut = tok.text.indexOf("'") + 1;
      const head = tok.text.slice(0, cut);
      const tail = tok.text.slice(cut);
      out.push({ kind: "word", text: head, normalized: head.toLowerCase() });
      if (tail) out.push({ kind: "word", text: tail, normalized: tail.toLowerCase() });
      continue;
    }
    // po' and va': the apostrophe belongs to the word before it.
    if (tok.kind === "word" && next?.kind === "punctuation" && next.text === "'" && /^(po|va|fa|da|sta|di|mo)$/i.test(tok.text)) {
      const t = `${tok.text}'`;
      out.push({ kind: "word", text: t, normalized: t.toLowerCase() });
      i++;
      continue;
    }
    out.push(tok);
  }
  return out;
}
