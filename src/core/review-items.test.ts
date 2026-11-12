import { describe, expect, it } from "vitest";
import { dutch } from "@/packs/nl";
import {
  buildSession, countItems, eligibleItems, interleave, wordCardFor,
  type Done, type ReviewItem, type Schedule,
} from "./review-items";

const none: Done = { read: new Set(), listen: new Set(), grammar: new Set(), speak: new Set() };
const now = new Date("2026-11-12T15:00:00");

describe("what comes back in review", () => {
  it("is empty before you've done anything", () => {
    expect(eligibleItems(dutch, none, { courseWords: true })).toEqual([]);
  });

  it("adds the core words of a text once you've read it, each once", () => {
    const items = eligibleItems(dutch, { ...none, read: new Set(["nieuw-in-leiden"]) }, { courseWords: true });
    const words = items.filter((i) => i.kind === "word");
    expect(words.length).toBeGreaterThan(15);
    expect(new Set(words.map((w) => w.id)).size).toBe(words.length);
    expect(words.some((w) => w.id === "w:de")).toBe(false); // too small to drill
    expect(words.find((w) => w.id === "w:wonen")?.sentence).toContain("woon");
  });

  it("can leave course words out and keep saved words", () => {
    const items = eligibleItems(dutch, { ...none, read: new Set(["nieuw-in-leiden"]) }, {
      courseWords: false,
      savedWords: [{ word: "fijn", surface: "fijn", meaning: "nice", sentence: "Ik vind het hier fijn." }],
    });
    expect(items.map((i) => i.id)).toEqual(["saved:fijn"]);
  });

  it("doesn't duplicate a course word you also saved", () => {
    const items = eligibleItems(dutch, { ...none, read: new Set(["nieuw-in-leiden"]) }, {
      courseWords: true,
      savedWords: [{ word: "woon", surface: "woon", base: "wonen", meaning: "live", sentence: "x" }],
    });
    expect(items.some((i) => i.id === "w:wonen")).toBe(false);
    expect(items.some((i) => i.id === "saved:woon")).toBe(true);
  });

  it("adds grammar exercises, listening lines and speaking items when those are done", () => {
    const items = eligibleItems(dutch, {
      read: new Set(), listen: new Set(["op-het-perron"]), grammar: new Set(["verb-second"]), speak: new Set(["a1-eten"]),
    }, { courseWords: true });
    expect(items.filter((i) => i.kind === "grammar").length).toBe(6);
    expect(items.filter((i) => i.kind === "listen").length).toBeGreaterThan(0);
    expect(items.some((i) => i.kind === "speak" && i.contrast === "hoes")).toBe(true);
  });
});

describe("building a session", () => {
  const item = (kind: ReviewItem["kind"], id: string) => ({ kind, id }) as ReviewItem;
  const sched = (dueAt: string, introducedAt = "2026-11-01T10:00:00"): Schedule => ({ stage: 1, dueAt, introducedAt });

  it("puts due items first, then new ones within today's allowance", () => {
    const items = [item("word", "a"), item("word", "b"), item("word", "c"), item("word", "d")];
    const schedules = new Map([["a", sched("2026-11-12T08:00:00")], ["b", sched("2026-11-20T08:00:00")]]);
    const s = buildSession(items, schedules, { kinds: new Set(["word"]), size: 10, newPerDay: 1, now });
    expect(s.map((i) => i.id)).toEqual(["a", "c"]);
  });

  it("counts new items already started today against the allowance", () => {
    const items = [item("word", "a"), item("word", "b")];
    const schedules = new Map([["x", sched("2026-11-13T08:00:00", "2026-11-12T09:00:00")]]);
    const s = buildSession(items, schedules, { kinds: new Set(["word"]), size: 10, newPerDay: 1, now });
    expect(s).toEqual([]);
  });

  it("only includes the chosen kinds and respects the session size", () => {
    const items = [item("word", "a"), item("grammar", "g1"), item("grammar", "g2"), item("listen", "l1")];
    const s = buildSession(items, new Map(), { kinds: new Set(["grammar", "listen"]), size: 2, newPerDay: 10, now });
    expect(s.map((i) => i.kind).sort()).toEqual(["grammar", "listen"]);
  });

  it("mixes kinds instead of blocks", () => {
    const items = [item("word", "a"), item("word", "b"), item("grammar", "g"), item("listen", "l")];
    expect(interleave(items).map((i) => i.id)).toEqual(["a", "g", "l", "b"]);
  });

  it("counts due and new per kind", () => {
    const items = [item("word", "a"), item("word", "b"), item("grammar", "g")];
    const c = countItems(items, new Map([["a", sched("2026-11-12T08:00:00")]]), now);
    expect(c.word).toEqual({ due: 1, fresh: 1 });
    expect(c.grammar).toEqual({ due: 0, fresh: 1 });
  });
});

describe("word card directions", () => {
  it("shows the meaning card while a word is new", () => {
    expect(wordCardFor(0, "w:x", { recall: true, listen: true })).toBe("meaning");
  });
  it("only uses directions that are switched on", () => {
    for (let st = 2; st < 7; st++) expect(wordCardFor(st, "w:y", { recall: false, listen: false })).toBe("meaning");
  });
});
