import { describe, expect, it } from "vitest";
import { flagsForClaude, type Flag } from "./flags";

const flag = (over: Partial<Flag>): Flag => ({
  id: Math.random().toString(),
  language: "nl",
  item_kind: "text",
  item_id: "op-de-markt",
  sentence: "Ik heb zin in koffie.",
  note: null,
  status: "open",
  created_at: "2026-11-13T20:00:00Z",
  ...over,
});

describe("flagsForClaude", () => {
  it("groups the same sentence and keeps every note", () => {
    const text = flagsForClaude([flag({ note: "sounds stiff" }), flag({ note: "Dutch friend says no" }), flag({ status: "fixed", sentence: "Old" })]);
    expect(text).toContain("1 sentence flagged");
    expect(text).toContain("(flagged 2×)");
    expect(text).toContain('"sounds stiff"; "Dutch friend says no"');
    expect(text).not.toContain("Old");
  });
});
