import type { ReactNode } from "react";
import type { Glaze } from "@/core/content";

/**
 * Drawing kit for text pictures. Everything is painted in two layers, as on
 * a Delft tile: a translucent wash in one of the five glazes, then the line
 * in cobalt. In the Ravenna look the same shapes read as a mosaic (the
 * picture component swaps the palette and adds the tesserae).
 */

export const G: Record<Glaze, string> = {
  cobalt: "var(--glaze-cobalt)",
  manganese: "var(--glaze-manganese)",
  ochre: "var(--glaze-ochre)",
  copper: "var(--glaze-copper)",
  iron: "var(--glaze-iron)",
};

export const INK = "var(--pic-ink, var(--glaze-cobalt))";

/** A wash: the colour laid in first, slightly see-through. */
export function W({ d, c = "cobalt", o = 0.32 }: { d: string; c?: Glaze; o?: number }) {
  return <path d={d} fill={G[c]} fillOpacity={o} stroke="none" className="pic-wash" />;
}

/** A painted line. */
export function L({ d, w = 2, o = 1 }: { d: string; w?: number; o?: number }) {
  return <path d={d} fill="none" stroke={INK} strokeWidth={w} strokeOpacity={o} strokeLinecap="round" strokeLinejoin="round" />;
}

/** Wash and line on the same path. */
export function WL({ d, c = "cobalt", o = 0.32, w = 2 }: { d: string; c?: Glaze; o?: number; w?: number }) {
  return (
    <>
      <W d={d} c={c} o={o} />
      <L d={d} w={w} />
    </>
  );
}

/** A filled dot in ink. */
export function Dot({ x, y, r = 1.6 }: { x: number; y: number; r?: number }) {
  return <circle cx={x} cy={y} r={r} fill={INK} />;
}

/** Places a drawing: (x, y) is its foot, s its size, flip mirrors it. */
export function At({ x, y, s = 1, flip, children }: { x: number; y: number; s?: number; flip?: boolean; children: ReactNode }) {
  return <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>{children}</g>;
}

/** Circle as a path (for washes). */
export const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy} A${r} ${r} 0 1 0 ${cx + r} ${cy} A${r} ${r} 0 1 0 ${cx - r} ${cy} Z`;

/** Rectangle as a path. */
export const rect = (x: number, y: number, w: number, h: number) => `M${x} ${y} L${x + w} ${y} L${x + w} ${y + h} L${x} ${y + h} Z`;
