import type { Unit } from "./content";
import type { LanguagePack } from "./language-pack";
import { unitWords } from "./unit-words";
import { hasMix, mixId } from "./mix";

export type ActivityKind = "words" | "read" | "listen" | "grammar" | "write" | "speak" | "check";

/** One thing to do in the course: read, listen, a grammar lesson, or speaking practice. */
export type Activity = {
  kind: ActivityKind;
  id: string;
  title: string;
  titleTranslation: string;
  unit: Unit;
  href: string;
};

/** Grammar points taught in a unit, in syllabus order. */
export function unitGrammar(pack: LanguagePack, unit: Unit) {
  return pack.grammar.filter((g) => g.unit === unit.id && g.lesson);
}

/**
 * All activities in course order. A unit with a `sequence` (a story unit)
 * follows it, so its texts, clips, lessons and writing come in the story's
 * order. Other units start with their words, then mix texts, grammar and
 * listening (never three of the same kind in a row), then writing.
 * A unit with a checkpoint ends with it.
 */
export function activities(pack: LanguagePack): Activity[] {
  return pack.units.flatMap((unit) => unitActivities(pack, unit));
}

function unitActivities(pack: LanguagePack, unit: Unit): Activity[] {
  const words: Activity[] = unitWords(pack, unit).length
    ? [{ kind: "words", id: unit.id, title: "Words", titleTranslation: unit.story ? "The unit's words, all together" : "Meet them before the texts", unit, href: `/words/${pack.code}/${unit.id}` }]
    : [];
  const read: Activity[] = unit.texts.map((t) => ({ kind: "read", id: t.id, title: t.title, titleTranslation: t.titleTranslation, unit, href: `/read/${pack.code}/${t.id}` }));
  const listen: Activity[] = unit.listening.map((l) => ({ kind: "listen", id: l.id, title: l.title, titleTranslation: l.titleTranslation, unit, href: `/listen/${pack.code}/${l.id}` }));
  const grammar: Activity[] = unitGrammar(pack, unit).map((g) => ({ kind: "grammar", id: g.id, title: g.title, titleTranslation: g.summary, unit, href: `/grammar/${pack.code}/${g.id}` }));
  const write: Activity[] = unit.writing?.length
    ? [{ kind: "write", id: unit.id, title: "Writing", titleTranslation: "Choose topics and write", unit, href: `/write/${pack.code}/${unit.id}` }]
    : [];
  const check: Activity[] = unit.checkpoint
    ? [{ kind: "check", id: unit.id, title: unit.checkpoint.title, titleTranslation: `Checkpoint: ${unit.checkpoint.titleTranslation}`, unit, href: `/check/${pack.code}/${unit.id}` }]
    : [];
  // The grammar mix: this unit's lessons and earlier ones, shuffled, just before the checkpoint.
  const mix: Activity[] = hasMix(pack, unit)
    ? [{ kind: "grammar", id: mixId(unit), title: "Grammar mix", titleTranslation: "This unit's grammar and earlier lessons, mixed", unit, href: `/grammar/${pack.code}/${mixId(unit)}` }]
    : [];
  // Speaking practice was taken out (Matteo, 17 Nov 2026); its data stays in the packs.

  if (unit.sequence) {
    const pool = [...words, ...read, ...listen, ...grammar, ...write, ...check];
    const key = (a: Activity) => (a.kind === "write" ? "write" : a.kind === "words" ? "words" : a.kind === "check" ? "check" : a.id);
    const ordered = unit.sequence.map((id) => pool.find((a) => key(a) === id)).filter((a): a is Activity => !!a);
    const rest = [...ordered, ...pool.filter((a) => !ordered.includes(a))];
    const at = rest.findIndex((a) => a.kind === "check");
    return at < 0 ? [...rest, ...mix] : [...rest.slice(0, at), ...mix, ...rest.slice(at)];
  }
  const mixed: Activity[] = [];
  const lanes = [read, grammar, listen].map((l) => [...l]);
  while (lanes.some((l) => l.length)) for (const lane of lanes) if (lane.length) mixed.push(lane.shift()!);
  return [...words, ...mixed, ...write, ...mix, ...check];
}

export const VERB: Record<ActivityKind, string> = {
  words: "",
  read: "read",
  listen: "listen to",
  grammar: "learn",
  write: "",
  speak: "",
  check: "",
};

/** "read Nieuw in Leiden", "learn Verb second", "speaking practice". */
export function activityLabel(a: Pick<Activity, "kind" | "title">): { verb: string; title: string; inTargetLanguage: boolean } {
  if (a.kind === "speak") return { verb: "", title: "speaking practice", inTargetLanguage: false };
  if (a.kind === "write") return { verb: "", title: "writing", inTargetLanguage: false };
  if (a.kind === "words") return { verb: "", title: "the unit's words", inTargetLanguage: false };
  if (a.kind === "check") return { verb: "", title: `the checkpoint: ${a.title}`, inTargetLanguage: false };
  return { verb: VERB[a.kind], title: a.title, inTargetLanguage: a.kind !== "grammar" };
}

export function unitHref(pack: LanguagePack, unit: Unit): string {
  return `/course/${pack.code}/${unit.id}`;
}

/** The activity right after the given one in course order, if any. */
export function nextActivity(
  pack: LanguagePack,
  current: Pick<Activity, "kind" | "id">,
): Activity | null {
  const all = activities(pack);
  const i = all.findIndex((a) => a.kind === current.kind && a.id === current.id);
  return i >= 0 ? (all[i + 1] ?? null) : null;
}
