import { useId } from "react";
import type { Glaze, Motif } from "@/core/content";

/**
 * A hand-painted Delft tile for a unit: brushy corner ornaments in the
 * unit's glaze, a cobalt ring, and the unit's motif washed in its glaze and
 * outlined in cobalt. Polychrome Delftware used exactly these five colours.
 */

export const GLAZE_VAR: Record<Glaze, string> = {
  cobalt: "var(--glaze-cobalt)",
  manganese: "var(--glaze-manganese)",
  ochre: "var(--glaze-ochre)",
  copper: "var(--glaze-copper)",
  iron: "var(--glaze-iron)",
};

const INK = "var(--glaze-cobalt)";

/** Motif drawings in a 100×100 box, centred on 50,52. `wash` areas take the glaze. */
const MOTIFS: Record<Motif, { wash: string; line: string; dots?: [number, number, number][] }> = {
  tulip: {
    wash: "M40 34 C39 46 43 53 50 53 C57 53 61 46 60 34 L55 41 L50 30 L45 41 Z",
    line: "M50 53 C50 60 49 67 50 75 M50 70 C43 68 37 62 36 54 C42 56 47 61 50 68 M50 66 C56 63 61 58 63 51 C58 53 53 57 50 63",
  },
  birds: {
    wash: "M27 61 C29 51 39 45 51 47 C55 41 62 39 67 42 C69 44 70 46 70 48 C69 55 63 61 53 63 C45 65 34 65 27 61 Z M60 31 C61 28 65 27 67 29 L71 29 L67 31 C67 34 64 36 61 35 C60 34 60 32 60 31 Z",
    line: "M27 61 C29 51 39 45 51 47 C55 41 62 39 67 42 C69 44 70 46 70 48 C69 55 63 61 53 63 C45 65 34 65 27 61 M67 44 L75 46 L69 48 M27 61 L19 55 M27 61 L18 62 M38 55 C44 49 52 49 57 53 C51 57 44 58 38 55 M45 64 L43 71 M53 63 L54 71 M59 33 C57 37 57 40 58 42",
    dots: [[64, 44, 1.4]],
  },
  cheese: {
    wash: "M28 64 L72 64 L72 48 L28 58 Z",
    line: "M28 58 L28 64 L72 64 L72 48 L28 58 M72 48 C60 44 44 48 28 58",
    dots: [[40, 60, 2.2], [55, 59, 3], [64, 54, 1.8], [62, 61, 1.5]],
  },
  clock: {
    wash: "M50 30 A22 22 0 1 1 49.9 30 Z",
    line: "M50 30 A22 22 0 1 1 49.9 30 M50 52 L50 37 M50 52 L60 57 M50 33 L50 35 M69 52 L67 52 M50 71 L50 69 M31 52 L33 52",
    dots: [[50, 52, 1.8]],
  },
  gable: {
    wash: "M37 75 L37 46 L41 46 L41 40 L45 40 L45 33 L55 33 L55 40 L59 40 L59 46 L63 46 L63 75 Z",
    line: "M37 75 L37 46 L41 46 L41 40 L45 40 L45 33 L55 33 L55 40 L59 40 L59 46 L63 46 L63 75 M47 75 L47 65 C47 61 53 61 53 65 L53 75 M42 51 L47 51 L47 57 L42 57 Z M53 51 L58 51 L58 57 L53 57 Z M48 40 L52 40 L52 45 L48 45 Z",
  },
  book: {
    wash: "M50 41 C43 35 34 34 28 37 L28 66 C34 63 43 63 50 69 C57 63 66 63 72 66 L72 37 C66 34 57 35 50 41 Z",
    line: "M50 41 C43 35 34 34 28 37 L28 66 C34 63 43 63 50 69 C57 63 66 63 72 66 L72 37 C66 34 57 35 50 41 L50 69 M33 44 C37 43 41 43 45 45 M33 50 C37 49 41 49 45 51 M55 45 C59 43 63 43 67 44 M55 51 C59 49 63 49 67 50",
  },
  herb: {
    wash: "M50 44 C42 40 38 33 40 27 C47 30 51 37 50 44 Z M50 56 C58 52 64 46 64 39 C57 41 52 48 50 56 Z M50 66 C42 63 36 57 35 50 C42 52 48 58 50 66 Z",
    line: "M50 76 C50 62 51 48 48 34 M50 44 C46 39 43 34 41 29 M50 56 C55 50 59 45 62 41 M50 66 C45 61 41 56 37 52",
  },
  windmill: {
    wash: "M44 75 L46.5 47 L53.5 47 L56 75 Z",
    line: "M44 75 L46.5 47 L53.5 47 L56 75 Z M50 44 L33 27 M50 44 L67 27 M50 44 L33 61 M50 44 L67 61 M36 30 L41 25 M64 30 L59 25 M36 58 L41 63 M64 58 L59 63 M48 75 L48 68 L52 68 L52 75",
    dots: [[50, 44, 2.6]],
  },
  clog: {
    wash: "M27 62 C26 55 31 51 39 51 L52 50 C56 44 63 42 69 45 C74 48 75 55 73 62 C60 66 40 66 27 62 Z",
    line: "M27 62 C26 55 31 51 39 51 L52 50 C56 44 63 42 69 45 C74 48 75 55 73 62 C60 66 40 66 27 62 Z M55 51 C58 46 66 46 69 50 C66 53 59 54 55 51 M33 57 C36 55 40 55 43 57",
  },
  star: {
    wash: "M50 26 L55 44 L72 36 L60 50 L74 60 L56 59 L50 77 L44 59 L26 60 L40 50 L28 36 L45 44 Z",
    line: "M50 26 L55 44 L72 36 L60 50 L74 60 L56 59 L50 77 L44 59 L26 60 L40 50 L28 36 L45 44 Z M50 45 L50 58 M44 51 L56 51",
    dots: [[50, 51, 2.2]],
  },
  crown: {
    wash: "M32 64 L29 40 L40 50 L50 33 L60 50 L71 40 L68 64 Z",
    line: "M32 64 L29 40 L40 50 L50 33 L60 50 L71 40 L68 64 Z M31 70 L69 70 M32 64 L31 70 M68 64 L69 70",
    dots: [[29, 38, 2.2], [50, 31, 2.4], [71, 38, 2.2], [41, 58, 1.6], [50, 58, 1.6], [59, 58, 1.6]],
  },
};

