import type { Unit } from "./content";
import type { LanguagePack } from "./language-pack";

/** One thing to do in the course: read a text or do a listening item. */
export type Activity = {
  kind: "read" | "listen";
  id: string;
  title: string;
  titleTranslation: string;
  unit: Unit;
  href: string;
};

/** All activities in course order: per unit, its texts then its listening. */
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
  ]);
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
