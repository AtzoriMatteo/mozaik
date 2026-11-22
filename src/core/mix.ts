import type { Exercise, GrammarPoint, Unit } from "./content";
import type { LanguagePack } from "./language-pack";
import { shuffleTiles } from "./answers";

/**
 * The grammar mix at the end of a unit (Matteo, 21 Nov 2026: "mixed review").
 * A textbook makes things stick by bringing old points back next to new ones,
 * without saying which is which. The mix takes two exercises from each of the
 * unit's lessons and one from each of a few earlier lessons, and shuffles them.
 */
export const MIX_PREFIX = "mix-";

export const mixId = (unit: Pick<Unit, "id">) => `${MIX_PREFIX}${unit.id}`;

export function unitForMix(pack: LanguagePack, id: string): Unit | undefined {
  return id.startsWith(MIX_PREFIX) ? pack.units.find((u) => u.id === id.slice(MIX_PREFIX.length)) : undefined;
}

/** One exercise in the mix, with the lesson it comes from (shown after you answer). */
export type MixItem = { exercise: Exercise; point: GrammarPoint };

/** Short kinds first: a mix should move quickly. */
const QUICK: Exercise["kind"][] = ["choice", "fill", "spot", "transform", "build"];

/** Exercises from the second half of a lesson: they ask more than recognition. */
function pickFrom(point: GrammarPoint, n: number, seed: string): Exercise[] {
  const all = point.lesson?.exercises ?? [];
  const quick = all.filter((e) => QUICK.includes(e.kind));
  const late = quick.slice(Math.floor(quick.length / 3));
  return shuffleTiles(late.length >= n ? late : quick, seed).slice(0, n);
}

/** Earlier lessons to bring back: the last three, and two from further back. */
function earlierPoints(pack: LanguagePack, unit: Unit): GrammarPoint[] {
  const order = pack.units.findIndex((u) => u.id === unit.id);
  const before = new Set(pack.units.slice(0, order).map((u) => u.id));
  const earlier = pack.grammar.filter((g) => g.lesson && g.unit && before.has(g.unit));
  const recent = earlier.slice(-3);
  const older = earlier.slice(0, -3);
  const spread = older.length <= 2 ? older : [older[Math.floor(older.length / 3)], older[Math.floor((2 * older.length) / 3)]];
  return [...spread, ...recent];
}

export function mixedReview(pack: LanguagePack, unit: Unit): MixItem[] {
  const own = pack.grammar.filter((g) => g.unit === unit.id && g.lesson);
  if (own.length === 0) return [];
  const items: MixItem[] = [
    ...own.flatMap((point) => pickFrom(point, 2, `${unit.id}-${point.id}`).map((exercise) => ({ exercise, point }))),
    ...earlierPoints(pack, unit).flatMap((point) => pickFrom(point, 1, `${unit.id}-${point.id}`).map((exercise) => ({ exercise, point }))),
  ];
  return shuffleTiles(items, `mix-${unit.id}`).slice(0, 12);
}

/** A unit gets a mix once there's something to mix: at least two lessons in all. */
export function hasMix(pack: LanguagePack, unit: Unit): boolean {
  const items = mixedReview(pack, unit);
  return items.length >= 4 && new Set(items.map((i) => i.point.id)).size >= 2;
}
