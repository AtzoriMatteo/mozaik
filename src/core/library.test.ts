import { describe, expect, it } from "vitest";
import { listPacks } from "./registry";
import { LIBRARY_LEVELS, libraryPrompts, parsePrompts } from "./library";
import { countWords, coveredPoints, LONG_ENOUGH, lengthsFor } from "./writing";

describe("parsePrompts", () => {
  it("reads topic, header, situation and points", () => {
    const [p] = parsePrompts("# Home\nA2 email | Een kamer | A room\nWrite to the landlord.\n- Say who you are\n- Ask the rent");
    expect(p).toMatchObject({ id: "lib-a2-een-kamer", level: "A2", form: "email", topic: "Home", situation: "Write to the landlord." });
    expect(p.points.map((x) => x.prompt)).toEqual(["Say who you are", "Ask the rent"]);
  });
  it("refuses a header it can't read", () => {
    expect(() => parsePrompts("A7 email | x | y\nz\n- a")).toThrow();
  });
});

describe.each(listPacks().map((p) => [p.code, p] as const))("%s Library prompts", (_code, pack) => {
  const all = libraryPrompts(pack);
  it("has plenty at every level", () => {
    for (const level of LIBRARY_LEVELS) expect(libraryPrompts(pack, level).length, level).toBeGreaterThanOrEqual(10);
  });
  it("has unique ids, none shared with unit writing", () => {
    const unitIds = new Set(pack.units.flatMap((u) => (u.writing ?? []).map((t) => t.id)));
    const ids = all.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.filter((id) => unitIds.has(id))).toEqual([]);
  });
  it("gives every prompt a topic, a situation and 4–6 points", () => {
    for (const p of all) {
      expect(p.topic, p.id).toBeTruthy();
      expect(p.situation.length, p.id).toBeGreaterThan(10);
      expect(p.points.length, p.id).toBeGreaterThanOrEqual(4);
      expect(p.points.length, p.id).toBeLessThanOrEqual(6);
    }
  });
});

describe.each(listPacks().map((p) => [p.code, p] as const))("%s Library: texts and Out there", (_code, pack) => {
  it("lists each outside source once, with something at every level", () => {
    const list = pack.library?.outThere ?? [];
    const urls = list.flatMap((r) => ("url" in r ? [r.url] : []));
    expect(new Set(urls).size).toBe(urls.length);
    for (const level of LIBRARY_LEVELS) expect(list.filter((r) => r.level === level).length, level).toBeGreaterThanOrEqual(2);
  });
  it("keeps Library texts few and long", () => {
    const min: Record<string, number> = { A1: 150, A2: 270, B1: 280, B2: 600, C1: 750, C2: 900 };
    for (const t of pack.library?.texts ?? []) {
      const words = t.paragraphs.flat().reduce((n, s) => n + pack.tokenize(s.text).filter((x) => x.kind === "word").length, 0);
      expect(words, t.id).toBeGreaterThanOrEqual(min[t.level]);
    }
    for (const level of LIBRARY_LEVELS) expect((pack.library?.texts ?? []).filter((t) => t.level === level).length, level).toBeLessThanOrEqual(4);
  });
});

describe.each(listPacks().map((p) => [p.code, p] as const))("%s Library prompts with model answers", (_code, pack) => {
  const withModel = libraryPrompts(pack).filter((p) => p.model);
  it.each(withModel.map((p) => [p.id, p] as const))("%s: frames and cues on every point; the model is long enough, covers every point and passes the checker", (_id, p) => {
    expect(p.points.length, p.id).toBe(6);
    for (const pt of p.points) {
      expect(pt.frame, `${p.id}: ${pt.prompt}`).toBeTruthy();
      expect(pt.cues?.length, `${p.id}: ${pt.prompt}`).toBeGreaterThan(0);
    }
    expect(countWords(p.model), p.id).toBeGreaterThanOrEqual(lengthsFor(pack, p)[2] * LONG_ENOUGH);
    const covered = coveredPoints(pack, p.model, p.points);
    expect(p.points.filter((_, i) => !covered[i]).map((pt) => pt.prompt), p.id).toEqual([]);
    const issues = (pack.checkWriting?.(p.model) ?? []).map((i) => `${p.model.slice(i.start, i.end)}: ${i.message}`);
    expect(issues, p.id).toEqual([]);
  });
  it("has the A1 prompts written out in full, with lots of variety", () => {
    const a1 = libraryPrompts(pack, "A1");
    expect(a1.length).toBeGreaterThanOrEqual(20);
    expect(a1.every((p) => p.model)).toBe(true);
    expect(new Set(a1.map((p) => p.form)).size).toBeGreaterThanOrEqual(5);
  });
});
