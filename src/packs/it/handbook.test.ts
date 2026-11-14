import { describe, expect, it } from "vitest";
import { italian as dutch } from ".";

describe("Italian handbook", () => {
  const all = [...dutch.handbook!.topics, ...dutch.handbook!.phrases, ...dutch.handbook!.spelling];
  it("has unique ids and no empty rows", () => {
    expect(new Set(all.map((t) => t.id)).size).toBe(all.length);
    for (const t of all) {
      expect(t.entries.length, t.id).toBeGreaterThan(3);
      for (const e of t.entries) expect(e.nl && e.en, `${t.id}: ${e.nl}`).toBeTruthy();
    }
  });
});
