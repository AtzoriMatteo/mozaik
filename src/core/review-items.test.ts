import { describe, expect, it } from "vitest";
import { dutch } from "@/packs/nl";
import {
  buildSession, checkProduced, countItems, courseWordId, eligibleItems, interleave, newWords, wordCardFor,
  type Done, type ReviewItem, type Schedule,
} from "./review-items";
import { GRADUATED_DUE, GRADUATED_STAGE } from "./srs";

const none: Done = { read: new Set(), listen: new Set(), grammar: new Set(), speak: new Set() };
const now = new Date("2026-11-12T15:00:00");

describe("what comes back in review", () => {
  const sched = (stage = 0): Schedule => ({ stage, dueAt: "2026-11-12T08:00:00", introducedAt: "2026-11-12T08:00:00" });

  it("is empty before you've done anything", () => {
    expect(eligibleItems(dutch, none, {})).toEqual([]);
  });

  it("doesn't add words just because you read a text", () => {
    const items = eligibleItems(dutch, { ...none, read: new Set(["nieuw-in-leiden"]) }, {});
    expect(items.filter((i) => i.kind === "word")).toEqual([]);
  });

  it("brings back course words you didn't know in New words, with their sentence", () => {
    const items = eligibleItems(dutch, none, { schedules: new Map([[courseWordId("wonen"), sched()]]) });
    const w = items.find((i) => i.id === "w:wonen");
    expect(w?.kind).toBe("word");
    expect(w && w.kind === "word" ? w.sentence : "").toMatch(/woon/i);
  });

  it("keeps saved words, and doesn't duplicate one you also met in New words", () => {
    const items = eligibleItems(dutch, none, {
      schedules: new Map([[courseWordId("wonen"), sched()]]),
      savedWords: [{ word: "woon", surface: "woon", base: "wonen", meaning: "live", sentence: "x" }],
    });
    expect(items.map((i) => i.id)).toEqual(["saved:woon"]);
  });

  it("adds grammar exercises, listening lines and speaking items when those are done", () => {
    const items = eligibleItems(dutch, {
      read: new Set(), listen: new Set(["op-het-perron"]), grammar: new Set(["verb-second"]), speak: new Set(["a1-eten"]),
    }, {});
    expect(items.filter((i) => i.kind === "grammar").length).toBe(
      dutch.grammar.find((g) => g.id === "verb-second")!.lesson!.exercises.length,
    );
    expect(items.filter((i) => i.kind === "listen").length).toBeGreaterThan(0);
    expect(items.some((i) => i.kind === "speak" && i.contrast === "hoes")).toBe(true);
  });
});

describe("New words", () => {
  it("offers every drillable A1 core word, most common first, without tiny words", () => {
    const list = newWords(dutch, ["A1"], new Map());
    expect(list.length).toBeGreaterThan(350);
    expect(list.some((w) => w.lemma === "de")).toBe(false);
    const freq = dutch.wordFrequency!;
    for (let i = 1; i < list.length; i++) {
      expect(freq[list[i - 1].lemma] ?? 0).toBeGreaterThanOrEqual(freq[list[i].lemma] ?? 0);
    }
    expect(list.findIndex((w) => w.lemma === "huis")).toBeLessThan(list.findIndex((w) => w.lemma === "gracht"));
  });

  it("leaves out words you've met (known, learning or graduated) and words you saved", () => {
    const met = new Map([[courseWordId("huis"), { stage: GRADUATED_STAGE, dueAt: GRADUATED_DUE, introducedAt: "x" }]]);
    const list = newWords(dutch, ["A1"], met, new Set(["komen"]));
    expect(list.some((w) => w.lemma === "huis" || w.lemma === "komen")).toBe(false);
  });

  it("gives every core word in the frequency table", () => {
    const missing = (dutch.coreVocabulary.A1 ?? []).filter((w) => dutch.wordFrequency![w] === undefined);
    expect(missing).toEqual([]);
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
    expect(wordCardFor(0, "w:x", { recall: true, listen: true })).toBe("context");
  });
  it("only uses directions that are switched on", () => {
    for (let st = 2; st < 4; st++) expect(wordCardFor(st, "w:y", { recall: false, listen: false })).toBe("word");
    for (let st = 4; st < 7; st++) expect(wordCardFor(st, "w:y", { recall: false, listen: false })).toBe("produce");
    expect(wordCardFor(0, "w:y", { direction: "en-nl", recall: false, listen: false })).toBe("produce");
    for (let st = 0; st < 7; st++) expect(wordCardFor(st, "w:y", { direction: "nl-en", recall: false, listen: false })).not.toBe("produce");
  });
});

describe("graduated words", () => {
  it("never come back in a session", () => {
    const items = [{ kind: "word", id: "w:huis" }] as ReviewItem[];
    const schedules = new Map([["w:huis", { stage: GRADUATED_STAGE, dueAt: GRADUATED_DUE, introducedAt: "2026-11-01T10:00:00" }]]);
    expect(buildSession(items, schedules, { kinds: new Set(["word"]), size: 10, newPerDay: 10, now })).toEqual([]);
  });
});

describe("typed answers", () => {
  it("wants nouns with their article", () => {
    expect(checkProduced("de keuken", "keuken", "de").verdict).toBe("right");
    expect(checkProduced("keuken", "keuken", "de").verdict).toBe("almost");
    expect(checkProduced("het keuken", "keuken", "de").verdict).toBe("almost");
    expect(checkProduced("tellen", "tellen", null).verdict).toBe("right");
    expect(checkProduced("telen", "tellen", null).verdict).toBe("almost");
    expect(checkProduced("drinken", "tellen", null).verdict).toBe("wrong");
    expect(checkProduced("", "tellen", null).verdict).toBe("wrong");
  });
});
