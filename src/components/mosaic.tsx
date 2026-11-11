import { Tile } from "./tile";

const TILE_COUNT = 32;

/**
 * The learner's mosaic: each word they have learned fills one tile.
 * For now the count is passed in; it will come from saved words in step 2.
 */
export function Mosaic({ learned }: { learned: number }) {
  const glazed = Math.min(learned, TILE_COUNT);
  return (
    <div
      className="mosaic"
      role="img"
      aria-label={`Your mosaic: ${learned} ${learned === 1 ? "tile" : "tiles"} filled`}
    >
      {Array.from({ length: TILE_COUNT }, (_, i) => (
        <Tile key={i} glazed={i < glazed} />
      ))}
    </div>
  );
}
