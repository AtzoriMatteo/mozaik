/**
 * Dialogue inside reading texts. Each quoted turn ("…") is attributed to a
 * speaker in the pack's speaker list, so the reader can put every spoken
 * line on its own, with the speaker's name (Matteo: hard to follow who's
 * talking otherwise).
 */

/** A piece of a sentence: narration, or part of a quoted turn. */
export type DialoguePiece = { start: number; end: number; turn: number | null };

const OPENERS: Record<string, string> = { "“": "”", "„": "”", "«": "»" };
const CLOSERS = new Set(["”", "»"]);

/**
 * Split a text's sentences (in order) into narration and quoted turns.
 * Quotes may run across sentences and paragraphs; straight quotes alternate
 * open/close. Turns are numbered from 0 through the whole text. Quote marks
 * belong to their turn.
 */
export function dialoguePieces(sentences: readonly string[]): DialoguePiece[][] {
  let turn = -1;
  let open: string | null = null;
  return sentences.map((text) => {
    const pieces: DialoguePiece[] = [];
    let from = 0;
    const push = (end: number, t: number | null) => {
      if (end > from) pieces.push({ start: from, end, turn: t });
      from = end;
    };
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (!open && (ch === '"' || ch in OPENERS)) {
        push(i, null);
        turn++;
        open = ch === '"' ? '"' : OPENERS[ch];
      } else if (open && (ch === open || (open === "”" && ch === '"') || (open === '"' && CLOSERS.has(ch)))) {
        push(i + 1, turn);
        open = null;
      }
    }
    push(text.length, open ? turn : null);
    // Narration that's only spaces or a single punctuation mark joins its neighbour.
    return pieces.filter((p) => text.slice(p.start, p.end).trim() !== "");
  });
}

/** How many quoted turns a text has. */
export function turnCount(sentences: readonly string[]): number {
  return Math.max(-1, ...dialoguePieces(sentences).flat().map((p) => p.turn ?? -1)) + 1;
}

/**
 * Who says each turn, as written in a pack's speakers file: names separated
 * by "|", "-" for quoted words that aren't speech ("zeg dan 'dag'").
 */
export function parseSpeakers(line: string): (string | null)[] {
  return line.split("|").map((s) => s.trim()).map((s) => (s === "-" ? null : s));
}

/** A line in a paragraph: narration, or one speaker's turn. Parts point at tokens of the paragraph's sentences. */
export type DialogueBlock = {
  speaker: string | null;
  /** Each part: sentence index in the paragraph, and the token range [from, to). */
  parts: { sentence: number; from: number; to: number }[];
};

/**
 * Lay a text's paragraphs out as lines: narration flows as usual, each
 * speaker's turn gets its own line. What follows a quote in the same sentence
 * ("…," zegt Noor.) stays on the speaker's line; consecutive turns by the same
 * speaker share a line. Returns null for a paragraph with no speech, so it
 * renders as plain prose. Tokens must concatenate to their sentence.
 */
export function layoutDialogue(
  paragraphs: readonly (readonly (readonly { text: string }[])[])[],
  sentenceTexts: readonly (readonly string[])[],
  speakers: readonly (string | null)[],
): (DialogueBlock[] | null)[] {
  const pieces = dialoguePieces(sentenceTexts.flat());
  let k = 0;
  return paragraphs.map((sentences) => {
    const blocks: DialogueBlock[] = [];
    let spoken = false;
    sentences.forEach((tokens, s) => {
      const ps = pieces[k++];
      // Token start offsets.
      const starts: number[] = [];
      let at = 0;
      for (const t of tokens) {
        starts.push(at);
        at += t.text.length;
      }
      let afterTurn = false;
      for (const piece of ps) {
        const speaker = piece.turn === null ? null : (speakers[piece.turn] ?? null);
        const from = starts.findIndex((st) => st >= piece.start);
        let to = starts.findIndex((st) => st >= piece.end);
        if (to === -1) to = tokens.length;
        if (from === -1 || from >= to) continue;
        const part = { sentence: s, from, to };
        const last = blocks.at(-1);
        if (speaker) spoken = true;
        if (speaker && last?.speaker === speaker) last.parts.push(part);
        else if (!speaker && afterTurn && last?.speaker) last.parts.push(part); // the "zegt Noor." tail
        else if (!speaker && last && !last.speaker) last.parts.push(part);
        else blocks.push({ speaker, parts: [part] });
        afterTurn = piece.turn !== null && !!speaker;
      }
    });
    return spoken ? blocks : null;
  });
}
