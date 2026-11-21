import type { ReactElement } from "react";
import type { Glaze } from "@/core/content";
import { Dot, G, INK, L, W, WL, circle, rect } from "./kit";

/**
 * Things in a picture. Each draws with its foot (or centre, for things in
 * the sky or on a wall) at (0, 0). `v` picks a variant, `t` a short label
 * (a number on a cake, a time on a clock), `c` a glaze.
 */
export type PropOpts = { c?: Glaze; v?: string; t?: string };

const clockHands = (t = "3:00", r = 10) => {
  const [hh, mm] = t.split(":").map(Number);
  const ma = ((mm / 60) * 360 - 90) * (Math.PI / 180);
  const ha = ((((hh % 12) + mm / 60) / 12) * 360 - 90) * (Math.PI / 180);
  const p = (a: number, len: number) => `${(Math.cos(a) * len).toFixed(1)} ${(Math.sin(a) * len).toFixed(1)}`;
  return `M0 0 L${p(ha, r * 0.5)} M0 0 L${p(ma, r * 0.8)}`;
};

const Txt = ({ x, y, t, size = 9 }: { x: number; y: number; t: string; size?: number }) => (
  <text x={x} y={y} textAnchor="middle" fontSize={size} fontFamily="var(--font-ui)" fontWeight={700} fill={INK}>
    {t}
  </text>
);

