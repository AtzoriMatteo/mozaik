"use client";

import { useEffect, useId, useMemo, useState, type ComponentType } from "react";
import type { CefrLevel } from "@/core/language-pack";
import { MOSAIC_COLS, MOSAIC_ROWS, MOSAIC_TILES, revealOrder, tilesRevealed } from "@/core/mosaic";
import { CanalScene } from "./mosaic-art/canal-scene";
import { PolderScene } from "./mosaic-art/polder-scene";

/** The hidden picture for each language and level. More come with each level. */
const ART: Record<string, ComponentType> = {
  "nl-A1": CanalScene,
  "nl-A2": PolderScene,
};

/** A plain Delft pattern for levels whose picture isn't painted yet. */
function PatternScene() {
  return (
    <g>
      <rect width="1200" height="800" fill="var(--tile)" />
      {Array.from({ length: MOSAIC_TILES }, (_, i) => {
        const x = (i % MOSAIC_COLS) * 100 + 50;
        const y = Math.floor(i / MOSAIC_COLS) * 100 + 50;
        return (
          <g key={i} stroke="var(--glaze-cobalt)" strokeWidth={2} fill="var(--glaze-cobalt)" fillOpacity={0.25}>
            <circle cx={x} cy={y} r={22} />
            <circle cx={x} cy={y} r={6} fillOpacity={1} />
          </g>
        );
      })}
    </g>
  );
}

const seenKey = (lang: string, level: string) => `mozaik:mosaic-seen:${lang}:${level}`;

/**
 * A level's picture, covered by blank tiles. Finished activities glaze tiles
 * from the middle outwards; tiles glazed since your last visit appear with a
 * short shine, once.
 */
export function LevelMosaic({
  lang,
  level,
  done,
  total,
}: {
  lang: string;
  level: CefrLevel;
  done: number;
  total: number;
}) {
  const id = useId().replace(/:/g, "");
  const order = useMemo(() => revealOrder(`${lang}-${level}`), [lang, level]);
  const revealed = tilesRevealed(done, total);
  const shown = new Set(order.slice(0, revealed));
  const Art = ART[`${lang}-${level}`] ?? PatternScene;

  // Tiles glazed since the last visit get the shine.
  const [seen, setSeen] = useState<number | null>(null);
  useEffect(() => {
    // The first render after loading the page has no progress yet: skip it.
    if (revealed === 0) return;
    let before = revealed;
    try {
      const raw = window.localStorage.getItem(seenKey(lang, level));
      before = raw === null ? revealed : Number(raw);
      window.localStorage.setItem(seenKey(lang, level), String(revealed));
    } catch {
      // No storage: no shine, nothing else changes.
    }
    // Reading browser storage after mount is the point here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSeen(before);
  }, [lang, level, revealed]);
  const fresh = new Set(seen !== null && seen < revealed ? order.slice(seen, revealed) : []);

  const complete = revealed === MOSAIC_TILES;
  return (
    <figure className="level-mosaic" data-complete={complete || undefined}>
      <svg viewBox="0 0 1200 800" role="img" aria-label={`Your ${level} mosaic: ${revealed} of ${MOSAIC_TILES} tiles glazed`}>
        <defs>
          <filter id={`brush-${id}`} x="-2%" y="-2%" width="104%" height="104%">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" seed="5" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="3" />
          </filter>
        </defs>
        <g filter={`url(#brush-${id})`}>
          <Art />
        </g>
        {Array.from({ length: MOSAIC_TILES }, (_, i) => {
          if (shown.has(i) && !fresh.has(i)) return null;
          const x = (i % MOSAIC_COLS) * 100;
          const y = Math.floor(i / MOSAIC_COLS) * 100;
          // The whole shine takes at most about two seconds.
          const delay = fresh.has(i) ? [...fresh].indexOf(i) * Math.min(90, 1800 / fresh.size) : 0;
          return (
            <g
              key={i}
              className={fresh.has(i) ? "mosaic-cover mosaic-cover-fresh" : "mosaic-cover"}
              style={fresh.has(i) ? { animationDelay: `${300 + delay}ms` } : undefined}
            >
              <rect x={x} y={y} width={100} height={100} fill="var(--porcelain)" />
              <rect x={x + 14} y={y + 14} width={72} height={72} rx={3} fill="none" stroke="var(--grout)" strokeWidth={2} strokeDasharray="5 5" />
            </g>
          );
        })}
        <g stroke="var(--grout)" strokeWidth={4}>
          {Array.from({ length: MOSAIC_COLS + 1 }, (_, c) => (
            <line key={`c${c}`} x1={c * 100} y1={0} x2={c * 100} y2={800} />
          ))}
          {Array.from({ length: MOSAIC_ROWS + 1 }, (_, r) => (
            <line key={`r${r}`} x1={0} y1={r * 100} x2={1200} y2={r * 100} />
          ))}
        </g>
      </svg>
      <figcaption>
        {complete ? (
          <>
            <strong>{level} complete.</strong> The whole picture is yours.
          </>
        ) : (
          <>
            <strong>
              {revealed} of {MOSAIC_TILES} tiles
            </strong>
            . {done} of {total} {level} activities done. Every text, listening and grammar lesson glazes more of the
            picture; finish them all to see it whole. Speaking is a bonus.
          </>
        )}
      </figcaption>
    </figure>
  );
}
