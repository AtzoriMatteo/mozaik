import { describe, expect, it } from "vitest";
import { listPacks } from "@/core/registry";

/**
 * Checks that every "Beyond the course" link still answers. Run with
 * `npm run check-links` (needs the internet, so it's not part of npm test).
 */
const links = [
  ...new Map(
    listPacks().flatMap((p) => [...(p.resources ?? []), ...(p.library?.outThere ?? [])].map((r) => [r.url, `${p.code}/${r.id}`] as const)),
  ),
].map(([url, id]) => [id, url] as const);

describe("Library outside links", () => {
  it.each(links)("%s answers", async (_id, url) => {
    let res: Response;
    try {
      res = await fetch(url, { method: "GET", redirect: "follow", headers: { "user-agent": "Mozaik link check" } });
    } catch (e) {
      // The site answered with more headers than Node accepts (cookie walls): it's up.
      if ((e as { cause?: { code?: string } }).cause?.code === "UND_ERR_HEADERS_OVERFLOW") return;
      throw e;
    }
    // 403 and 429: some sites turn away scripts (they open fine in a browser).
    if (res.status === 403 || res.status === 429) return;
    expect(res.status, url).toBeLessThan(400);
  }, 20_000);
});
