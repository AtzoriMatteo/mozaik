import type { LanguagePack } from "./language-pack";
import { withArticle } from "./dictionary";

/**
 * Recorded audio for course sentences. Every sentence the course reads aloud
 * (reading texts and listening lines) can have an MP3, made once by
 * scripts/generate-audio.ts with a natural voice. A manifest maps each
 * sentence (by hash) to its file; anything without a file falls back to the
 * device's own voice.
 */

/** FNV-1a, 32-bit, base 36: short, stable ids for sentences and files. */
export function hash(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

/** The key a sentence or word is looked up by: its text, lower-cased, with spacing tidied. */
export const textKey = (text: string) => hash(text.trim().replace(/\s+/g, " ").toLowerCase());

/** Before recordings were keyed in lower case: kept so older manifests keep working. */
export const legacyTextKey = (text: string) => hash(text.trim().replace(/\s+/g, " "));

export type AudioManifest = {
  version: 1;
  /** textKey → file id (the MP3 is /audio/<lang>/<id>.mp3). */
  clips: Record<string, string>;
};

/** One sentence to record, and who says it. */
export type ClipSpec = {
  text: string;
  /** The voice role: "narrator", a character's name, or "itemId/Role" for generic roles. */
  role: string;
  gender: "f" | "m" | "any";
  /** The listening item (or reading text) it belongs to: people in one dialogue get different voices. */
  group: string;
};

/**
 * Every sentence to record, listening first (so a line keeps its character's
 * voice even if the same sentence also appears in a text), then reading texts
 * in the narrator's voice. One spec per distinct sentence.
 */
export function clipSpecs(pack: LanguagePack): ClipSpec[] {
  const cast = pack.cast;
  const out: ClipSpec[] = [];
  const seen = new Set<string>();
  const add = (spec: ClipSpec) => {
    const k = textKey(spec.text);
    if (seen.has(k)) return;
    seen.add(k);
    out.push(spec);
  };
  for (const unit of pack.units) {
    for (const item of unit.listening) {
      for (const l of item.lines) {
        const speaker = l.speaker ?? "Spreker";
        const generic = !cast || cast.generic.includes(speaker) || !(speaker in cast.gender);
        const role = generic ? `${item.id}/${speaker}` : speaker;
        const gender = cast?.overrides?.[`${item.id}/${speaker}`] ?? cast?.gender[speaker] ?? "any";
        add({ text: l.text, role, gender, group: item.id });
      }
    }
  }
  for (const unit of pack.units) {
    for (const text of unit.texts) {
      for (const s of text.paragraphs.flat()) add({ text: s.text, role: "narrator", gender: cast?.narrator ?? "f", group: text.id });
    }
  }
  // Single words and short lines, in the narrator's voice: every word in the
  // texts (as written), dictionary forms with de/het for flashcards,
  // expressions, verbs and the Handbook tables.
  const word = (text: string) => add({ text, role: "narrator", gender: cast?.narrator ?? "f", group: "words" });
  for (const unit of pack.units) {
    const sentences = [...unit.texts.flatMap((t) => t.paragraphs.flat().map((s) => s.text)), ...unit.listening.flatMap((l) => l.lines.map((x) => x.text))];
    for (const sentence of sentences) for (const tok of pack.tokenize(sentence)) if (tok.kind === "word" && !/\d/.test(tok.text)) word(tok.normalized);
  }
  for (const [form, help] of Object.entries(pack.lexicon)) {
    if (/\d/.test(form)) continue;
    const lemma = (help.base ?? form).toLowerCase();
    const article = pack.nounArticle?.(lemma);
    word(article ? withArticle(article, lemma) : lemma);
  }
  for (const e of pack.expressions ?? []) word(e.phrase);
  for (const v of pack.commonVerbs?.() ?? []) word(v);
  const handbook = pack.handbook;
  if (handbook) {
    for (const t of [...handbook.topics, ...handbook.phrases, ...handbook.spelling]) {
      for (const e of t.entries) {
        const line = e.nl.replace(/\s*\/.*$/, "").replace(/\.\.\./g, "").trim();
        if (line && !/^[\d.:\s°e]+$/.test(line)) word(line);
      }
    }
  }
  return out;
}

/** Role → voice name. */
export type VoiceCast = Record<string, string>;

/**
 * Gives each role a voice. Earlier choices (cast.json) are kept. New roles get
 * the least-used voice of their gender that nobody else in the same dialogue
 * has, so two people talking never sound the same.
 */
export function assignVoices(specs: ClipSpec[], voices: { name: string; gender: "f" | "m" }[], previous: VoiceCast): VoiceCast {
  const byGender = {
    f: voices.filter((v) => v.gender === "f").map((v) => v.name),
    m: voices.filter((v) => v.gender === "m").map((v) => v.name),
  };
  const valid = new Set(voices.map((v) => v.name));
  const cast: VoiceCast = {};
  for (const [role, name] of Object.entries(previous)) if (valid.has(name)) cast[role] = name;
  const used = new Map<string, number>();
  for (const name of Object.values(cast)) used.set(name, (used.get(name) ?? 0) + 1);

  // The narrator first, so characters can avoid that voice where possible.
  const narrator = specs.find((s) => s.role === "narrator");
  if (narrator && !cast.narrator) cast.narrator = byGender[narrator.gender === "m" ? "m" : "f"][0];

  // Everyone who speaks in one dialogue, in course order.
  const groups = new Map<string, ClipSpec[]>();
  for (const s of specs) if (s.role !== "narrator") groups.set(s.group, [...(groups.get(s.group) ?? []), s]);

  for (const group of groups.values()) {
    const inDialogue = new Set(group.map((s) => cast[s.role]).filter(Boolean));
    const roles = [...new Map(group.map((s) => [s.role, s])).values()];
    for (const s of roles) {
      if (cast[s.role]) continue;
      let gender: "f" | "m" = s.gender === "any" ? "f" : s.gender;
      if (s.gender === "any") {
        // Balance the dialogue: pick the gender that's less present in it.
        const f = [...inDialogue].filter((n) => byGender.f.includes(n)).length;
        const m = [...inDialogue].filter((n) => byGender.m.includes(n)).length;
        gender = f > m ? "m" : m > f ? "f" : hash(s.role).charCodeAt(0) % 2 ? "m" : "f";
      }
      const pool = byGender[gender].filter((n) => !inDialogue.has(n) && n !== cast.narrator);
      const choices = pool.length ? pool : byGender[gender];
      const pick = [...choices].sort((a, b) => (used.get(a) ?? 0) - (used.get(b) ?? 0) || a.localeCompare(b))[0];
      cast[s.role] = pick;
      used.set(pick, (used.get(pick) ?? 0) + 1);
      inDialogue.add(pick);
    }
  }
  return cast;
}

