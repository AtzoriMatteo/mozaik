import { it } from "vitest";
import { helpFor, countWords } from "@/core/content";
import { getPack } from "@/core/registry";
it("dump", () => {
  const pack = getPack(process.env.L!)!;
  const miss = new Set<string>();
  const counts: string[] = [];
  for (const t of pack.library?.texts ?? []) { counts.push(`${t.id}:${countWords(t)}`); for (const s of t.paragraphs.flat()) for (const tok of pack.tokenize(s.text)) if (tok.kind === "word" && !helpFor(pack.lexicon, t, tok.normalized)) miss.add(tok.normalized); }
  require("fs").writeFileSync("/tmp/miss.txt", counts.join("\n") + "\n---\n" + [...miss].sort().join(" "));
});
