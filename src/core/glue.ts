import type { Token } from "./language-pack";

/**
 * Groups tokens so punctuation stays on the same line as its word:
 * `"Langzamer,` never breaks into `"Langzamer` + `,`. Words are rendered as
 * buttons, and browsers allow a line break next to a button, so each word is
 * kept in a no-wrap group with the punctuation touching it on either side.
 */
export type GluePiece = { kind: "word"; token: Extract<Token, { kind: "word" }>; index: number } | { kind: "text"; text: string };
export type GlueItem = { kind: "group"; pieces: GluePiece[] } | { kind: "gap"; text: string };

export function glueTokens(tokens: readonly Token[]): GlueItem[] {
  const out: GlueItem[] = [];
  let group: GluePiece[] | null = null;
  let prefix = "";
  const close = () => {
    if (group) out.push({ kind: "group", pieces: group });
    group = null;
  };
  tokens.forEach((token, index) => {
    if (token.kind === "word") {
      group ??= prefix ? [{ kind: "text", text: prefix }] : [];
      prefix = "";
      group.push({ kind: "word", token, index });
      return;
    }
    const text = token.text;
    if (!/\s/.test(text)) {
      // Punctuation with no space ("-", "'", "…"): stays glued on both sides.
      if (group) group.push({ kind: "text", text });
      else prefix += text;
      return;
    }
    const lead = text.match(/^\S*/)![0];
    const trail = text.match(/\S*$/)![0];
    const middle = text.slice(lead.length, text.length - trail.length);
    if (lead) {
      if (group) group.push({ kind: "text", text: lead });
      else out.push({ kind: "gap", text: lead });
    }
    close();
    out.push({ kind: "gap", text: prefix + middle });
    prefix = trail;
  });
  close();
  if (prefix) out.push({ kind: "gap", text: prefix });
  return out;
}
