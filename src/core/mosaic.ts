import { activities, type Activity } from "./course";
import type { CefrLevel, LanguagePack } from "./language-pack";

/**
 * Each level hides one picture made of tiles. Every reading, listening and
 * grammar activity you finish in that level glazes tiles; finishing them all
 * reveals the whole picture. Speaking is a bonus and doesn't count.
 */

export const MOSAIC_COLS = 12;
export const MOSAIC_ROWS = 8;
export const MOSAIC_TILES = MOSAIC_COLS * MOSAIC_ROWS;

/** The activities that build a level's picture. */
export function mosaicActivities(pack: LanguagePack, level: CefrLevel): Activity[] {
  return activities(pack).filter((a) => a.unit.level === level && a.kind !== "speak");
}

/** How many tiles are glazed: proportional, and all of them only when everything is done. */
export function tilesRevealed(done: number, total: number): number {
  if (total === 0) return 0;
  if (done >= total) return MOSAIC_TILES;
  return Math.floor((done / total) * MOSAIC_TILES);
}

/**
 * The order tiles appear in: from the middle of the picture outwards, with a
 * little randomness so it grows like a real tile panel being laid.
 */
export function revealOrder(seed: string): number[] {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const rand = () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
  const cx = (MOSAIC_COLS - 1) / 2;
  const cy = (MOSAIC_ROWS - 1) / 2;
  return Array.from({ length: MOSAIC_TILES }, (_, i) => {
    const x = i % MOSAIC_COLS;
    const y = Math.floor(i / MOSAIC_COLS);
    // Rows count a bit more than columns: the picture is wider than tall.
    const d = Math.hypot((x - cx) / 1.5, y - cy) + rand() * 1.8;
    return { i, d };
  })
    .sort((a, b) => a.d - b.d)
    .map((t) => t.i);
}

/** The level you're working on: the first one with tiles left, else the last. */
export function currentLevel(pack: LanguagePack, isDone: (a: Activity) => boolean): CefrLevel {
  for (const level of pack.levels) {
    const list = mosaicActivities(pack, level);
    if (list.length && list.some((a) => !isDone(a))) return level;
  }
  return pack.levels[pack.levels.length - 1];
}
