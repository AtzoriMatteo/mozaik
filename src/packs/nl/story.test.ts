import { describe, expect, it } from "vitest";
import { dutch } from ".";
import { helpFor } from "@/core/content";
import { allEpisodes, sessionSteps, storyUnits, wordsThatComeBack } from "@/core/story";
import { clipSpecs } from "@/core/audio";
import { allTexts } from "@/core/language-pack";

const episodes = allEpisodes(dutch);

describe("story episodes (trial shape)", () => {
  it("has a story in A1 unit 4 with four episodes", () => {
    const unit = storyUnits(dutch).find((u) => u.id === "a1-eten");
    expect(unit?.story.episodes.length).toBe(4);
  });

  it("uses ids no reading text uses", () => {
    const texts = new Set(allTexts(dutch).map((t) => t.id));
    for (const e of episodes) expect(texts.has(e.id), e.id).toBe(false);
    expect(new Set(episodes.map((e) => e.id)).size).toBe(episodes.length);
  });

  it("has help for every word", () => {
    const missing: string[] = [];
    for (const e of episodes)
      for (const s of e.paragraphs.flat())
        for (const t of dutch.tokenize(s.text))
          if (t.kind === "word" && !helpFor(dutch.lexicon, e, t.normalized) && !dutch.isNumberWord?.(t.normalized)) missing.push(`${e.id}: ${t.normalized}`);
    expect(missing).toEqual([]);
  });

  it("is longer than a unit text and easy: about 200–350 words an episode", () => {
    for (const e of episodes) {
      const n = e.paragraphs.flat().reduce((k, s) => k + dutch.tokenize(s.text).filter((t) => t.kind === "word").length, 0);
      expect(n, e.id).toBeGreaterThanOrEqual(200);
      expect(n, e.id).toBeLessThanOrEqual(350);
    }
  });

  it("notices a pattern quoted from the episode itself, linked to a real lesson", () => {
    for (const e of episodes) {
      const own = e.paragraphs.flat().map((s) => s.text).join(" ");
      for (const x of e.notice.examples) expect(own.includes(x), `${e.id}: ${x}`).toBe(true);
      expect(dutch.grammar.some((g) => g.id === e.notice.grammar), e.notice.grammar).toBe(true);
      expect(e.notice.exercises.length).toBeGreaterThanOrEqual(2);
      for (const ex of e.notice.exercises) {
        if (ex.kind === "fill") expect(ex.answers.length, e.id).toBeGreaterThan(0);
        if (ex.kind === "choice") expect(ex.answer, e.id).toBeLessThan(ex.options.length);
      }
    }
  });


  it("is recorded like the texts", () => {
    const specs = new Set(clipSpecs(dutch).map((s) => s.text));
    for (const e of episodes) for (const s of e.paragraphs.flat()) expect(specs.has(s.text), s.text).toBe(true);
  });

  it("offers each recurring word once, in the episode where it first appears", () => {
    const unit = storyUnits(dutch)[0];
    const offered = unit.story.episodes.flatMap((e) => wordsThatComeBack(dutch, unit, e).map((w) => w.lemma));
    expect(new Set(offered).size).toBe(offered.length);
    expect(offered).toContain("knoflook");
    for (const tiny of ["de", "geen", "zeggen", "tiramisu"]) expect(offered).not.toContain(tiny);
  });

  it("fits the session length: review and the episode always, more when there's time", () => {
    expect(sessionSteps(5).steps).toEqual(["review", "episode"]);
    expect(sessionSteps(15).steps).toContain("replay");
    expect(sessionSteps(null).steps).toContain("more");
  });
});

describe("gap exercises read as sentences", () => {
  it("has a space on each side of every gap (Matteo: words ran together)", () => {
    const all = [...dutch.grammar.flatMap((g) => g.lesson?.exercises ?? []), ...allEpisodes(dutch).flatMap((e) => e.notice.exercises)];
    const bad = all
      .filter((ex) => ex.kind === "fill" || ex.kind === "choice")
      .filter((ex) => (ex.before !== "" && !/[\s(]$/.test(ex.before)) || (ex.after !== "" && !/^[\s.,!?:;)…]/.test(ex.after)))
      .map((ex) => `${ex.before}___${ex.after}`);
    expect(bad).toEqual([]);
  });
});
