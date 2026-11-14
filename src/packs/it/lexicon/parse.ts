import type { Lexicon, WordHelp } from "@/core/content";

/**
 * Compact word lists: one word per line, fields split by "|":
 *   word | meaning | base | look closer | like a local
 * Empty fields are skipped, so "parlo | I speak | parlare" is a whole entry.
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
