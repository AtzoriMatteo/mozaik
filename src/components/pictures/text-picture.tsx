import { useId } from "react";
import type { PictureSpec } from "@/core/content";
import { At, G, INK, W } from "./kit";
import { Person, WheelchairUser, Baby, type Hair, type Pose } from "./people";
import { PROPS } from "./props";
import { SCENES } from "./scenes";

const CORNER = "M0 0 L26 0 C21 7 15 10 10 10 C10 15 7 21 0 26 Z";

/**
 * A text's picture, painted like a tile: Delft blue and polychrome glazes in
 * the Delft look, laid in tesserae with a gold band in the Ravenna look.
 */
export function TextPicture({ spec, theme }: { spec: PictureSpec; theme?: "delft" | "ravenna" }) {
  const id = useId().replace(/:/g, "");
  return (
    <figure className="text-picture" data-theme={theme}>
      <svg viewBox="0 0 400 240" role="img" aria-label={spec.alt}>
        <defs>
          <clipPath id={`clip-${id}`}>
            <rect x="0" y="0" width="400" height="240" rx="6" />
          </clipPath>
          <filter id={`brush-${id}`} x="-2%" y="-2%" width="104%" height="104%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="1" />
          </filter>
          <pattern id={`tess-${id}`} width="7" height="7" patternUnits="userSpaceOnUse">
            <path d="M0 0 L7 0 M0 0 L0 7" stroke="var(--tile)" strokeWidth="1.3" />
          </pattern>
        </defs>
        <g clipPath={`url(#clip-${id})`}>
          <rect x="0" y="0" width="400" height="240" fill="var(--tile)" />
          {spec.night ? <W d="M0 0 L400 0 L400 240 L0 240 Z" c="cobalt" o={0.14} /> : null}
          <g filter={`url(#brush-${id})`} transform="translate(200 215) scale(1.15) translate(-200 -215)">
            {SCENES[spec.scene]?.(!!spec.night)}
            {spec.items.map((it, i) => (
              <At key={i} x={it.x} y={it.y} s={it.s} flip={it.flip}>
                {it.k.startsWith("p:") ? (
                  <Person
                    kind={it.k.slice(2) as never}
                    hair={it.hair as Hair | undefined}
                    beard={it.beard}
                    glasses={it.glasses}
                    apron={it.apron}
                    c={it.c}
                    pose={it.pose as Pose | undefined}
                  />
                ) : it.k === "wheelchair" ? (
                  <WheelchairUser c={it.c} hair={(it.hair as Hair) ?? "short"} />
                ) : it.k === "baby" ? (
                  <Baby />
                ) : (
                  PROPS[it.k]?.({ c: it.c, v: it.v, t: it.t }) ?? null
                )}
              </At>
            ))}
          </g>
          {/* Ravenna: the whole picture laid in small stones, in a band of gold and colour. */}
          <g className="look-ravenna">
            <rect x="0" y="0" width="400" height="240" fill={`url(#tess-${id})`} opacity="0.55" />
          </g>
        </g>
        <g className="look-delft" fill={G.cobalt} opacity="0.8">
          {[
            [0, 0, 0],
            [400, 0, 90],
            [400, 240, 180],
            [0, 240, 270],
          ].map(([x, y, r]) => (
            <g key={r} transform={`translate(${x} ${y}) rotate(${r})`}>
              <path d={CORNER} />
              <circle cx="16" cy="16" r="3" />
            </g>
          ))}
          <rect x="3" y="3" width="394" height="234" rx="5" fill="none" stroke={INK} strokeWidth="1.6" opacity="0.5" />
        </g>
        <g className="look-ravenna">
          <rect x="4" y="4" width="392" height="232" rx="5" fill="none" stroke={G.ochre} strokeWidth="8" strokeDasharray="7 2" opacity="0.85" />
          <rect x="12" y="12" width="376" height="216" rx="3" fill="none" stroke={G.ochre} strokeWidth="1.4" opacity="0.7" />
        </g>
      </svg>
    </figure>
  );
}
