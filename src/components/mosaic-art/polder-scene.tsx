/**
 * A2 picture for Dutch: a polder at Kinderdijk, painted like a Delft tile
 * panel. A row of windmills along the water, a cyclist on the dyke, cows in
 * the meadow, a sailing barge. Drawn in a 1200×800 box; cobalt lines with
 * washes in the five glazes, like the A1 canal.
 */

const INK = "var(--glaze-cobalt)";
const wash = (glaze: string, o: number) => ({ fill: `var(--glaze-${glaze})`, fillOpacity: o });

/** Round to one decimal so server and browser draw identical paths. */
const r1 = (n: number) => Math.round(n * 10) / 10;

const HORIZON = 470;
const DYKE = 560;

type Mill = { x: number; base: number; h: number; turn: number; glaze: string };

const MILLS: Mill[] = [
  { x: 210, base: HORIZON + 12, h: 210, turn: 12, glaze: "manganese" },
  { x: 430, base: HORIZON + 4, h: 160, turn: 38, glaze: "iron" },
  { x: 610, base: HORIZON, h: 120, turn: 5, glaze: "ochre" },
  { x: 750, base: HORIZON - 2, h: 92, turn: 50, glaze: "manganese" },
  { x: 860, base: HORIZON - 4, h: 72, turn: 22, glaze: "iron" },
];

function Windmill({ x, base, h, turn, glaze }: Mill) {
  const top = base - h;
  const wBase = h * 0.36;
  const wTop = h * 0.16;
  const hub = { x, y: top + h * 0.06 };
  const arm = h * 0.62;
  const sails = [0, 90, 180, 270].map((a) => {
    const rad = ((a + turn) * Math.PI) / 180;
    const ex = hub.x + Math.cos(rad) * arm;
    const ey = hub.y + Math.sin(rad) * arm;
    // A lattice sail: a thin frame beside each arm.
    const nx = -Math.sin(rad) * h * 0.09;
    const ny = Math.cos(rad) * h * 0.09;
    const sx = hub.x + Math.cos(rad) * arm * 0.22;
    const sy = hub.y + Math.sin(rad) * arm * 0.22;
    return {
      arm: `M${r1(hub.x)} ${r1(hub.y)} L${r1(ex)} ${r1(ey)}`,
      sail: `M${r1(sx)} ${r1(sy)} L${r1(ex)} ${r1(ey)} L${r1(ex + nx)} ${r1(ey + ny)} L${r1(sx + nx)} ${r1(sy + ny)} Z`,
    };
  });
  return (
    <g>
      {/* thatched body */}
      <path
        d={`M${r1(x - wBase / 2)} ${base} L${r1(x - wTop / 2)} ${r1(top + h * 0.1)} L${r1(x + wTop / 2)} ${r1(top + h * 0.1)} L${r1(x + wBase / 2)} ${base} Z`}
        {...wash(glaze, 0.45)}
        stroke={INK}
        strokeWidth={2.4}
      />
      {/* cap */}
      <path
        d={`M${r1(x - wTop / 2 - 4)} ${r1(top + h * 0.1)} Q${x} ${r1(top - h * 0.06)} ${r1(x + wTop / 2 + 4)} ${r1(top + h * 0.1)} Z`}
        {...wash("cobalt", 0.5)}
        stroke={INK}
        strokeWidth={2}
      />
      {/* thatch strokes */}
      {[0.3, 0.5, 0.7].map((f) => (
        <path
          key={f}
          d={`M${r1(x - wBase / 2 + (wBase - wTop) * (1 - f) * 0.5 * 0)} ${r1(base - h * f * 0.9)} l${r1(wBase * 0.08)} ${r1(h * 0.06)}`}
          stroke={INK}
          strokeWidth={1.2}
          opacity={0.6}
        />
      ))}
      {/* door */}
      <path d={`M${r1(x - h * 0.05)} ${base} L${r1(x - h * 0.05)} ${r1(base - h * 0.14)} Q${x} ${r1(base - h * 0.19)} ${r1(x + h * 0.05)} ${r1(base - h * 0.14)} L${r1(x + h * 0.05)} ${base}`} {...wash("cobalt", 0.6)} stroke={INK} strokeWidth={1.6} />
      {sails.map((s, i) => (
        <g key={i}>
          <path d={s.sail} {...wash("tile", 0.0)} fill="none" stroke={INK} strokeWidth={1.4} />
          <path d={s.arm} stroke={INK} strokeWidth={3} strokeLinecap="round" />
        </g>
      ))}
      <circle cx={hub.x} cy={hub.y} r={h * 0.025 + 2} fill={INK} />
    </g>
  );
}

function Cow({ x, y, s, flip }: { x: number; y: number; s: number; flip?: boolean }) {
  const d = flip ? -1 : 1;
  return (
    <g transform={`translate(${x} ${y}) scale(${d * s} ${s})`}>
      <path d="M-30 0 Q-32 -24 -10 -26 L22 -26 Q34 -26 34 -14 L34 0 Z" {...wash("tile", 1)} fill="var(--tile)" stroke={INK} strokeWidth={2.2} />
      <path d="M-12 -26 Q-4 -14 6 -22 Q8 -10 18 -14 L20 -26 Z" fill={INK} fillOpacity={0.8} />
      <path d="M34 -20 L48 -24 Q54 -18 50 -10 L36 -8" {...wash("tile", 1)} fill="var(--tile)" stroke={INK} strokeWidth={2} />
      <path d="M-26 0 L-26 12 M-14 0 L-14 12 M18 0 L18 12 M30 0 L30 12" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M-30 -18 Q-40 -10 -36 4" stroke={INK} strokeWidth={1.6} fill="none" />
    </g>
  );
}

