/// <reference lib="webworker" />
import nspell from "nspell";

/**
 * Spelling in a background thread: loads a Hunspell dictionary once
 * (about 2.5 MB for Dutch, cached by the browser) and checks words.
 * Compound words are accepted when both parts are words, with the usual
 * linking letters (verjaardag-s-feest, boek-en-kast).
 */

type InMessage =
  | { type: "load"; aff: string; dic: string }
  | { type: "check"; id: number; words: string[] };

let spell: ReturnType<typeof nspell> | null = null;
const LINKS = ["", "s", "e", "en"];

function isCompound(word: string): boolean {
  const w = word.toLowerCase();
  for (let i = 3; i <= w.length - 3; i++) {
    const right = w.slice(i);
    if (!spell!.correct(right)) continue;
    for (const link of LINKS) {
      const left = w.slice(0, i);
      if (!left.endsWith(link)) continue;
      const part = left.slice(0, left.length - link.length);
      if (part.length >= 3 && spell!.correct(part)) return true;
    }
  }
  return false;
}

self.onmessage = async (e: MessageEvent<InMessage>) => {
  const m = e.data;
  try {
    if (m.type === "load") {
      if (spell) return self.postMessage({ type: "ready" });
      const [aff, dic] = await Promise.all([fetch(m.aff).then((r) => r.text()), fetch(m.dic).then((r) => r.text())]);
      spell = nspell({ aff, dic });
      self.postMessage({ type: "ready" });
    } else if (m.type === "check") {
      if (!spell) throw new Error("The dictionary isn't loaded yet.");
      const results = m.words.map((word) => {
        const ok = spell!.correct(word) || spell!.correct(word.toLowerCase()) || isCompound(word);
        return { word, ok, suggestions: ok ? [] : spell!.suggest(word).slice(0, 5) };
      });
      self.postMessage({ type: "result", id: m.id, results });
    }
  } catch (err) {
    self.postMessage({ type: "error", id: "id" in m ? m.id : -1, message: (err as Error).message });
  }
};
