import type { Lexicon, WordHelp } from "@/core/content";
import { parseAmount, sayDigits, sayNumber, sayTime, sayYear } from "../numbers";

/**
 * Compact word lists: one word per line, fields split by "|":
 *   word | meaning | base | look closer | like a local
 * Empty fields are skipped, so "gegeten | eaten | eten" is a whole entry.
 */
export function parseLexicon(raw: string): Lexicon {
  const out: Lexicon = {};
  for (const row of raw.split("\n")) {
    const line = row.trim();
    if (!line || line.startsWith("#")) continue;
    const [word, meaning, base, closer, local] = line.split(/\s*\|\s*/);
    const help: WordHelp = { meaning };
    if (base) help.base = base;
    if (closer) help.closer = closer;
    if (local) help.local = local;
    out[word.toLowerCase()] = help;
  }
  return out;
}

/** Word help for numbers in the course: how to say them. */
export function numberHelp(kind: "year" | "time" | "amount" | "phone", tokens: string[]): Lexicon {
  const out: Lexicon = {};
  for (const t of tokens) {
    const said =
      kind === "year" ? sayYear(Number(t)) :
      kind === "time" ? sayTime(t) :
      kind === "phone" ? sayDigits(t) :
      sayNumber(parseAmount(t));
    const meaning =
      kind === "year" ? `the year ${t}` :
      kind === "time" ? `${t} (24-hour clock)` :
      kind === "phone" ? "part of a phone number" :
      t;
    out[t.toLowerCase()] = { meaning, local: `Say: ${said}` };
  }
  return out;
}
