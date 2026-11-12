import type { Unit } from "./content";
import type { LanguagePack } from "./language-pack";

export type ActivityKind = "read" | "listen" | "grammar";

/** One thing to do in the course: read a text, listen, or a grammar lesson. */
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

/** All activities in course order: per unit, texts, then listening, then grammar. */
export function activities(pack: LanguagePack): Activity[] {
  return pack.units.flatMap((unit) => [
    ...unit.texts.map((t) => ({
      kind: "read" as const,
      id: t.id,
      title: t.title,
      titleTranslation: t.titleTranslation,
      unit,
      href: `/read/${pack.code}/${t.id}`,
    })),
    ...unit.listening.map((l) => ({
      kind: "listen" as const,
      id: l.id,
      title: l.title,
      titleTranslation: l.titleTranslation,
      unit,
      href: `/listen/${pack.code}/${l.id}`,
    })),
    ...unitGrammar(pack, unit).map((g) => ({
      kind: "grammar" as const,
      id: g.id,
      title: g.title,
      titleTranslation: g.summary,
      unit,
      href: `/grammar/${pack.code}/${g.id}`,
    })),
  ]);
}

export const VERB: Record<ActivityKind, string> = {
  read: "read",
  listen: "listen to",
  grammar: "learn",
};

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
