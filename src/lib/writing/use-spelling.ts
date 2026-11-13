"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { LanguagePack } from "@/core/language-pack";
import type { WritingIssue } from "@/core/writing";

type Result = { word: string; ok: boolean; suggestions: string[] };

/**
 * Spelling for a pack's dictionary, checked in a worker. Words the course
 * knows always pass, and so do names (a capital letter mid-sentence).
 */
export function useSpelling(pack: LanguagePack) {
  const workerRef = useRef<Worker | null>(null);
  const pending = useRef(new Map<number, (r: Result[]) => void>());
  const [state, setState] = useState<"off" | "loading" | "ready" | "error">(pack.spelling ? "loading" : "off");

  useEffect(() => {
    if (!pack.spelling) return;
    const worker = new Worker(new URL("./spell.worker.ts", import.meta.url), { type: "module" });
    workerRef.current = worker;
    worker.onmessage = (e: MessageEvent) => {
      const m = e.data;
      if (m.type === "ready") setState("ready");
      else if (m.type === "result") {
        pending.current.get(m.id)?.(m.results);
        pending.current.delete(m.id);
      } else if (m.type === "error") {
        setState("error");
        pending.current.get(m.id)?.([]);
        pending.current.delete(m.id);
      }
    };
    worker.onerror = () => setState("error");
    worker.postMessage({ type: "load", aff: pack.spelling.aff, dic: pack.spelling.dic });
    return () => worker.terminate();
  }, [pack.spelling]);

  const check = useCallback(
    async (text: string): Promise<WritingIssue[]> => {
      const worker = workerRef.current;
      if (!worker || state !== "ready") return [];
      // Collect words with their places; skip known words, numbers and names.
      const words: { text: string; start: number; end: number; name: boolean }[] = [];
      let pos = 0;
      let sentenceStart = true;
      for (const t of pack.tokenize(text)) {
        const start = pos;
        pos += t.text.length;
        if (t.kind === "punctuation" && /[.!?:]/.test(t.text)) sentenceStart = true;
        if (t.kind !== "word") continue;
        const atStart = sentenceStart;
        sentenceStart = false;
        if (/\d/.test(t.text) || pack.lexicon[t.normalized]) continue;
        const name = !atStart && /^\p{Lu}/u.test(t.text);
        if (pack.spelling?.isWord?.(t.normalized)) continue;
        words.push({ text: t.text, start, end: pos, name });
      }
      if (words.length === 0) return [];
      const id = Math.random();
      const results = await new Promise<Result[]>((resolve) => {
        pending.current.set(id, resolve);
        worker.postMessage({ type: "check", id, words: words.map((w) => w.text) });
      });
      const plain = (x: string) => x.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
      // Same word with accents first, then words the course knows.
      for (const r of results) {
        const score = (x: string) =>
          (plain(x) === plain(r.word) ? 2 : 0) + (pack.lexicon[x.toLowerCase()] ? 1 : 0);
        r.suggestions.sort((x, y) => score(y) - score(x));
      }
      return results.flatMap((r, i) =>
        // Names pass, unless the dictionary knows the same word with accents (Italie → Italië).
        r.ok || (words[i].name && !r.suggestions.some((sug) => sug !== r.word && plain(sug) === plain(r.word)))
          ? []
          : [{
              start: words[i].start,
              end: words[i].end,
              kind: "spelling" as const,
              message: r.suggestions.length
                ? `Not in the dictionary. Did you mean ${r.suggestions.slice(0, 3).map((s) => `"${s}"`).join(" or ")}?`
                : "Not in the dictionary: check the spelling.",
              fix: r.suggestions[0],
              lesson: "spelling",
              source: "mozaik" as const,
            }],
      );
    },
    [pack, state],
  );

  return { state, check };
}
