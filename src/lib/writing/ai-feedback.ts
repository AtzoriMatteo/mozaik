import type { LanguagePack } from "@/core/language-pack";
import type { WritingTask } from "@/core/writing";

/**
 * Optional AI feedback on writing, with the learner's own Anthropic API key.
 *
 * The request goes straight from the browser to Anthropic: the key and the
 * text never pass through Mozaik's server or database. The key is kept in
 * this browser only (localStorage). Mozaik pays nothing; the learner pays
 * Anthropic per check (a fraction of a cent with Haiku).
 */

export const AI_KEY_STORAGE = "mozaik:ai-key";
export const AI_MODEL = "claude-haiku-5-5";
const ENDPOINT = "https://api.anthropic.com/v1/messages";

export type AiCorrection = {
  /** The learner's words, exactly as written. */
  original: string;
  corrected: string;
  /** One short line in the explanation language. */
  why: string;
  kind: "grammar" | "word" | "meaning" | "natural";
};

export type AiFeedback = {
  /** Per point, in order: did the text really say it? */
  points: { said: boolean; note: string }[];
  corrections: AiCorrection[];
  /** The learner's text as a native speaker would write it, same meaning and level. */
  natural: string;
  /** Two short encouraging, honest sentences. */
  summary: string;
};

export function buildPrompt(pack: LanguagePack, task: WritingTask, points: readonly string[], parts: readonly string[]): string {
  const lines = points.map((p, i) => `${i + 1}. Asked: ${p}\n   Learner wrote: ${parts[i]?.trim() || "(nothing)"}`).join("\n");
  return `You are a kind, exact ${pack.name} teacher checking a ${task.level} learner's writing. Explanations in English.

Task: ${task.situation}
The learner answers each point in its own box:
${lines}

Check meaning as well as form. For each point, decide whether the learner really said it in a correct-enough ${pack.name} sentence (a lone word or an unrelated sentence is not "said"). List every real mistake: grammar, wrong word, sentences that don't mean what the learner probably meant, and phrasing no native would use. Leave names, places and the learner's personal facts as they are. Don't correct things that are fine; stay at ${task.level} level in your suggestions.

Reply with JSON only, no other text, in exactly this shape:
{"points":[{"said":true,"note":"short note"}],"corrections":[{"original":"exact words from the learner","corrected":"fixed words","why":"one short line","kind":"grammar|word|meaning|natural"}],"natural":"the whole text as a native would write it","summary":"two short sentences"}
"points" must have exactly ${points.length} entries, in order.`;
}

/** Pull the JSON object out of the model's reply and check its shape. */
export function parseFeedback(reply: string, pointCount: number): AiFeedback {
  const start = reply.indexOf("{");
  const end = reply.lastIndexOf("}");
  if (start < 0 || end < start) throw new Error("The AI didn't send feedback in a form Mozaik understands. Try again.");
  const raw = JSON.parse(reply.slice(start, end + 1)) as Partial<AiFeedback>;
  const points = Array.from({ length: pointCount }, (_, i) => {
    const p = raw.points?.[i];
    return { said: !!p?.said, note: typeof p?.note === "string" ? p.note : "" };
  });
  const kinds = new Set(["grammar", "word", "meaning", "natural"]);
  const corrections = (raw.corrections ?? [])
    .filter((c): c is AiCorrection => !!c && typeof c.original === "string" && typeof c.corrected === "string")
    .filter((c) => c.original.trim() !== c.corrected.trim())
    .map((c) => ({ ...c, why: String(c.why ?? ""), kind: kinds.has(c.kind) ? c.kind : "grammar" }));
  return {
    points,
    corrections,
    natural: typeof raw.natural === "string" ? raw.natural : "",
    summary: typeof raw.summary === "string" ? raw.summary : "",
  };
}

export async function askForFeedback(
  key: string,
  pack: LanguagePack,
  task: WritingTask,
  points: readonly string[],
  parts: readonly string[],
): Promise<AiFeedback> {
  let res: Response;
  try {
    res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        // Needed for calls from a browser. Safe here: it's the learner's own key, on their own device.
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: AI_MODEL,
        max_tokens: 3000,
        messages: [{ role: "user", content: buildPrompt(pack, task, points, parts) }],
      }),
    });
  } catch {
    throw new Error("Couldn't reach the AI. Check your connection and try again.");
  }
  if (res.status === 401) throw new Error("The AI key wasn't accepted. Check it in the AI settings below.");
  if (res.status === 429) throw new Error("Your AI account is busy or out of credit. Try again in a minute.");
  if (!res.ok) throw new Error(`The AI couldn't check this right now (error ${res.status}).`);
  const data = (await res.json()) as { content?: { type: string; text?: string }[] };
  const text = (data.content ?? []).filter((b) => b.type === "text").map((b) => b.text ?? "").join("");
  return parseFeedback(text, points.length);
}
