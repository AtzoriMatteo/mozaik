/**
 * A1 picture for Dutch: a canal in Leiden, painted like a Delft tile panel.
 * Drawn in a 1200×800 box; cobalt lines with washes in the five glazes.
 */

const INK = "var(--glaze-cobalt)";
const wash = (glaze: string, o: number) => ({ fill: `var(--glaze-${glaze})`, fillOpacity: o });

type House = { x: number; w: number; top: number; gable: "step" | "bell" | "neck" | "roof"; glaze: string };

const HOUSES: House[] = [
  { x: 440, w: 120, top: 410, gable: "step", glaze: "ochre" },
  { x: 560, w: 100, top: 370, gable: "bell", glaze: "cobalt" },
  { x: 660, w: 130, top: 330, gable: "neck", glaze: "iron" },
  { x: 790, w: 110, top: 395, gable: "step", glaze: "manganese" },
  { x: 900, w: 130, top: 400, gable: "roof", glaze: "cobalt" },
  { x: 1030, w: 150, top: 430, gable: "step", glaze: "ochre" },
];

const GROUND = 640;

/** Round to one decimal so server and browser draw identical paths. */
const r1 = (n: number) => Math.round(n * 10) / 10;

function gablePath({ x, w, top, gable }: House): string {
  const r = x + w;
  const eave = top + 80;
  switch (gable) {
    case "step": {
      const s = w / 6;
      return `M${x} ${GROUND} L${x} ${eave} L${x + s} ${eave} L${x + s} ${eave - 26} L${x + 2 * s} ${eave - 26} L${x + 2 * s} ${eave - 52} L${x + 2.5 * s} ${eave - 52} L${x + 2.5 * s} ${top} L${r - 2.5 * s} ${top} L${r - 2.5 * s} ${eave - 52} L${r - 2 * s} ${eave - 52} L${r - 2 * s} ${eave - 26} L${r - s} ${eave - 26} L${r - s} ${eave} L${r} ${eave} L${r} ${GROUND} Z`;
    }
    case "bell":
      return `M${x} ${GROUND} L${x} ${eave} C${x} ${eave - 30} ${x + w * 0.3} ${eave - 20} ${x + w * 0.3} ${top + 20} C${x + w * 0.3} ${top - 6} ${r - w * 0.3} ${top - 6} ${r - w * 0.3} ${top + 20} C${r - w * 0.3} ${eave - 20} ${r} ${eave - 30} ${r} ${eave} L${r} ${GROUND} Z`;
    case "neck":
      return `M${x} ${GROUND} L${x} ${eave} C${x + 10} ${eave - 20} ${x + w * 0.3} ${eave - 10} ${x + w * 0.32} ${eave - 40} L${x + w * 0.32} ${top} L${r - w * 0.32} ${top} L${r - w * 0.32} ${eave - 40} C${r - w * 0.3} ${eave - 10} ${r - 10} ${eave - 20} ${r} ${eave} L${r} ${GROUND} Z`;
    case "roof":
      return `M${x} ${GROUND} L${x} ${eave} L${x + w / 2} ${top} L${r} ${eave} L${r} ${GROUND} Z`;
  }
}

function Windows({ x, w, top }: House) {
  const eave = top + 80;
  const cols = w > 125 ? 3 : 2;
  const gap = w / (cols + 1);
  const rows: number[] = [];
  for (let y = eave + 18; y < GROUND - 90; y += 62) rows.push(y);
  return (
    <>
      {rows.flatMap((y) =>
        Array.from({ length: cols }, (_, c) => {
          const cx = x + gap * (c + 1);
          return (
            <g key={`${y}-${c}`}>
              <rect x={cx - 12} y={y} width={24} height={36} {...wash("cobalt", 0.35)} stroke={INK} strokeWidth={2} />
              <path d={`M${cx} ${y} L${cx} ${y + 36} M${cx - 12} ${y + 16} L${cx + 12} ${y + 16}`} stroke={INK} strokeWidth={1.4} />
            </g>
          );
        }),
      )}
      <path
        d={`M${x + w / 2 - 14} ${GROUND} L${x + w / 2 - 14} ${GROUND - 50} Q${x + w / 2} ${GROUND - 66} ${x + w / 2 + 14} ${GROUND - 50} L${x + w / 2 + 14} ${GROUND}`}
        {...wash("manganese", 0.45)}
        stroke={INK}
        strokeWidth={2}
      />
      <rect x={x + w / 2 - 9} y={top + 22} width={18} height={24} fill="none" stroke={INK} strokeWidth={1.6} />
    </>
  );
}

