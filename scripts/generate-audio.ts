/**
 * Records the course audio once with Google Cloud Text-to-Speech, so texts and
 * dialogues play with natural voices instead of the device's robot voice.
 *
 *   GOOGLE_TTS_KEY=... npx tsx scripts/generate-audio.ts [lang] [--dry-run]
 *
 * Runs in the "Record course audio" GitHub Action (the key is a repository
 * secret). Only sentences without a recording are sent, so re-running after
 * adding content costs only the new sentences. Writes:
 *   public/audio/<lang>/<id>.mp3   one file per sentence
 *   public/audio/<lang>/manifest.json   sentence → file
 *   public/audio/<lang>/cast.json   role → voice (kept stable between runs)
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { assignVoices, clipSpecs, hash, textKey, type AudioManifest, type ClipSpec, type VoiceCast } from "../src/core/audio";
import { getPack } from "../src/core/registry";

const LOCALE: Record<string, string> = { nl: "nl-NL", it: "it-IT" };
const API = "https://texttospeech.googleapis.com/v1";

type Voice = { name: string; ssmlGender: "FEMALE" | "MALE" | "NEUTRAL" };

const args = process.argv.slice(2);
const lang = args.find((a) => !a.startsWith("--")) ?? "nl";
const dryRun = args.includes("--dry-run");
const key = process.env.GOOGLE_TTS_KEY;

/** Best voices first: Chirp 3 HD sounds the most human, then Chirp HD, Neural2, WaveNet. */
const TIERS = ["Chirp3-HD", "Chirp-HD", "Neural2", "Wavenet", "Standard"];
const tier = (v: Voice) => {
  const i = TIERS.findIndex((t) => v.name.includes(t));
  return i < 0 ? TIERS.length : i;
};

async function listVoices(locale: string): Promise<Voice[]> {
  const res = await fetch(`${API}/voices?languageCode=${locale}&key=${key}`);
  if (!res.ok) throw new Error(`Listing voices failed: ${res.status} ${await res.text()}`);
  const { voices } = (await res.json()) as { voices: (Voice & { languageCodes: string[] })[] };
  const usable = voices.filter((v) => v.languageCodes.includes(locale) && v.ssmlGender !== "NEUTRAL");
  // Keep the best tier that has both a female and a male voice.
  for (let t = 0; t < TIERS.length; t++) {
    const pool = usable.filter((v) => tier(v) === t);
    if (pool.some((v) => v.ssmlGender === "FEMALE") && pool.some((v) => v.ssmlGender === "MALE")) {
      return pool.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
  throw new Error(`No usable ${locale} voices`);
}

async function synthesize(locale: string, voice: string, text: string): Promise<Buffer> {
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(`${API}/text:synthesize?key=${key}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ input: { text }, voice: { languageCode: locale, name: voice }, audioConfig: { audioEncoding: "MP3" } }),
    });
    if (res.ok) return Buffer.from(((await res.json()) as { audioContent: string }).audioContent, "base64");
    if ((res.status === 429 || res.status >= 500) && attempt < 6) {
      await new Promise((r) => setTimeout(r, 2000 * 2 ** attempt));
      continue;
    }
    throw new Error(`Synthesis failed (${res.status}) for "${text.slice(0, 40)}": ${await res.text()}`);
  }
}

async function main() {
  const pack = getPack(lang);
  if (!pack) throw new Error(`No pack "${lang}"`);
  const locale = LOCALE[lang];
  if (!locale) throw new Error(`No locale for "${lang}"`);
  const specs = clipSpecs(pack);
  const chars = specs.reduce((n, s) => n + s.text.length, 0);
  console.log(`${specs.length} sentences, ${chars} characters, ${new Set(specs.map((s) => s.role)).size} roles.`);
  if (dryRun) return;
  if (!key) throw new Error("Set GOOGLE_TTS_KEY");

  const dir = join("public", "audio", lang);
  mkdirSync(dir, { recursive: true });
  const castPath = join(dir, "cast.json");
  const previous: VoiceCast = existsSync(castPath) ? JSON.parse(readFileSync(castPath, "utf8")) : {};
  const voices = await listVoices(locale);
  console.log(`Voices: ${voices.map((v) => `${v.name} (${v.ssmlGender[0]})`).join(", ")}`);
  const cast = assignVoices(specs, voices.map((v) => ({ name: v.name, gender: v.ssmlGender === "MALE" ? "m" : "f" })), previous);

  const manifest: AudioManifest = { version: 1, clips: {} };
  const todo: { spec: ClipSpec; voice: string; file: string }[] = [];
  for (const spec of specs) {
    const voice = cast[spec.role];
    const id = hash(`${voice}|${spec.text}`);
    manifest.clips[textKey(spec.text)] = id;
    const file = join(dir, `${id}.mp3`);
    if (!existsSync(file)) todo.push({ spec, voice, file });
  }
  const newChars = todo.reduce((n, t) => n + t.spec.text.length, 0);
  console.log(`To record: ${todo.length} sentences, ${newChars} characters.`);

  let done = 0;
  const worker = async () => {
    for (let t = todo.shift(); t; t = todo.shift()) {
      writeFileSync(t.file, await synthesize(locale, t.voice, t.spec.text));
      if (++done % 100 === 0) console.log(`  ${done} recorded`);
    }
  };
  await Promise.all(Array.from({ length: 4 }, worker));

  // Remove recordings nothing points to any more (changed or deleted sentences).
  const keep = new Set(Object.values(manifest.clips).map((id) => `${id}.mp3`));
  for (const f of readdirSync(dir)) if (f.endsWith(".mp3") && !keep.has(f)) unlinkSync(join(dir, f));

  writeFileSync(join(dir, "manifest.json"), JSON.stringify(manifest));
  writeFileSync(castPath, JSON.stringify(Object.fromEntries(Object.entries(cast).sort()), null, 1) + "\n");
  console.log(`Done: ${done} new recordings.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
