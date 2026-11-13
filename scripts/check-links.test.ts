import { describe, expect, it } from "vitest";
import { listPacks } from "@/core/registry";

/**
 * Checks that every "Beyond the course" link still answers. Run with
 * `npm run check-links` (needs the internet, so it's not part of npm test).
 */
const links = listPacks().flatMap((p) => (p.resources ?? []).map((r) => [`${p.code}/${r.id}`, r.url] as const));

describe("Beyond the course links", () => {
  it.each(links)("%s answers", async (_id, url) => {
    const res = await fetch(url, { method: "GET", redirect: "follow", headers: { "user-agent": "Mozaik link check" } });
    expect(res.status, url).toBeLessThan(400);
  }, 20_000);
});
