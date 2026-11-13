import { beforeEach, describe, expect, it, vi } from "vitest";

let currentUser = "matteo";
// A fake account: the rows the `progress` table would hold.
let table: { language: string; kind: string; item_id: string; done: boolean }[] = [];
const upsert = vi.fn(async (rows: unknown) => {
  for (const r of ([] as typeof table).concat(rows as typeof table)) {
    table = table.filter((t) => !(t.language === r.language && t.kind === r.kind && t.item_id === r.item_id));
    table.push({ language: r.language, kind: r.kind, item_id: r.item_id, done: r.done });
  }
  return { error: null };
});
const fake = {
  auth: { getSession: async () => ({ data: { session: { user: { id: currentUser } } } }) },
  from: () => ({ select: async () => ({ data: table, error: null }), upsert }),
};
vi.mock("@/lib/supabase/browser", () => ({ getBrowserSupabase: () => fake }));

function device() {
  const store = new Map<string, string>();
  const ls = {
    get length() { return store.size; },
    key: (i: number) => [...store.keys()][i] ?? null,
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => void store.set(k, v),
    removeItem: (k: string) => void store.delete(k),
  };
  return { store, ls };
}

async function use(d: ReturnType<typeof device>) {
  vi.stubGlobal("window", { localStorage: d.ls, addEventListener() {}, removeEventListener() {} });
  return import("./sync");
}

describe("syncProgress", () => {
  beforeEach(() => {
    currentUser = "matteo";
    table = [];
    upsert.mockClear();
  });

  it("gives phone and laptop the same, combined progress", async () => {
    const phone = device();
    phone.store.set("mozaik:read:nl", JSON.stringify(["t1", "t2"]));
    const laptop = device();
    laptop.store.set("mozaik:read:nl", JSON.stringify(["t3"]));
    laptop.store.set("mozaik:writing:nl", JSON.stringify(["w1"]));

    await (await use(phone)).syncProgress();
    await (await use(laptop)).syncProgress();
    await (await use(phone)).syncProgress();

    const read = (d: ReturnType<typeof device>) => JSON.parse(d.store.get("mozaik:read:nl")!).sort();
    expect(read(phone)).toEqual(["t1", "t2", "t3"]);
    expect(read(laptop)).toEqual(["t1", "t2", "t3"]);
    expect(JSON.parse(phone.store.get("mozaik:writing:nl")!)).toEqual(["w1"]);
  });

  it("carries an 'undone' mark to the other device", async () => {
    const phone = device();
    phone.store.set("mozaik:beyond:nl", JSON.stringify(["r1"]));
    table = [{ language: "nl", kind: "beyond", item_id: "r1", done: false }];
    await (await use(phone)).syncProgress();
    expect(JSON.parse(phone.store.get("mozaik:beyond:nl")!)).toEqual([]);
  });

  it("leaves unrelated storage alone", async () => {
    const phone = device();
    phone.store.set("mozaik:writing-draft:nl:x", "Ik heet Matteo");
    await (await use(phone)).syncProgress();
    expect(phone.store.get("mozaik:writing-draft:nl:x")).toBe("Ik heet Matteo");
    expect(upsert).not.toHaveBeenCalled();
  });

  it("never puts one person's progress into another's account on a shared browser", async () => {
    const laptop = device();
    laptop.store.set("mozaik:read:nl", JSON.stringify(["t1", "t2"]));
    await (await use(laptop)).syncProgress();
    expect(table.map((r) => r.item_id).sort()).toEqual(["t1", "t2"]);

    // A friend logs in on the same laptop. Their account starts empty.
    currentUser = "friend";
    table = [];
    await (await use(laptop)).syncProgress();
    expect(table).toEqual([]);
    expect(JSON.parse(laptop.store.get("mozaik:read:nl") ?? "[]")).toEqual([]);
  });
});