export const PROPS: Record<string, (o: PropOpts) => ReactElement> = {
  /* ---------------- furniture ---------------- */
  table: ({ c = "ochre" }) => (
    <>
      <WL d="M-52 -38 L52 -38 L52 -33 L-52 -33 Z" c={c} o={0.45} />
      <L d="M-46 -33 L-46 0 M46 -33 L46 0" w={2.2} />
    </>
  ),
  longtable: ({ c = "iron" }) => (
    <>
      <WL d="M-95 -38 L95 -38 L92 -22 L-92 -22 Z" c={c} o={0.4} />
      <L d="M-86 -22 L-86 0 M86 -22 L86 0 M0 -22 L0 0" w={2.2} />
    </>
  ),
  smalltable: ({ c = "ochre" }) => (
    <>
      <WL d="M-24 -36 L24 -36 L24 -32 L-24 -32 Z" c={c} o={0.45} />
      <L d="M0 -32 L0 -2 M-10 0 L10 0" w={2.2} />
    </>
  ),
  chair: ({ c = "ochre" }) => (
    <>
      <L d="M-8 -60 L-8 0 M-8 -32 L10 -32 L10 0" w={2} />
      <W d="M-8 -34 L10 -34 L10 -30 L-8 -30 Z" c={c} o={0.5} />
    </>
  ),
  sofa: ({ c = "copper" }) => (
    <WL d="M-48 -8 L-48 -40 C-48 -46 -40 -46 -40 -40 L-40 -30 L40 -30 L40 -40 C40 -46 48 -46 48 -40 L48 -8 Z M-40 -30 L-40 -52 L40 -52 L40 -30" c={c} o={0.4} />
  ),
  bed: ({ c = "cobalt" }) => (
    <>
      <L d="M-50 0 L-50 -46 M50 0 L50 -30 M-50 -22 L50 -22" w={2.2} />
      <WL d="M-46 -30 C-46 -38 -32 -38 -30 -30 Z" c="ochre" o={0.2} w={1.6} />
      <WL d="M-30 -36 L48 -32 L48 -22 L-30 -22 Z" c={c} o={0.35} />
    </>
  ),
  /** Someone lying in bed, ill or asleep. */
  bedperson: ({ c = "cobalt" }) => (
    <>
      <L d="M-50 0 L-50 -46 M50 0 L50 -30 M-50 -22 L50 -22" w={2.2} />
      <WL d="M-47 -30 C-47 -38 -30 -38 -28 -30 Z" c="ochre" o={0.2} w={1.6} />
      <circle cx={-34} cy={-36} r={7.5} fill="var(--tile)" stroke={INK} strokeWidth={2} />
      <W d="M-41 -38 C-40 -46 -28 -46 -27 -38 C-30 -41 -38 -41 -41 -38 Z" c="cobalt" o={0.6} />
      <WL d="M-26 -38 C0 -46 30 -42 48 -34 L48 -22 L-26 -22 Z" c={c} o={0.38} />
    </>
  ),
  wardrobe: ({ c = "ochre" }) => <WL d="M-24 0 L-24 -96 L24 -96 L24 0 Z M0 -96 L0 0 M-4 -50 L-4 -44 M4 -50 L4 -44" c={c} o={0.3} />,
  /** An open wardrobe with a suit and tie inside. */
  wardrobeopen: () => (
    <>
      <WL d="M-26 0 L-26 -100 L26 -100 L26 0 Z" c="ochre" o={0.2} />
      <L d="M-26 -100 L-40 -94 L-40 -6 L-26 0 M26 -100 L40 -94 L40 -6 L26 0 M-22 -88 L22 -88" w={1.8} />
      <WL d="M-16 -88 L-6 -88 L-4 -40 L-18 -40 Z" c="cobalt" o={0.5} w={1.6} />
      <WL d="M4 -88 L14 -88 L16 -50 L2 -50 Z" c="manganese" o={0.4} w={1.6} />
      <WL d="M9 -84 L11 -84 L12 -66 L10 -62 L8 -66 Z" c="iron" o={0.6} w={1} />
    </>
  ),
  fridge: ({ v }) => (
    <>
      <WL d="M-18 0 L-18 -88 L18 -88 L18 0 Z M-18 -56 L18 -56 M12 -76 L12 -66 M12 -46 L12 -36" c="cobalt" o={0.12} />
      {v === "note" ? <WL d="M-10 -82 L4 -82 L4 -66 L-10 -66 Z" c="ochre" o={0.35} w={1.2} /> : null}
    </>
  ),
  stove: () => (
    <>
      <WL d="M-26 0 L-26 -40 L26 -40 L26 0 Z M-18 -30 L18 -30 L18 -8 L-18 -8 Z" c="cobalt" o={0.15} />
      <WL d="M-14 -40 L-14 -56 L14 -56 L14 -40 Z M-18 -56 L18 -56" c="cobalt" o={0.4} />
      <L d="M-6 -62 C-10 -68 -2 -72 -6 -78 M4 -62 C0 -68 8 -72 4 -78" w={1.4} o={0.6} />
    </>
  ),
  counter: ({ c = "ochre" }) => <WL d="M-70 0 L-70 -42 L70 -42 L70 0 Z M-70 -36 L70 -36" c={c} o={0.3} />,
  lamp: () => (
    <>
      <L d="M0 0 L0 -70 M-10 0 L10 0" w={2} />
      <WL d="M-12 -70 L12 -70 L7 -86 L-7 -86 Z" c="ochre" o={0.5} />
    </>
  ),
  plant: () => (
    <>
      <WL d="M-9 0 L-11 -16 L11 -16 L9 0 Z" c="iron" o={0.45} />
      <WL d="M0 -16 C-14 -24 -14 -40 -4 -44 C-2 -34 0 -26 0 -16 C2 -30 8 -40 16 -40 C14 -28 8 -20 0 -16" c="copper" o={0.5} />
    </>
  ),
  shelves: ({ v = "grocery" }) => (
    <>
      <L d="M-60 0 L-60 -110 M60 0 L60 -110 M-60 -110 L60 -110 M-60 -74 L60 -74 M-60 -38 L60 -38" w={1.8} />
      {[-110, -74, -38].map((y) =>
        Array.from({ length: 8 }, (_, i) => {
          const x = -54 + i * 14;
          const c: Glaze = (["iron", "ochre", "copper", "cobalt", "manganese"] as Glaze[])[(i + y) % 5 < 0 ? -((i + y) % 5) : (i + y) % 5];
          if (v === "books") return <WL key={`${y}${i}`} d={rect(x, y + 6, 9, 30)} c={c} o={0.4} w={1.2} />;
          if (v === "bread") return <WL key={`${y}${i}`} d={`M${x - 1} ${y + 34} C${x - 1} ${y + 22} ${x + 11} ${y + 22} ${x + 11} ${y + 34} Z`} c="ochre" o={0.5} w={1.2} />;
          if (v === "bottles") return <WL key={`${y}${i}`} d={`M${x + 2} ${y + 34} L${x + 2} ${y + 18} L${x + 4} ${y + 14} L${x + 4} ${y + 8} L${x + 6} ${y + 8} L${x + 6} ${y + 14} L${x + 8} ${y + 18} L${x + 8} ${y + 34} Z`} c={c} o={0.4} w={1} />;
          return <WL key={`${y}${i}`} d={rect(x, y + 16, 10, 18)} c={c} o={0.4} w={1.2} />;
        }),
      )}
    </>
  ),
  /** A market stall with an awning; v: veg, fruit, fish, cheese, flowers. */
  stall: ({ v = "veg", c = "iron" }) => (
    <>
      <L d="M-46 0 L-46 -78 M46 0 L46 -78" w={2} />
      <WL d="M-52 -78 L52 -78 L48 -66 L-48 -66 Z" c={c} o={0.5} />
      <L d="M-36 -78 L-34 -66 M-18 -78 L-17 -66 M0 -78 L0 -66 M18 -78 L17 -66 M36 -78 L34 -66" w={1} />
      <WL d="M-48 -36 L48 -36 L48 -30 L-48 -30 Z" c="ochre" o={0.35} />
      {v === "fish"
        ? [-30, -8, 14, 34].map((x) => <WL key={x} d={`M${x - 10} -42 C${x - 4} -48 ${x + 6} -48 ${x + 8} -42 L${x + 12} -46 L${x + 12} -38 L${x + 8} -42 C${x + 6} -36 ${x - 4} -36 ${x - 10} -42 Z`} c="cobalt" o={0.35} w={1.2} />)
        : v === "cheese"
          ? [-28, 0, 28].map((x) => <WL key={x} d={`M${x - 12} -36 L${x - 12} -46 C${x - 12} -52 ${x + 12} -52 ${x + 12} -46 L${x + 12} -36 Z`} c="ochre" o={0.6} w={1.3} />)
          : v === "flowers"
            ? [-34, -17, 0, 17, 34].map((x, i) => (
                <g key={x}>
                  <L d={`M${x} -36 L${x} -50`} w={1.2} />
                  <W d={circle(x, -53, 5)} c={(["iron", "ochre", "manganese", "iron", "ochre"] as Glaze[])[i]} o={0.7} />
                </g>
              ))
            : [-34, -20, -6, 8, 22, 36].map((x, i) => <WL key={x} d={circle(x, -41, 5.5)} c={(v === "fruit" ? ["ochre", "iron", "copper"] : ["iron", "copper", "ochre"])[i % 3] as Glaze} o={0.55} w={1.2} />)}
    </>
  ),
  trolley: () => (
    <>
      <L d="M-26 -50 L-20 -50 L-14 -16 L20 -16 L24 -40 L-18 -40" w={2} />
      <L d="M-16 -28 L22 -28 M-6 -40 L-4 -16 M8 -40 L8 -16" w={1} o={0.6} />
      <circle cx={-10} cy={-6} r={4} fill="none" stroke={INK} strokeWidth={1.8} />
      <circle cx={16} cy={-6} r={4} fill="none" stroke={INK} strokeWidth={1.8} />
    </>
  ),
  /* ---------------- transport ---------------- */
  bike: ({ c = "iron" }) => (
    <>
      <circle cx={-20} cy={-14} r={14} fill="none" stroke={INK} strokeWidth={2} />
      <circle cx={22} cy={-14} r={14} fill="none" stroke={INK} strokeWidth={2} />
      <L d="M-20 -14 L-6 -38 L16 -38 L22 -14 M-6 -38 L2 -14 L16 -38 M-8 -44 L0 -44 M14 -38 L12 -48 L20 -50" w={2.2} />
      <W d="M-20 -14 L-6 -38 L16 -38 L2 -14 Z" c={c} o={0.25} />
    </>
  ),
  cargobike: ({ v }) => (
    <>
      <circle cx={-40} cy={-12} r={12} fill="none" stroke={INK} strokeWidth={2} />
      <circle cx={34} cy={-12} r={12} fill="none" stroke={INK} strokeWidth={2} />
      <WL d="M-52 -14 L-52 -44 L-14 -44 L-14 -14 Z" c="ochre" o={0.4} />
      <L d="M-14 -24 L10 -24 L18 -46 L34 -12 M10 -24 L26 -46 M16 -52 L24 -52 M26 -46 L24 -56 L32 -58" w={2.2} />
      {v === "boxes" ? (
        <>
          <WL d="M-50 -44 L-30 -44 L-30 -62 L-50 -62 Z M-30 -44 L-16 -44 L-16 -56 L-30 -56 Z" c="ochre" o={0.5} w={1.6} />
          <WL d="M-46 -62 L-30 -62 L-30 -74 L-46 -74 Z" c="ochre" o={0.5} w={1.6} />
        </>
      ) : null}
    </>
  ),
  car: ({ c = "cobalt" }) => (
    <>
      <WL d="M-40 -10 L-40 -26 L-28 -28 L-18 -42 L18 -42 L28 -28 L40 -26 L40 -10 Z M-16 -38 L-6 -38 L-6 -28 L-24 -28 Z M0 -38 L14 -38 L22 -28 L0 -28 Z" c={c} o={0.35} />
      <circle cx={-24} cy={-10} r={7} fill="var(--tile)" stroke={INK} strokeWidth={2} />
      <circle cx={24} cy={-10} r={7} fill="var(--tile)" stroke={INK} strokeWidth={2} />
    </>
  ),
  bus: ({ c = "ochre" }) => (
    <>
      <WL d="M-70 -10 L-70 -64 L66 -64 L70 -54 L70 -10 Z" c={c} o={0.4} />
      {[-62, -40, -18, 4, 26].map((x) => <WL key={x} d={rect(x, -58, 18, 18)} c="cobalt" o={0.12} w={1.4} />)}
      <WL d="M48 -58 L64 -58 L66 -40 L48 -40 Z" c="cobalt" o={0.12} w={1.4} />
      <circle cx={-44} cy={-10} r={8} fill="var(--tile)" stroke={INK} strokeWidth={2} />
      <circle cx={44} cy={-10} r={8} fill="var(--tile)" stroke={INK} strokeWidth={2} />
    </>
  ),
  train: ({ c = "ochre" }) => (
    <>
      <WL d="M-110 -12 L-110 -66 L80 -66 C100 -66 110 -50 112 -30 L112 -12 Z" c={c} o={0.45} />
      <W d="M-110 -30 L112 -30 L112 -24 L-110 -24 Z" c="cobalt" o={0.5} />
      {[-100, -70, -40, -10, 20, 50].map((x) => <WL key={x} d={rect(x, -58, 22, 18)} c="cobalt" o={0.12} w={1.4} />)}
      <WL d="M84 -58 L100 -58 C104 -54 106 -48 106 -42 L84 -42 Z" c="cobalt" o={0.12} w={1.4} />
      {[-90, -60, 50, 80].map((x) => <circle key={x} cx={x} cy={-8} r={6} fill="var(--tile)" stroke={INK} strokeWidth={1.8} />)}
    </>
  ),
  tram: () => (
    <>
      <WL d="M-60 -10 L-60 -60 L60 -60 L60 -10 Z" c="ochre" o={0.35} />
      {[-52, -26, 0, 26].map((x) => <WL key={x} d={rect(x, -54, 20, 18)} c="cobalt" o={0.12} w={1.4} />)}
      <L d="M0 -60 L-10 -74 L10 -78" w={1.6} />
      <circle cx={-36} cy={-8} r={5} fill="var(--tile)" stroke={INK} strokeWidth={1.8} />
      <circle cx={36} cy={-8} r={5} fill="var(--tile)" stroke={INK} strokeWidth={1.8} />
    </>
  ),
  boat: ({ c = "copper" }) => (
    <>
      <WL d="M-44 -16 L44 -16 L36 0 L-38 0 Z" c={c} o={0.4} />
      <WL d="M-26 -16 L-26 -30 L20 -30 L20 -16" c="cobalt" o={0.12} w={1.6} />
    </>
  ),
  ferry: () => (
    <>
      <WL d="M-80 -18 L80 -18 L70 0 L-72 0 Z" c="cobalt" o={0.35} />
      <WL d="M-56 -18 L-56 -40 L50 -40 L50 -18 Z" c="cobalt" o={0.1} />
      <WL d="M-30 -40 L-30 -54 L16 -54 L16 -40 Z" c="cobalt" o={0.1} />
      <WL d="M-2 -54 L-2 -66 L8 -66 L8 -54 Z" c="iron" o={0.5} />
      {[-46, -30, -14, 2, 18, 34].map((x) => <WL key={x} d={rect(x, -34, 8, 8)} c="cobalt" o={0.25} w={1} />)}
    </>
  ),
  sailship: () => (
    <>
      <WL d="M-70 -30 L74 -30 C66 -8 54 0 0 0 C-46 0 -60 -10 -70 -30 Z M-70 -30 L-74 -44 L-50 -36" c="ochre" o={0.45} />
      <L d="M-36 -30 L-36 -150 M8 -30 L8 -170 M48 -30 L48 -130" w={2} />
      {[
        [-36, -136, 22],
        [-36, -96, 26],
        [8, -158, 24],
        [8, -118, 30],
        [8, -72, 32],
        [48, -118, 18],
        [48, -84, 22],
      ].map(([x, y, w], i) => (
        <WL key={i} d={`M${x - w} ${y} C${x - w / 2} ${y + 4} ${x + w / 2} ${y + 4} ${x + w} ${y} L${x + w - 2} ${y + 30} C${x + w / 2} ${y + 34} ${x - w / 2} ${y + 34} ${x - w + 2} ${y + 30} Z`} c="cobalt" o={0.08} w={1.6} />
      ))}
      <WL d="M8 -170 L24 -166 L8 -162 Z" c="iron" o={0.6} w={1} />
    </>
  ),
  plane: () => <WL d="M-40 -4 L30 -4 C40 -4 44 0 40 4 L-30 4 Z M-6 -4 L-20 -26 L-12 -26 L8 -4 M-6 4 L-16 20 L-8 20 L8 4 M-36 -4 L-42 -16 L-34 -16 L-28 -4" c="cobalt" o={0.25} />,
  /* ---------------- buildings and outdoors ---------------- */
  windmill: () => (
    <>
      <WL d="M-14 0 L-9 -64 L9 -64 L14 0 Z M-4 0 L-4 -14 C-4 -20 4 -20 4 -14 L4 0" c="cobalt" o={0.2} />
      <WL d="M-11 -64 L0 -76 L11 -64 Z" c="cobalt" o={0.3} />
      <g transform="translate(0 -68) rotate(20)">
        {[0, 90, 180, 270].map((r) => (
          <g key={r} transform={`rotate(${r})`}>
            <L d="M0 0 L0 -50" w={2} />
            <WL d="M1 -12 L10 -12 L10 -48 L1 -48 Z M1 -24 L10 -24 M1 -36 L10 -36" c="cobalt" o={0.12} w={1.1} />
          </g>
        ))}
      </g>
      <Dot x={0} y={-68} r={2.4} />
    </>
  ),
  tree: ({ c = "copper" }) => (
    <>
      <L d="M0 0 L0 -40 M0 -30 L-8 -38 M0 -34 L8 -44" w={2.6} />
      <WL d="M0 -38 C-26 -38 -30 -62 -16 -70 C-16 -88 10 -92 16 -76 C32 -72 30 -42 0 -38 Z" c={c} o={0.38} />
    </>
  ),
  bigtree: ({ c = "copper" }) => (
    <>
      <L d="M0 0 L0 -60 M0 -46 L-12 -58 M0 -52 L12 -66" w={3.2} />
      <WL d="M0 -56 C-40 -56 -46 -92 -26 -104 C-24 -130 14 -136 24 -112 C48 -106 46 -60 0 -56 Z" c={c} o={0.38} />
    </>
  ),
  lamppost: () => <L d="M0 0 L0 -96 C0 -104 12 -104 14 -98 M10 -98 L18 -98 L16 -92 L12 -92 Z" w={2} />,
  bench: () => <L d="M-30 -18 L30 -18 M-30 -30 L30 -30 M-26 -18 L-26 0 M26 -18 L26 0" w={2.2} />,
  door: ({ t, c = "copper" }) => (
    <>
      <WL d="M-18 0 L-18 -76 C-18 -86 18 -86 18 -76 L18 0 Z" c={c} o={0.4} />
      <Dot x={10} y={-38} r={2} />
      {t ? (
        <>
          <WL d={rect(-7, -70, 14, 10)} c="ochre" o={0.2} w={1} />
          <Txt x={0} y={-62} t={t} size={8} />
        </>
      ) : null}
    </>
  ),
  window: ({ v }) => (
    <>
      <WL d={rect(-26, -30, 52, 60)} c={v === "night" ? "ochre" : "cobalt"} o={v === "night" ? 0.45 : 0.1} />
      <L d="M0 -30 L0 30 M-26 0 L26 0" w={1.6} />
    </>
  ),
  bigwindow: ({ v }) => (
    <>
      <WL d={rect(-40, -36, 80, 72)} c={v === "night" ? "ochre" : "cobalt"} o={v === "night" ? 0.45 : 0.1} />
      <L d="M0 -36 L0 36 M-40 0 L40 0" w={1.6} />
    </>
  ),
  shopfront: ({ c = "copper", t }) => (
    <>
      <WL d="M-60 0 L-60 -80 L60 -80 L60 0 Z" c={c} o={0.25} />
      <WL d="M-52 -64 L10 -64 L10 -10 L-52 -10 Z" c="cobalt" o={0.1} />
      <WL d="M22 0 L22 -64 L50 -64 L50 0 Z" c={c} o={0.25} />
      <WL d="M-60 -80 L60 -80 L56 -92 L-56 -92 Z" c={c} o={0.5} />
      {t ? <Txt x={0} y={-71} t={t} size={10} /> : null}
    </>
  ),
  townhall: () => (
    <>
      <WL d="M-60 0 L-60 -70 L60 -70 L60 0 Z" c="cobalt" o={0.12} />
      <WL d="M-66 -70 L0 -100 L66 -70 Z" c="iron" o={0.35} />
      <WL d="M-10 -100 L-10 -140 L10 -140 L10 -100 Z" c="cobalt" o={0.12} />
      <WL d="M-12 -140 L0 -158 L12 -140 Z" c="iron" o={0.35} />
      <circle cx={0} cy={-122} r={6} fill="var(--tile)" stroke={INK} strokeWidth={1.6} />
      {[-44, -22, 22, 44].map((x) => <WL key={x} d={`M${x - 7} -20 L${x - 7} -50 C${x - 7} -58 ${x + 7} -58 ${x + 7} -50 L${x + 7} -20 Z`} c="cobalt" o={0.12} w={1.4} />)}
      <WL d="M-10 0 L-10 -38 C-10 -46 10 -46 10 -38 L10 0 Z" c="copper" o={0.4} w={1.6} />
    </>
  ),
  church: () => (
    <>
      <WL d="M-50 0 L-50 -70 L50 -70 L50 0 Z" c="cobalt" o={0.12} />
      <WL d="M-56 -70 L0 -96 L56 -70 Z" c="iron" o={0.3} />
      <WL d="M30 -70 L30 -130 L50 -130 L50 -70 Z M28 -130 L40 -160 L52 -130 Z" c="cobalt" o={0.15} />
      <WL d="M-12 0 L-12 -36 C-12 -48 12 -48 12 -36 L12 0 Z" c="copper" o={0.4} />
      <WL d="M-36 -30 L-36 -50 C-36 -58 -26 -58 -26 -50 L-26 -30 Z M26 -30 L26 -50 C26 -58 36 -58 36 -50 L36 -30 Z" c="ochre" o={0.35} w={1.4} />
    </>
  ),
  /** The canal house with a tall tree: the Anne Frank House on the Prinsengracht. */
  canalhouse: () => (
    <>
      <WL d="M-30 0 L-30 -120 L-20 -120 L-20 -130 L-10 -130 L-10 -140 L10 -140 L10 -130 L20 -130 L20 -120 L30 -120 L30 0 Z" c="cobalt" o={0.18} />
      {[-100, -74, -48, -22].map((y) => [-18, 2].map((x) => <WL key={`${x}${y}`} d={rect(x, y, 14, 18)} c="cobalt" o={0.1} w={1.2} />))}
    </>
  ),
  dyke: () => <WL d="M-120 0 L-60 -40 L60 -40 L120 0 Z" c="copper" o={0.3} />,
  /** The storm-surge barrier in Zeeland: piers with gates. */
  barrier: () => (
    <>
      {[-90, -54, -18, 18, 54, 90].map((x) => <WL key={x} d={rect(x - 6, -60, 12, 60)} c="cobalt" o={0.25} w={1.6} />)}
      <L d="M-100 -60 L100 -60" w={2.4} />
      {[-72, -36, 0, 36, 72].map((x) => <WL key={x} d={rect(x - 12, -46, 24, 30)} c="cobalt" o={0.12} w={1.2} />)}
    </>
  ),
  lighthouse: () => (
    <>
      <WL d="M-12 0 L-8 -80 L8 -80 L12 0 Z" c="iron" o={0.5} />
      <W d="M-11 -24 L11 -24 L10.5 -40 L-10.5 -40 Z M-9.5 -56 L9.5 -56 L9 -70 L-9 -70 Z" c="cobalt" o={0.15} />
      <WL d="M-9 -80 L9 -80 L9 -94 L-9 -94 Z M-11 -94 L0 -102 L11 -94 Z" c="ochre" o={0.4} />
    </>
  ),
  /** Bologna's two towers. */
  towers: () => (
    <>
      <WL d="M-22 0 L-20 -150 L-6 -150 L-4 0 Z" c="iron" o={0.35} />
      <WL d="M6 0 L10 -90 L22 -90 L26 0 Z" c="iron" o={0.35} />
      <L d="M-20 -150 L-20 -156 L-6 -156 L-6 -150" w={1.6} />
    </>
  ),
  vesuvius: () => (
    <>
      <WL d="M-140 0 L-60 -60 L-30 -70 L-10 -62 L10 -74 L36 -66 L140 0 Z" c="manganese" o={0.22} />
      <L d="M-30 -70 C-24 -64 -14 -66 -10 -62" w={1.4} o={0.6} />
    </>
  ),
  mountains: () => <WL d="M-160 0 L-90 -80 L-60 -50 L-20 -100 L30 -40 L70 -70 L160 0 Z M-30 -88 L-20 -100 L-10 -88 L-16 -84 Z" c="cobalt" o={0.16} />,
  /* ---------------- sky and weather ---------------- */
  sun: () => (
    <>
      <WL d={circle(0, 0, 14)} c="ochre" o={0.55} />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        return <L key={i} d={`M${(Math.cos(a) * 19).toFixed(1)} ${(Math.sin(a) * 19).toFixed(1)} L${(Math.cos(a) * 26).toFixed(1)} ${(Math.sin(a) * 26).toFixed(1)}`} w={2} />;
      })}
    </>
  ),
  moon: () => <WL d="M6 -16 C-10 -16 -14 12 6 16 C-14 20 -26 -4 -12 -16 C-6 -20 0 -18 6 -16 Z" c="ochre" o={0.5} />,
  stars: () => (
    <>
      {[[-40, -6], [-10, 8], [26, -10], [52, 6], [-64, 10]].map(([x, y], i) => (
        <L key={i} d={`M${x} ${y - 4} L${x} ${y + 4} M${x - 4} ${y} L${x + 4} ${y}`} w={1.4} />
      ))}
    </>
  ),
  cloud: () => <WL d="M-30 8 C-40 8 -40 -6 -28 -6 C-28 -20 -8 -22 -4 -12 C2 -24 24 -20 22 -6 C34 -6 34 8 24 8 Z" c="cobalt" o={0.12} />,
  raincloud: () => (
    <>
      <WL d="M-30 8 C-40 8 -40 -6 -28 -6 C-28 -20 -8 -22 -4 -12 C2 -24 24 -20 22 -6 C34 -6 34 8 24 8 Z" c="cobalt" o={0.35} />
      <L d="M-20 16 L-24 28 M-6 16 L-10 28 M8 16 L4 28 M22 16 L18 28 M-13 32 L-17 44 M1 32 L-3 44 M15 32 L11 44" w={1.6} />
    </>
  ),
  wind: () => <L d="M-40 -10 C-10 -10 10 -14 14 -22 C16 -30 4 -30 4 -22 M-40 2 C0 2 24 2 30 10 C34 18 22 20 20 12 M-30 14 L10 14" w={1.8} />,
  snow: () => (
    <>
      {[[-50, -10], [-20, 10], [10, -6], [40, 12], [60, -14], [-36, 24]].map(([x, y], i) => (
        <L key={i} d={`M${x} ${y - 4} L${x} ${y + 4} M${x - 3.5} ${y - 2} L${x + 3.5} ${y + 2} M${x - 3.5} ${y + 2} L${x + 3.5} ${y - 2}`} w={1.2} />
      ))}
    </>
  ),
  fireworks: ({ c = "iron" }) => (
    <>
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i * Math.PI) / 6;
        return <L key={i} d={`M${(Math.cos(a) * 6).toFixed(1)} ${(Math.sin(a) * 6).toFixed(1)} L${(Math.cos(a) * 20).toFixed(1)} ${(Math.sin(a) * 20).toFixed(1)}`} w={1.8} />;
      })}
      <W d={circle(0, 0, 18)} c={c} o={0.25} />
    </>
  ),
  rainbow: () => <L d="M-60 0 C-60 -50 60 -50 60 0 M-50 0 C-50 -40 50 -40 50 0" w={3} o={0.5} />,
  /* ---------------- on the wall ---------------- */
  clock: ({ t = "3:00" }) => (
    <>
      <WL d={circle(0, 0, 13)} c="ochre" o={0.2} />
      <L d={clockHands(t, 13)} w={2} />
      <Dot x={0} y={0} r={1.6} />
    </>
  ),
  alarmclock: ({ t = "4:30" }) => (
    <>
      <WL d={circle(0, -14, 11)} c="iron" o={0.3} />
      <L d="M-10 -24 L-6 -28 M10 -24 L6 -28 M-7 -4 L-9 0 M7 -4 L9 0" w={2} />
      <g transform="translate(0 -14)">
        <L d={clockHands(t, 10)} w={1.8} />
      </g>
    </>
  ),
  calendar: ({ c = "iron" }) => (
    <>
      <WL d={rect(-22, -26, 44, 52)} c="cobalt" o={0.06} />
      <W d={rect(-22, -26, 44, 10)} c={c} o={0.5} />
      {[0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4].map((k) => <Dot key={`${r}${k}`} x={-16 + k * 8} y={-8 + r * 9} r={1.2} />))}
      <W d={circle(0, 1, 4)} c={c} o={0.6} />
    </>
  ),
  /** A note, poster or sign on paper; t shows a short label (a number, a time). */
  note: ({ c = "ochre", t }) => (
    <>
      <WL d="M-14 -18 L14 -18 L14 18 L-14 18 Z" c={c} o={0.18} w={1.6} />
      {t ? <Txt x={0} y={-5} t={t} size={8} /> : <L d="M-9 -10 L9 -10" w={1.2} />}
      <L d="M-9 0 L9 0 M-9 6 L6 6 M-9 12 L3 12" w={1.2} />
    </>
  ),
  poster: ({ c = "iron", t }) => (
    <>
      <WL d={rect(-24, -32, 48, 64)} c={c} o={0.22} />
      {t ? <Txt x={0} y={-14} t={t} size={10} /> : <WL d={circle(0, -12, 9)} c={c} o={0.4} w={1.2} />}
      <L d="M-16 6 L16 6 M-16 14 L16 14 M-16 22 L8 22" w={1.4} />
    </>
  ),
  board: ({ t }) => (
    <>
      <WL d={rect(-70, -34, 140, 68)} c="copper" o={0.35} />
      {t ? <Txt x={0} y={t.length > 8 ? 4 : 6} t={t} size={t.length > 8 ? 12 : 20} /> : null}
    </>
  ),
  frame: ({ c = "copper", v }) => (
    <>
      <WL d={rect(-26, -20, 52, 40)} c="ochre" o={0.35} w={2.4} />
      <W d={rect(-20, -14, 40, 28)} c={c} o={0.3} />
      {v === "sunflowers" ? (
        <>
          <WL d="M-6 14 L-8 2 L8 2 L6 14 Z" c="ochre" o={0.5} w={1} />
          {[[-6, -6], [2, -9], [8, -3]].map(([x, y], i) => <W key={i} d={circle(x, y, 3.5)} c="ochre" o={0.8} />)}
        </>
      ) : v === "portrait" ? (
        <>
          <W d={circle(0, -3, 5)} c="cobalt" o={0.4} />
          <W d="M-9 14 C-9 4 9 4 9 14 Z" c="cobalt" o={0.4} />
        </>
      ) : (
        <L d="M-20 6 L-8 -4 L2 4 L10 -2 L20 6" w={1.4} />
      )}
    </>
  ),
  bunting: () => (
    <>
      <L d="M-150 0 C-75 18 75 18 150 0" w={1.4} />
      {Array.from({ length: 13 }, (_, i) => {
        const x = -138 + i * 23;
        const y = Math.round(16 * (1 - Math.pow(x / 150, 2)));
        return <WL key={i} d={`M${x - 7} ${y - 1} L${x + 7} ${y + 1} L${x} ${y + 14} Z`} c={(["iron", "ochre", "cobalt", "copper"] as Glaze[])[i % 4]} o={0.55} w={1} />;
      })}
    </>
  ),
  lights: () => (
    <>
      <L d="M-150 0 C-75 14 75 14 150 0" w={1} />
      {Array.from({ length: 16 }, (_, i) => {
        const x = -142 + i * 19;
        const y = Math.round(12 * (1 - Math.pow(x / 150, 2))) + 4;
        return <W key={i} d={circle(x, y, 3)} c="ochre" o={0.8} />;
      })}
    </>
  ),
  /** The rain radar on a phone screen, as on Buienradar. */
  phone: ({ v }) => (
    <>
      <WL d="M-14 -26 L14 -26 L14 26 L-14 26 Z" c="cobalt" o={0.1} w={2} />
      {v === "chat" ? (
        <>
          <WL d="M-10 -18 L4 -18 L4 -10 L-10 -10 Z" c="cobalt" o={0.3} w={1} />
          <WL d="M-4 -6 L10 -6 L10 2 L-4 2 Z" c="copper" o={0.4} w={1} />
          <WL d="M-10 6 L6 6 L6 14 L-10 14 Z" c="cobalt" o={0.3} w={1} />
        </>
      ) : v === "radar" ? (
        <>
          <W d="M-12 -14 C-4 -20 8 -12 12 -4 L12 10 C2 6 -6 12 -12 4 Z" c="copper" o={0.4} />
          <W d="M-2 -6 C2 -10 8 -6 8 -2 C4 2 0 0 -2 -6 Z" c="iron" o={0.5} />
        </>
      ) : v === "call" ? (
        <>
          <W d={circle(0, -6, 6)} c="cobalt" o={0.4} />
          <W d="M-10 14 C-10 4 10 4 10 14 Z" c="cobalt" o={0.4} />
        </>
      ) : v === "alert" ? (
        <Txt x={0} y={6} t="!" size={20} />
      ) : (
        <L d="M-8 -14 L8 -14 M-8 -6 L8 -6 M-8 2 L4 2" w={1.2} />
      )}
    </>
  ),
  laptop: ({ v }) => (
    <>
      <WL d="M-26 -4 L-22 -40 L22 -40 L26 -4 Z" c="cobalt" o={0.1} />
      <WL d="M-34 -4 L34 -4 L30 0 L-30 0 Z" c="cobalt" o={0.3} />
      {v === "call" ? (
        <>
          {[-10, 10].map((x) => (
            <g key={x}>
              <W d={circle(x, -26, 4)} c="cobalt" o={0.4} />
              <W d={`M${x - 7} -12 C${x - 7} -20 ${x + 7} -20 ${x + 7} -12 Z`} c="cobalt" o={0.4} />
            </g>
          ))}
        </>
      ) : v === "shoe" ? (
        <WL d="M-12 -16 L-10 -28 L-2 -28 C0 -22 8 -22 14 -18 L14 -14 L-12 -14 Z" c="ochre" o={0.5} w={1.2} />
      ) : v === "mail" ? (
        <WL d="M-12 -32 L12 -32 L12 -14 L-12 -14 Z M-12 -32 L0 -22 L12 -32" c="ochre" o={0.3} w={1.2} />
      ) : (
        <L d="M-16 -32 L16 -32 M-16 -24 L16 -24 M-16 -16 L8 -16" w={1.2} />
      )}
    </>
  ),
  tv: ({ v }) => (
    <>
      <WL d="M-30 -50 L30 -50 L30 -8 L-30 -8 Z" c="cobalt" o={0.12} />
      <L d="M-8 -8 L-12 0 M8 -8 L12 0" w={2} />
      {v === "teletext" ? (
        <>
          <Txt x={-14} y={-38} t="101" size={7} />
          <L d="M-24 -30 L24 -30 M-24 -24 L20 -24 M-24 -18 L24 -18 M-24 -12 L14 -12" w={1.2} />
        </>
      ) : v === "news" ? (
        <>
          <W d={circle(-8, -32, 5)} c="cobalt" o={0.4} />
          <W d="M-17 -14 C-17 -24 1 -24 1 -14 Z" c="cobalt" o={0.4} />
          <W d={rect(6, -42, 18, 14)} c="copper" o={0.4} />
        </>
      ) : (
        <W d="M-24 -18 C-14 -28 -2 -22 8 -30 C14 -34 20 -30 24 -26 L24 -14 L-24 -14 Z" c="copper" o={0.35} />
      )}
    </>
  ),
  radio: () => (
    <>
      <WL d="M-26 0 L-26 -32 C-26 -40 26 -40 26 -32 L26 0 Z" c="ochre" o={0.45} />
      <WL d={circle(-10, -16, 8)} c="cobalt" o={0.12} w={1.4} />
      <L d="M6 -22 L20 -22 M6 -14 L20 -14 M6 -6 L20 -6" w={1.4} />
    </>
  ),
  /* ---------------- small things ---------------- */
  cup: () => <WL d="M-7 -12 L7 -12 L5 0 L-5 0 Z M7 -9 C12 -9 12 -3 6 -3" c="cobalt" o={0.25} w={1.6} />,
  espresso: () => <WL d="M-5 -8 L5 -8 L4 0 L-4 0 Z M5 -6 C8 -6 8 -2 4 -2 M-9 0 L9 0" c="cobalt" o={0.3} w={1.4} />,
  beer: () => (
    <>
      <WL d="M-6 -20 L6 -20 L5 0 L-5 0 Z" c="ochre" o={0.55} w={1.6} />
      <W d="M-6 -20 C-6 -25 6 -25 6 -20 Z" c="cobalt" o={0.08} />
    </>
  ),
  wine: ({ c = "iron" }) => <WL d="M-5 0 L-5 -24 C-5 -28 -2 -30 -2 -34 L-2 -40 L2 -40 L2 -34 C2 -30 5 -28 5 -24 L5 0 Z" c={c} o={0.5} w={1.6} />,
  glass: ({ c = "iron" }) => (
    <>
      <WL d="M-6 -24 L6 -24 C6 -14 0 -12 0 -12 C0 -12 -6 -14 -6 -24 Z" c={c} o={0.4} w={1.4} />
      <L d="M0 -12 L0 0 M-4 0 L4 0" w={1.4} />
    </>
  ),
  plate: ({ c = "ochre" }) => (
    <>
      <L d="M-14 0 L14 0" w={2} />
      <W d="M-10 -1 C-8 -8 8 -8 10 -1 Z" c={c} o={0.6} />
    </>
  ),
  pot: ({ v }) => (
    <>
      <WL d="M-16 0 L-16 -20 L16 -20 L16 0 Z M-20 -20 L20 -20 M-16 -14 L-22 -14 M16 -14 L22 -14" c="cobalt" o={0.3} />
      {v === "spoon" ? <L d="M4 -20 L8 -42" w={2} /> : null}
      <L d="M-6 -26 C-10 -32 -2 -36 -6 -42 M6 -26 C2 -32 10 -36 6 -42" w={1.2} o={0.5} />
    </>
  ),
  pan: () => <WL d="M-14 0 L14 0 L16 -8 L-16 -8 Z M16 -6 L32 -10" c="cobalt" o={0.35} />,
  bowl: ({ c = "ochre", v }) => (
    <>
      <WL d="M-16 -10 C-16 2 16 2 16 -10 Z" c="cobalt" o={0.15} />
      {v === "balls" ? [-8, 0, 8, -4, 4].map((x, i) => <WL key={i} d={circle(x, i < 3 ? -13 : -19, 4.5)} c="ochre" o={0.6} w={1} />) : <W d="M-14 -10 C-10 -15 10 -15 14 -10 Z" c={c} o={0.6} />}
    </>
  ),
  bread: () => <WL d="M-16 0 C-18 -12 -8 -16 0 -16 C8 -16 18 -12 16 0 Z M-8 -12 L-4 -6 M0 -14 L4 -8 M8 -12 L10 -7" c="ochre" o={0.55} w={1.6} />,
  baguettes: () => (
    <>
      <WL d="M-6 0 L10 -40 C12 -44 16 -42 15 -38 L0 2 Z" c="ochre" o={0.55} w={1.5} />
      <WL d="M2 0 L18 -36 C20 -40 24 -38 23 -34 L8 2 Z" c="ochre" o={0.55} w={1.5} />
    </>
  ),
  rolls: () => (
    <>
      <WL d="M-22 0 L-26 -12 L26 -12 L22 0 Z" c="ochre" o={0.25} />
      {[-14, 0, 14, -7, 7].map((x, i) => <WL key={i} d={circle(x, i < 3 ? -16 : -23, 6)} c="ochre" o={0.55} w={1.2} />)}
    </>
  ),
  cheese: () => <WL d="M-18 0 L-18 -12 C-18 -20 18 -20 18 -12 L18 0 Z M-18 -12 C-18 -6 18 -6 18 -12" c="ochre" o={0.6} />,
  tomatoes: () => <>{[-10, 0, 10, -5, 5].map((x, i) => <WL key={i} d={circle(x, i < 3 ? -5 : -13, 5)} c="iron" o={0.6} w={1.2} />)}</>,
  carrots: () => <>{[-8, 0, 8].map((x) => <WL key={x} d={`M${x - 3} -24 L${x + 3} -24 L${x} 0 Z M${x - 2} -24 L${x - 4} -30 M${x + 2} -24 L${x + 4} -30`} c="ochre" o={0.7} w={1.2} />)}</>,
  onions: () => <>{[-8, 8].map((x) => <WL key={x} d={`M${x} -18 C${x - 10} -14 ${x - 10} 0 ${x} 0 C${x + 10} 0 ${x + 10} -14 ${x} -18 L${x} -22`} c="manganese" o={0.4} w={1.4} />)}</>,
  fish: () => <WL d="M-18 0 C-10 -10 8 -10 12 0 L20 -6 L20 6 L12 0 C8 10 -10 10 -18 0 Z" c="cobalt" o={0.35} w={1.6} />,
  apples: () => <>{[-10, 0, 10, -5, 5].map((x, i) => <WL key={i} d={circle(x, i < 3 ? -5 : -13, 5)} c={i % 2 ? "copper" : "iron"} o={0.55} w={1.2} />)}</>,
  pasta: () => <>{[-12, 0, 12].map((x) => <WL key={x} d={rect(x - 5, -22, 10, 22)} c="ochre" o={0.4} w={1.3} />)}</>,
  milk: () => <WL d="M-7 0 L-7 -22 L0 -28 L7 -22 L7 0 Z M-7 -22 L7 -22" c="cobalt" o={0.15} w={1.6} />,
  flowers: ({ c = "iron" }) => (
    <>
      <WL d="M-7 0 L-9 -16 L9 -16 L7 0 Z" c="cobalt" o={0.3} w={1.6} />
      <L d="M0 -16 L-6 -34 M0 -16 L0 -38 M0 -16 L7 -33" w={1.3} />
      {[[-6, -37], [0, -41], [7, -36]].map(([x, y], i) => <W key={i} d={circle(x, y, 4.5)} c={i === 1 ? "ochre" : c} o={0.7} />)}
    </>
  ),
  tulips: () => (
    <>
      {[-12, 0, 12].map((x, i) => (
        <g key={x}>
          <L d={`M${x} 0 L${x} -26`} w={1.6} />
          <WL d={`M${x - 5} -34 C${x - 6} -26 ${x + 6} -26 ${x + 5} -34 L${x + 2} -30 L${x} -36 L${x - 2} -30 Z`} c={(["iron", "ochre", "iron"] as Glaze[])[i]} o={0.6} w={1.2} />
        </g>
      ))}
    </>
  ),
  sunflowers: () => (
    <>
      <WL d="M-8 0 L-10 -20 L10 -20 L8 0 Z" c="ochre" o={0.35} w={1.6} />
      {[[-8, -44], [2, -52], [10, -40]].map(([x, y], i) => (
        <g key={i}>
          <L d={`M0 -20 L${x} ${y}`} w={1.3} />
          <WL d={circle(x, y, 6)} c="ochre" o={0.7} w={1.2} />
          <Dot x={x} y={y} r={2.4} />
        </g>
      ))}
    </>
  ),
  cake: ({ c = "iron", t }) => (
    <>
      <WL d="M-22 0 L-22 -22 L22 -22 L22 0 Z M-22 -12 C-12 -8 12 -16 22 -12" c={c} o={0.4} />
      {t ? <Txt x={0} y={-3} t={t} size={9} /> : null}
      <L d="M-10 -22 L-10 -32 M0 -22 L0 -32 M10 -22 L10 -32" w={1.6} />
      {[-10, 0, 10].map((x) => <W key={x} d={`M${x} -40 C${x - 3} -36 ${x + 3} -36 ${x} -40 Z M${x - 2} -35 C${x - 2} -39 ${x + 2} -39 ${x + 2} -35 C${x + 2} -32 ${x - 2} -32 ${x - 2} -35 Z`} c="ochre" o={0.8} />)}
    </>
  ),
  gift: ({ c = "iron" }) => <WL d="M-14 0 L-14 -22 L14 -22 L14 0 Z M0 -22 L0 0 M-16 -22 L16 -22 M0 -22 C-8 -32 -14 -26 0 -22 C8 -32 14 -26 0 -22" c={c} o={0.4} />,
  parcel: () => <WL d="M-18 0 L-18 -26 L18 -26 L18 0 Z M-18 -26 L-12 -32 L24 -32 L18 -26 M18 0 L24 -6 L24 -32 M-4 -26 L2 -32" c="ochre" o={0.45} />,
  boxes: () => (
    <>
      <WL d="M-30 0 L-30 -26 L2 -26 L2 0 Z M2 0 L2 -20 L30 -20 L30 0 Z" c="ochre" o={0.45} />
      <WL d="M-24 -26 L-24 -48 L0 -48 L0 -26 Z" c="ochre" o={0.45} />
    </>
  ),
  suitcase: ({ c = "copper" }) => <WL d="M-16 0 L-16 -30 L16 -30 L16 0 Z M-6 -30 L-6 -36 L6 -36 L6 -30 M-16 -16 L16 -16" c={c} o={0.45} />,
  backpack: ({ c = "copper" }) => <WL d="M-11 0 L-12 -26 C-12 -34 12 -34 12 -26 L11 0 Z M-8 -14 L8 -14 L8 -4 L-8 -4 Z" c={c} o={0.45} />,
  umbrella: ({ c = "iron" }) => (
    <>
      <WL d="M-26 -50 C-26 -70 26 -70 26 -50 C20 -54 14 -54 9 -50 C4 -54 -4 -54 -9 -50 C-14 -54 -20 -54 -26 -50 Z" c={c} o={0.5} />
      <L d="M0 -64 L0 -14 C0 -8 -6 -8 -6 -12" w={1.8} />
    </>
  ),
  book: ({ c = "copper" }) => <WL d="M-14 0 L-14 -20 L14 -20 L14 0 Z M-10 -20 L-10 0" c={c} o={0.5} />,
  openbook: () => <WL d="M0 -2 C-8 -8 -18 -8 -24 -4 L-24 -26 C-18 -30 -8 -30 0 -24 C8 -30 18 -30 24 -26 L24 -4 C18 -8 8 -8 0 -2 Z M0 -24 L0 -2" c="ochre" o={0.2} />,
  letter: () => <WL d="M-16 -10 L16 -10 L16 10 L-16 10 Z M-16 -10 L0 2 L16 -10" c="ochre" o={0.3} w={1.6} />,
  /** A postcard; v: sheep (Texel) or vesuvius (Naples). */
  postcard: ({ v }) => (
    <>
      <WL d={rect(-28, -18, 56, 36)} c="ochre" o={0.15} />
      {v === "vesuvius" ? (
        <>
          <W d="M-22 12 L-6 -6 L2 -4 L22 12 Z" c="manganese" o={0.4} />
          <W d="M-22 12 L22 12 L22 16 L-22 16 Z" c="cobalt" o={0.4} />
        </>
      ) : (
        <>
          <W d="M-22 12 C-10 2 10 4 22 12 Z" c="copper" o={0.4} />
          {[-8, 8].map((x) => <WL key={x} d={`M${x - 5} 4 C${x - 5} -2 ${x + 5} -2 ${x + 5} 4 Z`} c="cobalt" o={0.05} w={1} />)}
        </>
      )}
    </>
  ),
  ticket: () => <WL d="M-18 -9 L18 -9 L18 -3 C15 -3 15 3 18 3 L18 9 L-18 9 L-18 3 C-15 3 -15 -3 -18 -3 Z M-8 -9 L-8 9" c="ochre" o={0.4} w={1.6} />,
  keys: () => <L d="M-6 -6 a5 5 0 1 0 0.1 0 M-1 -4 L12 6 M8 3 L10 0 M11 5 L13 2" w={1.6} />,
  bins: () => (
    <>
      <WL d="M-34 0 L-36 -40 L-6 -40 L-8 0 Z M-38 -40 L-4 -40 L-4 -46 L-38 -46 Z" c="cobalt" o={0.25} />
      <WL d="M8 0 L6 -40 L36 -40 L34 0 Z M4 -40 L38 -40 L38 -46 L4 -46 Z" c="copper" o={0.5} />
    </>
  ),
  recycling: () => (
    <>
      {(["cobalt", "copper", "ochre", "iron"] as Glaze[]).map((c, i) => (
        <WL key={c} d={`M${-62 + i * 32} 0 L${-64 + i * 32} -40 L${-38 + i * 32} -40 L${-40 + i * 32} 0 Z M${-66 + i * 32} -40 L${-36 + i * 32} -40 L${-36 + i * 32} -44 L${-66 + i * 32} -44 Z`} c={c} o={0.4} />
      ))}
    </>
  ),
  crates: () => (
    <>
      <WL d="M-40 0 L-40 -22 L0 -22 L0 0 Z M0 0 L0 -22 L40 -22 L40 0 Z M-30 -22 L-30 -44 L10 -44 L10 -22 Z" c="ochre" o={0.35} />
      {[-30, -20, 10, 22, -18, -6].map((x, i) => <WL key={i} d={circle(x, i < 4 ? -27 : -49, 4)} c={i % 2 ? "iron" : "copper"} o={0.5} w={1} />)}
    </>
  ),
  shoe: () => (
    <>
      <WL d="M-16 0 L-14 -12 L-4 -12 C0 -6 10 -6 16 -4 L16 0 Z" c="ochre" o={0.5} />
      <WL d="M-4 -12 L4 -30 L8 -28 L0 -10 Z" c="ochre" o={0.8} w={1.2} />
    </>
  ),
  lantern: ({ c = "iron" }) => (
    <>
      <L d="M0 0 L0 -40 L14 -40 L14 -34" w={1.6} />
      <WL d="M6 -34 C6 -44 22 -44 22 -34 L22 -22 C22 -14 6 -14 6 -22 Z" c={c} o={0.6} w={1.4} />
    </>
  ),
  crown: () => <WL d="M-14 0 L-16 -16 L-8 -8 L0 -20 L8 -8 L16 -16 L14 0 Z" c="ochre" o={0.7} />,
  flag: ({ c = "ochre", v }) => (
    <>
      <L d="M0 0 L0 -90" w={2} />
      <WL d={v === "half" ? "M0 -60 L34 -60 L34 -40 L0 -40 Z" : "M0 -90 L34 -90 L34 -70 L0 -70 Z"} c={c} o={0.6} />
    </>
  ),
  wreath: () => (
    <>
      <L d={`M-16 0 A16 16 0 1 0 16 0 A16 16 0 1 0 -16 0`} w={6} o={0.35} />
      <WL d="M-6 14 L6 14 L10 28 L-10 28 Z" c="iron" o={0.5} w={1.2} />
    </>
  ),
  football: () => (
    <>
      <circle cx={0} cy={-8} r={8} fill="var(--tile)" stroke={INK} strokeWidth={1.6} />
      <W d="M-3 -11 L3 -11 L4 -6 L0 -3 L-4 -6 Z" c="cobalt" o={0.6} />
    </>
  ),
  goal: () => <L d="M-50 0 L-50 -50 L50 -50 L50 0 M-46 -46 L46 -46 M-50 -25 L50 -25 M-25 -50 L-25 0 M0 -50 L0 0 M25 -50 L25 0" w={1.4} o={0.5} />,
  hoop: () => (
    <>
      <L d="M0 0 L0 -110 L-24 -110" w={2.4} />
      <WL d={rect(-34, -128, 20, 26)} c="cobalt" o={0.1} w={1.6} />
      <L d="M-34 -106 L-46 -106 M-35 -106 L-38 -94 L-43 -94 L-46 -106" w={1.6} />
    </>
  ),
  basketball: () => (
    <>
      <WL d={circle(0, 0, 7)} c="ochre" o={0.7} w={1.4} />
      <L d="M-7 0 L7 0 M0 -7 L0 7" w={0.9} />
    </>
  ),
  microphone: () => <WL d="M-3 -12 C-3 -18 3 -18 3 -12 L3 -6 C3 -2 -3 -2 -3 -6 Z M0 -2 L0 6" c="cobalt" o={0.5} w={1.4} />,
  guitar: () => <WL d="M-10 0 C-18 -6 -14 -18 -6 -18 C-4 -26 6 -26 6 -18 C14 -18 16 -6 8 0 Z M0 -22 L18 -56" c="ochre" o={0.5} w={1.6} />,
  sax: () => <WL d="M8 -40 L4 -36 L4 -8 C4 4 -14 4 -14 -6 L-12 -10 L-8 -6 C-8 -2 -2 -2 -2 -8 L-2 -36 Z" c="ochre" o={0.6} w={1.4} />,
  violin: () => (
    <>
      <WL d="M0 0 C-12 -2 -12 -14 -6 -16 C-10 -20 -10 -30 0 -30 C10 -30 10 -20 6 -16 C12 -14 12 -2 0 0 Z" c="iron" o={0.5} w={1.4} />
      <L d="M0 -30 L0 -48 M-2 -48 L2 -48" w={1.6} />
    </>
  ),
  violincase: () => <WL d="M-6 0 C-16 0 -16 -18 -8 -22 C-12 -30 -10 -42 0 -42 C10 -42 12 -30 8 -22 C16 -18 16 0 6 0 Z" c="manganese" o={0.45} w={1.6} />,
  sewingmachine: () => (
    <>
      <WL d="M-30 0 L30 0 L30 -6 L-30 -6 Z M-24 -6 L-24 -34 L20 -34 L20 -24 L-14 -24 L-14 -6" c="manganese" o={0.35} />
      <L d="M16 -24 L16 -14 M12 -14 L20 -14" w={1.6} />
      <WL d={circle(22, -34, 5)} c="ochre" o={0.4} w={1.2} />
    </>
  ),
  scissors: () => <L d="M-10 6 a4 4 0 1 0 0.1 0 M-2 10 a4 4 0 1 0 0.1 0 M-8 3 L12 -14 M0 7 L10 -12" w={1.6} />,
  tape: () => <L d="M-30 0 C-20 -6 -10 -2 0 -8 C10 -14 20 -10 30 -14" w={4} o={0.5} />,
  jeans: () => <WL d="M-14 0 L-12 -40 L12 -40 L14 0 L4 0 L0 -26 L-4 0 Z" c="cobalt" o={0.5} />,
  /** A rack of coats in a clothes shop. */
  rack: () => (
    <>
      <L d="M-50 0 L-50 -86 L50 -86 L50 0" w={2} />
      {[-38, -20, -2, 16, 34].map((x, i) => (
        <WL key={x} d={`M${x - 8} -84 L${x + 8} -84 L${x + 10} -36 L${x - 10} -36 Z`} c={(["cobalt", "iron", "copper", "ochre", "manganese"] as Glaze[])[i]} o={0.45} w={1.4} />
      ))}
    </>
  ),
  mirror: () => <WL d="M-12 0 L-12 -80 C-12 -90 12 -90 12 -80 L12 0 Z" c="cobalt" o={0.08} />,
  curtain: ({ c = "manganese" }) => <WL d="M-22 0 L-22 -92 L22 -92 L22 0 C14 -4 6 0 0 -4 C-6 0 -14 -4 -22 0 Z M-10 -92 L-8 -4 M8 -92 L10 -4" c={c} o={0.35} />,
  thermometer: ({ t }) => (
    <>
      <WL d="M-3 -30 L3 -30 L3 -6 C7 -4 7 4 0 4 C-7 4 -7 -4 -3 -6 Z" c="iron" o={0.3} w={1.4} />
      {t ? <Txt x={18} y={-14} t={t} size={9} /> : null}
    </>
  ),
  pills: () => (
    <>
      <WL d={rect(-14, -14, 28, 14)} c="copper" o={0.35} w={1.6} />
      <WL d="M-4 -24 C-4 -28 4 -28 4 -24 L4 -18 C4 -14 -4 -14 -4 -18 Z" c="iron" o={0.4} w={1.2} />
    </>
  ),
  tissues: () => <WL d="M-14 0 L-14 -14 L14 -14 L14 0 Z M-4 -14 C-6 -22 4 -24 2 -16" c="cobalt" o={0.2} w={1.6} />,
  /** The green chemist's cross that lights up. */
  greencross: () => <WL d="M-6 -18 L6 -18 L6 -6 L18 -6 L18 6 L6 6 L6 18 L-6 18 L-6 6 L-18 6 L-18 -6 L-6 -6 Z" c="copper" o={0.7} />,
  redcross: () => <WL d="M-5 -15 L5 -15 L5 -5 L15 -5 L15 5 L5 5 L5 15 L-5 15 L-5 5 L-15 5 L-15 -5 L-5 -5 Z" c="iron" o={0.6} />,
  easel: () => (
    <>
      <L d="M-20 0 L-4 -96 M20 0 L4 -96 M0 -96 L0 0 M-22 -36 L22 -36" w={2} />
      <WL d={rect(-26, -88, 52, 50)} c="ochre" o={0.15} />
      <W d="M-20 -46 C-10 -60 4 -52 20 -64 L20 -44 L-20 -44 Z" c="copper" o={0.35} />
      <W d={circle(10, -74, 6)} c="ochre" o={0.6} />
    </>
  ),
  /** A board showing a person's height, for the 'tall Dutch' text. */
  heightchart: () => (
    <>
      <WL d={rect(-10, -120, 20, 120)} c="ochre" o={0.15} />
      {Array.from({ length: 12 }, (_, i) => <L key={i} d={`M-10 ${-i * 10} L${i % 2 ? -4 : 0} ${-i * 10}`} w={1} />)}
    </>
  ),
  skates: () => <L d="M-20 0 L20 0 C24 0 26 -4 22 -6 M-14 -2 L-14 -12 L8 -12 L10 -2 M-16 -12 L-12 -24 L2 -24" w={1.8} />,
  grill: () => (
    <>
      <WL d="M-34 -8 L34 -8 L30 -18 L-30 -18 Z" c="cobalt" o={0.25} />
      <L d="M-26 0 L-28 -8 M26 0 L28 -8" w={2} />
      {[-24, -8, 8, 24].map((x) => <WL key={x} d={`M${x - 6} -6 L${x + 6} -6 L${x + 6} -2 L${x - 6} -2 Z M${x} -2 L${x + 10} 6`} c="iron" o={0.4} w={1.2} />)}
    </>
  ),
  dishes: () => <>{[-36, -18, 0, 18, 36, -27, -9, 9, 27].map((x, i) => <WL key={i} d={`M${x - 7} ${i < 5 ? -1 : -11} C${x - 7} ${i < 5 ? 4 : -6} ${x + 7} ${i < 5 ? 4 : -6} ${x + 7} ${i < 5 ? -1 : -11} Z`} c={(["iron", "ochre", "copper", "manganese", "ochre"] as Glaze[])[i % 5]} o={0.5} w={1.2} />)}</>,
  moka: () => <WL d="M-8 0 L-6 -12 L-8 -14 L8 -14 L6 -12 L8 0 Z M-6 -14 L-4 -28 L4 -28 L6 -14 M6 -22 L12 -20 L10 -10 M-4 -28 L0 -32 L4 -28" c="cobalt" o={0.3} w={1.5} />,
  /** The espresso machine on an Italian bar counter. */
  espressomachine: () => (
    <>
      <WL d="M-30 0 L-30 -40 L30 -40 L30 0 Z M-34 -40 L34 -40 L34 -46 L-34 -46 Z" c="cobalt" o={0.25} />
      <L d="M-16 -14 L-16 -6 M0 -14 L0 -6 M16 -14 L16 -6 M-20 -14 L20 -14" w={1.8} />
      <WL d={circle(0, -27, 5)} c="ochre" o={0.5} w={1.2} />
    </>
  ),
  cornetto: () => <WL d="M-16 0 C-14 -10 14 -10 16 0 C10 -4 6 -2 0 -4 C-6 -2 -10 -4 -16 0 Z M-8 -6 L-6 -2 M0 -8 L0 -4 M8 -6 L6 -2" c="ochre" o={0.6} w={1.4} />,
  pastries: () => (
    <>
      <WL d="M-30 0 L-34 -8 L34 -8 L30 0 Z" c="cobalt" o={0.2} />
      {[-20, 0, 20, -10, 10].map((x, i) => <WL key={i} d={`M${x - 8} ${i < 3 ? -8 : -15} C${x - 6} ${i < 3 ? -17 : -24} ${x + 6} ${i < 3 ? -17 : -24} ${x + 8} ${i < 3 ? -8 : -15} Z`} c="ochre" o={0.6} w={1.2} />)}
    </>
  ),
  pastrybox: () => (
    <>
      <WL d="M-24 0 L-24 -22 L24 -22 L24 0 Z" c="ochre" o={0.2} />
      <L d="M-24 -22 L0 -34 L24 -22 M0 -34 L0 -40 M-4 -40 L4 -40" w={1.6} />
    </>
  ),
  panettone: () => <WL d="M-16 0 L-16 -22 C-16 -34 16 -34 16 -22 L16 0 Z M-16 -22 C-8 -18 8 -18 16 -22" c="ochre" o={0.55} />,
  pandoro: () => <WL d="M-18 0 L-8 -34 L8 -34 L18 0 Z M-14 -14 L14 -14 M-11 -24 L11 -24" c="ochre" o={0.35} />,
  christmastree: () => (
    <>
      <WL d="M0 -96 L-20 -66 L-10 -66 L-28 -36 L-14 -36 L-34 -8 L34 -8 L14 -36 L28 -36 L10 -66 L20 -66 Z" c="copper" o={0.45} />
      <WL d="M-5 -8 L-5 0 L5 0 L5 -8" c="ochre" o={0.5} />
      {[[-8, -56], [10, -46], [-14, -26], [12, -22], [0, -76]].map(([x, y], i) => <W key={i} d={circle(x, y, 3)} c={i % 2 ? "iron" : "ochre"} o={0.8} />)}
    </>
  ),
  /** A small nativity scene: stable, manger, a few figures. */
  presepe: () => (
    <>
      <WL d="M-44 0 L-44 -40 L0 -64 L44 -40 L44 0 Z" c="ochre" o={0.25} />
      <W d={circle(-16, -24, 5)} c="cobalt" o={0.4} />
      <W d="M-24 -4 C-24 -16 -8 -16 -8 -4 Z" c="cobalt" o={0.4} />
      <W d={circle(18, -26, 5)} c="iron" o={0.4} />
      <W d="M10 -4 C10 -18 26 -18 26 -4 Z" c="iron" o={0.4} />
      <WL d="M-6 -4 L6 -4 L4 -12 L-4 -12 Z" c="ochre" o={0.5} w={1.2} />
    </>
  ),
  stocking: () => <WL d="M-6 -40 L8 -40 L8 -12 L16 -6 C18 0 10 4 4 0 L-6 -8 Z M-8 -40 L10 -40 L10 -34 L-8 -34 Z" c="iron" o={0.55} />,
  /** The Befana, an old woman on a broom, flying. */
  befana: () => (
    <>
      <L d="M-46 6 L40 -10" w={2.4} />
      <WL d="M30 -14 L46 -22 L44 -6 Z" c="ochre" o={0.5} w={1.2} />
      <WL d="M-14 0 C-18 -20 -6 -34 4 -30 C12 -26 10 -8 4 -2 Z" c="manganese" o={0.45} />
      <circle cx={-2} cy={-38} r={7} fill="var(--tile)" stroke={INK} strokeWidth={1.8} />
      <WL d="M-11 -40 L-3 -60 L7 -40 Z" c="cobalt" o={0.5} w={1.4} />
      <WL d="M-10 -12 L-18 -4 L-12 -2" c="manganese" o={0.3} w={1.6} />
    </>
  ),
  /** The Italian New Year's plate: lentils and cotechino. */
  lentils: () => (
    <>
      <L d="M-22 0 L22 0" w={2} />
      <W d="M-18 -1 C-16 -10 16 -10 18 -1 Z" c="copper" o={0.6} />
      {[-8, 0, 8].map((x) => <WL key={x} d={circle(x, -8, 4)} c="iron" o={0.5} w={1} />)}
    </>
  ),
  /* ---------------- marks ---------------- */
  smell: () => <L d="M-8 0 C-14 -8 -2 -14 -8 -24 M4 0 C-2 -8 10 -14 4 -24" w={1.4} o={0.6} />,
  steam: () => <L d="M-6 0 C-10 -6 -2 -10 -6 -16 M4 0 C0 -6 8 -10 4 -16" w={1.2} o={0.6} />,
  zzz: () => (
    <>
      <Txt x={0} y={0} t="z" size={12} />
      <Txt x={9} y={-10} t="z" size={9} />
      <Txt x={16} y={-18} t="z" size={7} />
    </>
  ),
  notes: () => <L d="M-10 0 a3 2.4 0 1 0 0.1 0 M-7 -1 L-7 -16 L4 -19 L4 -4 M4 -4 a3 2.4 0 1 0 -0.1 0" w={1.8} />,
  heart: ({ c = "iron" }) => <WL d="M0 8 C-14 -2 -12 -14 -4 -12 C-2 -12 0 -10 0 -8 C0 -10 2 -12 4 -12 C12 -14 14 -2 0 8 Z" c={c} o={0.6} w={1.4} />,
  bubble: ({ t = "?" }) => {
    // As wide as its words.
    const w = Math.max(18, t.length * 4.6 + 8);
    const size = t.length > 3 ? 10 : 13;
    return (
      <>
        <WL d={`M${-w + 4} -12 L${w - 4} -12 C${w} -12 ${w} -10 ${w} -6 L${w} 6 C${w} 10 ${w - 2} 10 ${w - 4} 10 L-4 10 L-10 18 L-10 10 L${-w + 4} 10 C${-w} 10 ${-w} 8 ${-w} 6 L${-w} -6 C${-w} -10 ${-w + 2} -12 ${-w + 4} -12 Z`} c="cobalt" o={0.06} w={1.6} />
        <Txt x={0} y={t.length > 3 ? 3 : 4} t={t} size={size} />
      </>
    );
  },
  /** A hand making the Italian 'what do you want?' gesture: fingertips together, pointing up. */
  pursehand: () => (
    <>
      {/* sleeve */}
      <WL d="M-13 40 L-11 18 L11 18 L13 40 Z" c="cobalt" o={0.35} />
      {/* palm, fingers drawn up to meet at the tips */}
      <WL d="M-11 18 C-15 8 -14 -2 -9 -10 L-4 -24 C-2 -28 2 -28 4 -24 L9 -10 C14 -2 15 8 11 18 Z" c="ochre" o={0.22} />
      <L d="M-9 -10 C-6 -16 -3 -22 0 -27 M-3 -6 C-2 -14 -1 -20 0 -27 M3 -6 C2 -14 1 -20 0 -27 M9 -10 C6 -16 3 -22 0 -27" w={1.4} />
      {/* thumb */}
      <L d="M-11 6 C-16 0 -13 -8 -7 -12" w={1.6} />
      {/* it moves up and down */}
      <L d="M22 -20 L22 10 M18 -14 L22 -20 L26 -14 M18 4 L22 10 L26 4" w={1.4} o={0.6} />
    </>
  ),
  /** A picnic blanket on the grass. */
  blanket: ({ c = "iron" }) => (
    <>
      <WL d="M-70 0 L70 0 L56 -16 L-56 -16 Z" c={c} o={0.35} />
      <L d="M-36 0 L-28 -16 M0 0 L0 -16 M36 0 L28 -16 M-63 -8 L63 -8" w={1} o={0.5} />
    </>
  ),
  magnifier: () => (
    <>
      <WL d={circle(0, 0, 12)} c="cobalt" o={0.08} w={2.4} />
      <L d="M8 8 L22 22" w={4} />
    </>
  ),
  passport: () => (
    <>
      <WL d={rect(-12, -16, 24, 32)} c="iron" o={0.5} />
      <WL d={circle(0, -2, 6)} c="ochre" o={0.4} w={1} />
    </>
  ),
  card: ({ c = "iron" }) => (
    <>
      <WL d={rect(-16, -10, 32, 20)} c={c} o={0.4} />
      <L d="M-11 -4 L2 -4 M-11 2 L-2 2" w={1.2} />
    </>
  ),
  wheel: () => (
    <>
      <circle cx={0} cy={0} r={16} fill="none" stroke={INK} strokeWidth={2.2} />
      <L d="M0 -16 L0 16 M-16 0 L16 0 M-11 -11 L11 11 M-11 11 L11 -11" w={0.8} />
    </>
  ),
  /** Bathroom tiles with patches of mould. */
  mould: () => (
    <>
      {Array.from({ length: 24 }, (_, i) => <WL key={i} d={rect(-48 + (i % 6) * 16, -64 + Math.floor(i / 6) * 16, 16, 16)} c="cobalt" o={i % 2 ? 0.1 : 0.03} w={0.8} />)}
      {[[-30, -50], [-22, -44], [-26, -38], [14, -58], [20, -52], [8, -30]].map(([x, y], i) => <W key={i} d={circle(x, y, 3 + (i % 3))} c="manganese" o={0.55} />)}
    </>
  ),
  /** Rotterdam's water square: a sunken square with steps, part full of rain water. */
  watersquare: () => (
    <>
      <L d="M-100 0 L-80 0 L-80 8 L-60 8 L-60 16 L60 16 L60 8 L80 8 L80 0 L100 0" w={2} />
      <W d="M-60 10 L60 10 L60 16 L-60 16 Z" c="cobalt" o={0.45} />
    </>
  ),
};

export const PROP_NAMES = Object.keys(PROPS);

/** Helper for picture files: draw a prop by name. */
export function Prop({ k, ...o }: { k: string } & PropOpts) {
  const f = PROPS[k];
  return f ? f(o) : null;
}

export { G };