export function CanalScene() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect width="1200" height="800" fill="var(--tile)" />

      {/* sky */}
      <g stroke={INK} strokeWidth={2.2}>
        <path d="M120 170 C118 138 160 122 188 138 C202 100 266 96 286 132 C318 110 372 120 378 152 C410 156 406 182 378 184 L138 184 C118 184 114 176 120 170 Z" {...wash("cobalt", 0.14)} />
        <path d="M560 112 C560 88 592 78 612 90 C626 62 676 62 690 90 C716 76 754 88 754 112 C774 114 772 132 752 134 L576 134 C560 134 556 124 560 112 Z" {...wash("cobalt", 0.14)} />
        <circle cx="1010" cy="150" r="52" {...wash("ochre", 0.6)} />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * Math.PI) / 6;
          return (
            <path
              key={i}
              d={`M${r1(1010 + Math.cos(a) * 64)} ${r1(150 + Math.sin(a) * 64)} L${r1(1010 + Math.cos(a) * 86)} ${r1(150 + Math.sin(a) * 86)}`}
              stroke="var(--glaze-ochre)"
              strokeWidth={4}
            />
          );
        })}
        <path d="M470 230 q12 -12 24 0 q12 -12 24 0 M530 196 q9 -9 18 0 q9 -9 18 0 M840 250 q10 -10 20 0 q10 -10 20 0" fill="none" strokeWidth={2.6} />
      </g>

      {/* windmill */}
      <g stroke={INK} strokeWidth={2.4}>
        <path d="M165 640 L198 380 L282 380 L315 640 Z" {...wash("cobalt", 0.22)} />
        <path d="M150 520 L330 520 M150 520 L150 540 M330 520 L330 540 M150 540 L330 540" fill="none" />
        <path d="M192 384 Q240 322 288 384 Z" {...wash("iron", 0.55)} />
        <path d="M226 640 L226 596 Q240 582 254 596 L254 640" {...wash("manganese", 0.45)} />
        <rect x="230" y="440" width="20" height="26" fill="none" />
        {[18, 108, 198, 288].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 240 358)`}>
            <path d="M240 358 L240 168" fill="none" strokeWidth={3} />
            <path d="M226 340 L254 340 L254 178 L226 178 Z" {...wash("cobalt", 0.1)} />
            {[200, 222, 244, 266, 288, 310].map((y) => (
              <path key={y} d={`M226 ${y} L254 ${y}`} strokeWidth={1.2} />
            ))}
          </g>
        ))}
        <circle cx="240" cy="358" r="8" fill={INK} />
      </g>

      {/* tree */}
      <g stroke={INK} strokeWidth={2.2}>
        <path d="M392 640 L392 548 M392 590 L372 566 M392 576 L414 556" fill="none" strokeWidth={3} />
        <path d="M352 552 C334 520 354 482 384 486 C394 456 440 460 444 494 C470 504 466 546 440 552 C426 572 372 574 352 552 Z" {...wash("copper", 0.5)} />
      </g>

      {/* canal houses */}
      <g stroke={INK} strokeWidth={2.4}>
        {HOUSES.map((h) => (
          <g key={h.x}>
            <path d={gablePath(h)} {...wash(h.glaze, h.glaze === "cobalt" ? 0.16 : 0.32)} />
            <Windows {...h} />
          </g>
        ))}
      </g>

      {/* quay, tulips */}
      <g stroke={INK} strokeWidth={2}>
        <rect x="0" y="640" width="1200" height="22" {...wash("iron", 0.35)} />
        {Array.from({ length: 24 }, (_, i) => (
          <path key={i} d={`M${i * 50 + (i % 2) * 25} 640 L${i * 50 + (i % 2) * 25} 662`} strokeWidth={1.2} />
        ))}
        {[30, 62, 94, 126].map((x, i) => (
          <g key={x}>
            <path d={`M${x} 640 L${x} 606`} stroke="var(--glaze-copper)" strokeWidth={3} />
            <path d={`M${x - 10} 588 C${x - 10} 604 ${x + 10} 604 ${x + 10} 588 L${x + 5} 595 L${x} 584 L${x - 5} 595 Z`} {...wash(i % 2 ? "ochre" : "iron", 0.7)} />
          </g>
        ))}
      </g>

      {/* water, boat */}
      <g stroke={INK} strokeWidth={2}>
        <rect x="0" y="662" width="1200" height="138" {...wash("cobalt", 0.16)} stroke="none" />
        {Array.from({ length: 5 }, (_, row) =>
          Array.from({ length: 10 }, (_, c) => {
            const x = c * 124 + (row % 2) * 60 + 20;
            const y = 690 + row * 24;
            return <path key={`${row}-${c}`} d={`M${x} ${y} q15 -8 30 0 q15 8 30 0`} fill="none" strokeWidth={1.6} opacity={0.7} />;
          }),
        )}
        <path d="M590 706 L830 706 L796 742 L626 742 Z" {...wash("manganese", 0.45)} strokeWidth={2.6} />
        <path d="M712 706 L712 586" fill="none" strokeWidth={3} />
        <path d="M718 594 L718 700 L792 700 Z" {...wash("ochre", 0.55)} />
        <path d="M706 600 L706 700 L650 700 Z" {...wash("cobalt", 0.12)} />
      </g>
    </g>
  );
}