export function PolderScene() {
  return (
    <g>
      {/* sky */}
      <rect width="1200" height={HORIZON} fill="var(--tile)" />
      <rect width="1200" height={HORIZON} {...wash("cobalt", 0.08)} />
      {/* big Dutch clouds */}
      {[
        "M80 150 q40 -50 100 -20 q50 -40 110 0 q60 -10 60 40 q-10 30 -60 30 l-200 0 q-40 -10 -10 -50 Z",
        "M700 110 q50 -60 120 -20 q60 -30 110 10 q60 0 50 50 l-260 0 q-50 -10 -20 -40 Z",
        "M980 240 q30 -40 80 -16 q40 -24 80 10 q30 10 20 34 l-170 0 q-30 -6 -10 -28 Z",
      ].map((d) => (
        <path key={d} d={d} {...wash("cobalt", 0.12)} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      ))}
      {/* low sun */}
      <circle cx="1040" cy="120" r="46" {...wash("ochre", 0.55)} stroke={INK} strokeWidth={2} />
      {/* flying birds */}
      {[[520, 120], [556, 104], [590, 128]].map(([bx, by]) => (
        <path key={bx} d={`M${bx - 14} ${by} q7 -9 14 0 q7 -9 14 0`} fill="none" stroke={INK} strokeWidth={2} />
      ))}

      {/* far meadows */}
      <path d={`M0 ${HORIZON} L1200 ${HORIZON - 14} L1200 ${DYKE} L0 ${DYKE} Z`} {...wash("iron", 0.18)} />
      {/* the canal between the mills */}
      <path d={`M0 ${HORIZON + 30} Q600 ${HORIZON + 6} 1200 ${HORIZON + 14} L1200 ${HORIZON + 40} Q600 ${HORIZON + 30} 0 ${HORIZON + 64} Z`} {...wash("cobalt", 0.4)} stroke={INK} strokeWidth={1.6} />
      {/* reflections */}
      {MILLS.slice(0, 3).map((m) => (
        <path key={m.x} d={`M${m.x - 14} ${HORIZON + 34} l28 0 M${m.x - 8} ${HORIZON + 44} l16 0`} stroke={INK} strokeWidth={1.4} opacity={0.6} />
      ))}
      {MILLS.slice().reverse().map((m) => (
        <Windmill key={m.x} {...m} />
      ))}

      {/* a sailing barge on the canal */}
      <g transform="translate(1000 482)">
        <path d="M-60 0 L60 0 L46 18 L-50 18 Z" {...wash("manganese", 0.5)} stroke={INK} strokeWidth={2} />
        <path d="M0 0 L0 -96" stroke={INK} strokeWidth={2.4} />
        <path d="M2 -92 Q44 -50 40 -6 L2 -6 Z" {...wash("ochre", 0.45)} stroke={INK} strokeWidth={1.8} />
        <path d="M-2 -80 L-40 -8 L-2 -8 Z" {...wash("copper", 0.4)} stroke={INK} strokeWidth={1.6} />
      </g>

      {/* the dyke, with a road on top */}
      <path d={`M0 ${DYKE} Q600 ${DYKE - 40} 1200 ${DYKE - 10} L1200 800 L0 800 Z`} {...wash("iron", 0.3)} stroke={INK} strokeWidth={2.4} />
      <path d={`M0 ${DYKE + 8} Q600 ${DYKE - 32} 1200 ${DYKE - 2}`} stroke={INK} strokeWidth={1.4} opacity={0.6} fill="none" />
      {/* grass strokes on the slope */}
      {Array.from({ length: 40 }, (_, i) => {
        const gx = 20 + i * 30;
        const gy = 640 + ((i * 37) % 120);
        return <path key={i} d={`M${gx} ${gy} l4 -12 M${gx + 6} ${gy} l-2 -10`} stroke={INK} strokeWidth={1.2} opacity={0.55} />;
      })}

      {/* a cyclist on the dyke, against the wind */}
      <g transform={`translate(330 ${DYKE - 48})`}>
        <circle cx="-22" cy="16" r="15" fill="none" stroke={INK} strokeWidth={2.2} />
        <circle cx="24" cy="16" r="15" fill="none" stroke={INK} strokeWidth={2.2} />
        <path d="M-22 16 L-4 -4 L24 16 M-4 -4 L14 -6 L24 16 M14 -6 L12 -14 M-6 -10 L2 -10" stroke={INK} strokeWidth={2.2} fill="none" strokeLinecap="round" />
        <path d="M-2 -10 L6 -38 L16 -16" stroke={INK} strokeWidth={2.6} fill="none" strokeLinecap="round" />
        <circle cx="8" cy="-46" r="8" {...wash("copper", 0.5)} stroke={INK} strokeWidth={2} />
        <path d="M2 -30 Q-14 -30 -22 -40" stroke={INK} strokeWidth={2} fill="none" />
        <path d="M2 -52 Q-10 -60 -18 -50" {...wash("ochre", 0.6)} stroke={INK} strokeWidth={1.6} />
      </g>

      {/* cows in the meadow below */}
      <Cow x={640} y={700} s={1.2} />
      <Cow x={800} y={735} s={1.35} flip />
      <Cow x={1010} y={690} s={1.05} />

      {/* reeds, front left */}
      {[60, 78, 96, 112, 130].map((rx, i) => (
        <path key={rx} d={`M${rx} 800 Q${rx + (i % 2 ? 8 : -6)} 720 ${rx + (i % 2 ? 4 : -2)} ${690 - i * 6}`} stroke={INK} strokeWidth={2} fill="none" />
      ))}
      {/* tile frame, like a Delft panel */}
      <rect x="6" y="6" width="1188" height="788" fill="none" stroke={INK} strokeWidth={4} />
    </g>
  );
}
