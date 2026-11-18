/**
 * Copies the course recordings (public/audio/<lang>/) to the public "audio"
 * bucket in Supabase Storage, so the website doesn't have to carry ~80 MB of
 * MP3s in every Vercel deployment. Only files the bucket doesn't have yet are
 * sent; the manifest is always replaced. File names are content hashes, so a
 * file never changes once it's there.
 *
 * Env: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (GitHub repository secrets).
 * Usage: npx tsx scripts/upload-audio.ts nl it
 */
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const url = process.env.SUPABASE_URL?.replace(/\/$/, "");
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.log("No SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY: skipping the upload.");
  process.exit(0);
}
const BUCKET = "audio";
const auth = { Authorization: `Bearer ${key}`, apikey: key };

async function ensureBucket() {
  const r = await fetch(`${url}/storage/v1/bucket`, {
    method: "POST",
    headers: { ...auth, "Content-Type": "application/json" },
    body: JSON.stringify({ id: BUCKET, name: BUCKET, public: true, allowed_mime_types: ["audio/mpeg", "application/json"] }),
  });
  if (!r.ok && r.status !== 409 && !(await r.text()).includes("already exists")) throw new Error(`Creating the bucket failed: ${r.status}`);
}

async function existing(lang: string): Promise<Set<string>> {
  const names = new Set<string>();
  for (let offset = 0; ; offset += 1000) {
    const r = await fetch(`${url}/storage/v1/object/list/${BUCKET}`, {
      method: "POST",
      headers: { ...auth, "Content-Type": "application/json" },
      body: JSON.stringify({ prefix: `${lang}/`, limit: 1000, offset, sortBy: { column: "name", order: "asc" } }),
    });
    if (!r.ok) throw new Error(`Listing ${lang} failed: ${r.status} ${await r.text()}`);
    const page = (await r.json()) as { name: string }[];
    page.forEach((o) => names.add(o.name));
    if (page.length < 1000) return names;
  }
}

async function put(path: string, body: Buffer, type: string, cache: string, upsert: boolean) {
  for (let attempt = 1; ; attempt++) {
    const r = await fetch(`${url}/storage/v1/object/${BUCKET}/${path}`, {
      method: "POST",
      headers: { ...auth, "Content-Type": type, "Cache-Control": cache, "x-upsert": String(upsert) },
      body: new Uint8Array(body),
    });
    if (r.ok || (!upsert && r.status === 409)) return;
    if (attempt >= 3) throw new Error(`Uploading ${path} failed: ${r.status} ${await r.text()}`);
    await new Promise((res) => setTimeout(res, 1000 * attempt));
  }
}

async function main() {
  await ensureBucket();
  for (const lang of process.argv.slice(2)) {
    const dir = join("public", "audio", lang);
    const have = await existing(lang);
    const todo = readdirSync(dir).filter((f) => f.endsWith(".mp3") && !have.has(f));
    console.log(`${lang}: ${todo.length} new recordings to upload (${have.size} already there).`);
    for (let i = 0; i < todo.length; i += 8) {
      await Promise.all(todo.slice(i, i + 8).map((f) => put(`${lang}/${f}`, readFileSync(join(dir, f)), "audio/mpeg", "public, max-age=31536000, immutable", false)));
      if (i % 400 === 0) console.log(`  ${Math.min(i + 8, todo.length)}/${todo.length}`);
    }
    await put(`${lang}/manifest.json`, readFileSync(join(dir, "manifest.json")), "application/json", "max-age=300", true);
  }
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
