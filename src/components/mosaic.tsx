import { Tile } from "./tile";

const ROW = 8;

/** Mostly cobalt, with the other glazes scattered through like a real tile panel. */
const GLAZES = ["cobalt", "cobalt", "ochre", "cobalt", "manganese", "cobalt", "copper", "cobalt", "iron", "cobalt", "cobalt", "ochre"];
const MIN_TILES = 32;

/**
 * The learner's mosaic: each word they have learned fills one tile.
 */
export function Mosaic({ learned }: { learned: number }) {
  // The mosaic grows a row at a time, always leaving room for what's next.
  const total = Math.max(MIN_TILES, Math.ceil((learned + 1) / ROW) * ROW + ROW);
  const glazed = learned;
  return (
    <div
      className="mosaic"
      role="img"
      aria-label={`Your mosaic: ${learned} ${learned === 1 ? "tile" : "tiles"} filled`}
    >
      {Array.from({ length: total }, (_, i) => (
        <Tile key={i} glazed={i < glazed} color={`var(--glaze-${GLAZES[(i * 5) % GLAZES.length]})`} />
      ))}
    </div>
  );
}
