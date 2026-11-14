/**
 * Where is the cat? Six small scenes for in, op, onder, naast, voor, achter,
 * drawn like tiles in cobalt.
 */
const INK = "var(--glaze-cobalt)";

function Box({ x }: { x: number }) {
  return (
    <g>
      <path d={`M${x + 14} 52 h40 v26 h-40 z`} fill="var(--tile)" stroke={INK} strokeWidth={2} />
      <path d={`M${x + 14} 52 l8 -8 h40 l-8 8 M${x + 54} 52 l8 -8 v26 l-8 8`} fill="none" stroke={INK} strokeWidth={2} />
    </g>
  );
}

function Cat({ x, y, s = 1, faded = false }: { x: number; y: number; s?: number; faded?: boolean }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`} opacity={faded ? 0.45 : 1}>
      <ellipse cx="0" cy="0" rx="10" ry="7" fill={INK} />
      <circle cx="9" cy="-7" r="5.5" fill={INK} />
      <path d="M5 -11 l1.5 -5 l3 4 M10 -12 l3 -4 l1 5" fill={INK} />
      <path d="M-10 0 q-7 -2 -6 -10" stroke={INK} strokeWidth={2} fill="none" />
    </g>
  );
}

const SCENES: { word: string; draw: (x: number) => React.ReactNode }[] = [
  { word: "in", draw: (x) => (<><Box x={x} /><Cat x={x + 36} y={62} s={0.9} faded /></>) },
  { word: "op", draw: (x) => (<><Box x={x} /><Cat x={x + 34} y={44} /></>) },
  { word: "onder", draw: (x) => (<><path d={`M${x + 8} 50 h60 M${x + 14} 50 v30 M${x + 62} 50 v30`} stroke={INK} strokeWidth={2.5} /><Cat x={x + 38} y={74} /></>) },
  { word: "naast", draw: (x) => (<><Box x={x - 8} /><Cat x={x + 66} y={72} s={0.85} /></>) },
  { word: "voor", draw: (x) => (<><Box x={x} /><Cat x={x + 30} y={84} /></>) },
  { word: "achter", draw: (x) => (<><Cat x={x + 40} y={50} s={0.8} faded /><Box x={x} /></>) },
];

/** `words` labels the six scenes in the language being learned. */
export function PlacesPicture({ words, lang = "nl" }: { words?: readonly string[]; lang?: string }) {
  return (
    <svg className="places-picture" viewBox="0 0 480 110" role="img" aria-label="A cat in, on, under, next to, in front of and behind a box">
      {SCENES.map((scene, i) => (
        <g key={scene.word}>
          <rect x={i * 80 + 2} y={2} width={76} height={106} rx={3} fill="none" stroke="var(--grout)" />
          {scene.draw(i * 80)}
          <text x={i * 80 + 40} y={102} textAnchor="middle" fontSize="12" fontWeight="600" fill={INK} lang={lang}>
            {words?.[i] ?? scene.word}
          </text>
        </g>
      ))}
    </svg>
  );
}