/** One corner ornament (top-left); the others are rotations of it. */
const CORNER = "M0 0 L17 0 C14 5 10 7 7 7 C7 10 5 14 0 17 Z";

export function UnitTile({
  motif,
  glaze,
  className,
}: {
  motif: Motif;
  glaze: Glaze;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const color = GLAZE_VAR[glaze];
  const m = MOTIFS[motif];
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <defs>
        {/* A slight wobble so lines read as brushwork, not vectors. */}
        <filter id={`brush-${id}`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" />
        </filter>
      </defs>
      <rect x="0" y="0" width="100" height="100" fill="var(--tile)" />
      <g fill={color} opacity="0.85" filter={`url(#brush-${id})`}>
        {[0, 90, 180, 270].map((r) => (
          <g key={r} transform={`rotate(${r} 50 50)`}>
            <path d={CORNER} />
            <circle cx="11.5" cy="11.5" r="2.1" />
          </g>
        ))}
      </g>
      <g filter={`url(#brush-${id})`} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="50" cy="52" r="34" fill="none" stroke={INK} strokeWidth="1.4" opacity="0.55" />
        <circle cx="50" cy="52" r="31" fill="none" stroke={INK} strokeWidth="0.7" opacity="0.35" />
        <path d={m.wash} fill={color} opacity="0.55" />
        <path d={m.line} fill="none" stroke={INK} strokeWidth="2.2" />
        {m.dots?.map(([cx, cy, r], i) => <circle key={i} cx={cx} cy={cy} r={r} fill={INK} />)}
      </g>
    </svg>
  );
}

/** Small glyphs for the five kinds of work, each in its own glaze. */
export type Skill = "read" | "listen" | "grammar" | "speak" | "beyond";

export const SKILL_GLAZE: Record<Skill, Glaze> = {
  read: "cobalt",
  listen: "ochre",
  grammar: "manganese",
  speak: "copper",
  beyond: "iron",
};

const SKILL_PATH: Record<Skill, string> = {
  read: "M12 7 C9.5 5.3 6.5 5 4 6 L4 18 C6.5 17 9.5 17.3 12 19 C14.5 17.3 17.5 17 20 18 L20 6 C17.5 5 14.5 5.3 12 7 Z M12 7 L12 19",
  listen: "M5 10 L5 14 L8 14 L12 17.5 L12 6.5 L8 10 Z M15 9.5 C16.3 10.8 16.3 13.2 15 14.5 M17.5 7.5 C20 10 20 14 17.5 16.5",
  grammar: "M4 5 L10 5 L10 11 L4 11 Z M14 5 L20 5 L20 11 L14 11 Z M4 13 L10 13 L10 19 L4 19 Z M14 13 L20 13 L20 19 L14 19 Z",
  speak: "M5 6 L19 6 C20 6 20.5 6.5 20.5 7.5 L20.5 14 C20.5 15 20 15.5 19 15.5 L11 15.5 L7 19 L7 15.5 L5 15.5 C4 15.5 3.5 15 3.5 14 L3.5 7.5 C3.5 6.5 4 6 5 6 Z",
  beyond: "M12 3.5 A8.5 8.5 0 1 1 11.9 3.5 Z M15.5 8.5 L13.3 13.3 L8.5 15.5 L10.7 10.7 Z",
};

export function SkillGlyph({ skill }: { skill: Skill }) {
  return (
    <span className="skill-glyph" data-glaze={SKILL_GLAZE[skill]} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="22" height="22">
        <path d={SKILL_PATH[skill]} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </span>
  );
}
