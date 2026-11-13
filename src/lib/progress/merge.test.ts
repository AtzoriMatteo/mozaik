import { describe, expect, it } from "vitest";
import { mergeProgress, slot, type LocalProgress } from "./merge";

const local = (entries: [string, string, string[]][]): LocalProgress =>
  new Map(entries.map(([l, k, ids]) => [slot(l, k), new Set(ids)]));

describe("mergeProgress", () => {
  it("joins two devices on the first sync", () => {
    const phone = local([["nl", "read", ["a", "b"]]]);
    const fromLaptop = [{ language: "nl", kind: "read", item_id: "c", done: true }];
    const { next, upload } = mergeProgress(phone, fromLaptop);
    expect([...next.get(slot("nl", "read"))!].sort()).toEqual(["a", "b", "c"]);
    expect(upload.map((r) => r.item_id).sort()).toEqual(["a", "b"]);
  });

  it("lets the account's 'not done' win over a stale local mark", () => {
    const { next, upload } = mergeProgress(local([["nl", "beyond", ["x"]]]), [
      { language: "nl", kind: "beyond", item_id: "x", done: false },
    ]);
    expect(next.get(slot("nl", "beyond"))!.has("x")).toBe(false);
    expect(upload).toEqual([]);
  });

  it("adds kinds this device has never seen", () => {
    const { next } = mergeProgress(new Map(), [{ language: "nl", kind: "writing", item_id: "w1", done: true }]);
    expect(next.get(slot("nl", "writing"))!.has("w1")).toBe(true);
  });

  it("uploads nothing when everything is already known", () => {
    const { upload } = mergeProgress(local([["nl", "listen", ["l1"]]]), [
      { language: "nl", kind: "listen", item_id: "l1", done: true },
    ]);
    expect(upload).toEqual([]);
  });
});
