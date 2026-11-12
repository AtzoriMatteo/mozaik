import { describe, expect, it } from "vitest";
import { analyzeAttempt, isPhantom, judgePair, soundBehind, type Sound } from "./pronunciation";

const s = (id: string, ...spellings: string[]): Sound => ({
  id, title: id, spellings, how: "", examples: [], pairs: [],
});
const sounds = [s("ui", "ui"), s("oe", "oe"), s("aa", "aa"), s("g", "g|ch")];

describe("finding the sound behind a mishearing", () => {
  it("spots ui heard as oe", () => {
    expect(soundBehind("huis", "hoes", sounds)?.id).toBe("ui");
  });
  it("spots a short a heard as a long aa", () => {
    expect(soundBehind("man", "maan", sounds)?.id).toBe("aa");
  });
  it("returns nothing when no known sound differs", () => {
    expect(soundBehind("tafel", "tafels", sounds)).toBeUndefined();
  });
});

describe("analysing a spoken sentence", () => {
  it("marks everything ok when it was understood", () => {
    const r = analyzeAttempt("Mijn naam is Luca.", "mijn naam is luca", sounds);
    expect(r.understood).toBe(1);
    expect(r.words.every((w) => w.status === "ok")).toBe(true);
  });

  it("pairs a missing word with what was heard instead, and finds the sound", () => {
    const r = analyzeAttempt("Mijn huis is klein.", "mijn hoes is klein", sounds);
    const w = r.words[1];
    expect(w).toMatchObject({ word: "huis", status: "misheard", heardAs: "hoes" });
    expect(r.focus?.id).toBe("ui");
    expect(r.understood).toBe(0.75);
  });

  it("doesn't blame a sound when the words aren't alike", () => {
    const r = analyzeAttempt("Hoeveel kosten deze tomaten?", "mag ik een stuk", sounds);
    expect(r.words.every((w) => w.status === "missed")).toBe(true);
    expect(r.focus).toBeUndefined();
  });

  it("marks words that weren't heard at all", () => {
    const r = analyzeAttempt("Ik ben ziek.", "ik ziek", sounds);
    expect(r.words.map((w) => w.status)).toEqual(["ok", "missed", "ok"]);
  });
});

describe("minimal pairs", () => {
  it("knows which of the pair was heard", () => {
    expect(judgePair("huis", "hoes", "Huis.")).toBe("right");
    expect(judgePair("huis", "hoes", "hoes")).toBe("other");
    expect(judgePair("huis", "hoes", "house")).toBe("unclear");
  });
});

describe("phantom transcripts", () => {
  it("ignores Whisper's stock phrases in silence", () => {
    expect(isPhantom("Ondertiteld door de Amara.org gemeenschap")).toBe(true);
    expect(isPhantom("  ")).toBe(true);
    expect(isPhantom("Mijn naam is Luca")).toBe(false);
  });
});
