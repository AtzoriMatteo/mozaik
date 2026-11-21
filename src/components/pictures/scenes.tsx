import type { ReactElement } from "react";
import { L, W, WL, rect } from "./kit";

/**
 * Backgrounds, drawn lighter than the people and things in front of them.
 * The picture is 400 × 240; the ground is at about y = 210.
 */

const gables = (y0: number, h: number, n: number, w: number, x0 = 0) =>
  Array.from({ length: n }, (_, i) => {
    const x = x0 + i * w;
    const top = y0 + (i % 2 ? 8 : 0);
    const step = i % 3;
    // Step gable, neck gable or bell gable, as on a Dutch canal.
    const roof =
      step === 0
        ? `M${x} ${top + 24} L${x + 8} ${top + 24} L${x + 8} ${top + 14} L${x + 16} ${top + 14} L${x + 16} ${top + 4} L${x + w - 16} ${top + 4} L${x + w - 16} ${top + 14} L${x + w - 8} ${top + 14} L${x + w - 8} ${top + 24} L${x + w} ${top + 24}`
        : step === 1
          ? `M${x} ${top + 24} C${x + 10} ${top + 22} ${x + 14} ${top + 14} ${x + 16} ${top + 2} L${x + w - 16} ${top + 2} C${x + w - 14} ${top + 14} ${x + w - 10} ${top + 22} ${x + w} ${top + 24}`
          : `M${x} ${top + 24} L${x + w / 2} ${top} L${x + w} ${top + 24}`;
    return (
      <g key={i}>
        <WL d={`${roof} L${x + w} ${y0 + h} L${x} ${y0 + h} Z`} c={(["cobalt", "iron", "cobalt", "ochre", "cobalt"] as const)[i % 5]} o={0.1} w={1.4} />
        {[0, 1, 2].map((r) =>
          [0, 1].map((k) => <W key={`${r}${k}`} d={rect(x + 10 + k * (w - 30), top + 32 + r * 26, 10, 16)} c="cobalt" o={0.18} />),
        )}
      </g>
    );
  });

export const SCENES: Record<string, (night: boolean) => ReactElement> = {
  none: () => <></>,
  street: () => (
    <>
      {gables(36, 174, 6, 70, -10)}
      <L d="M0 210 L400 210" w={1.6} o={0.6} />
      <L d="M20 222 L60 222 M110 228 L150 228 M200 222 L240 222 M290 228 L330 228 M350 220 L390 220" w={1} o={0.3} />
    </>
  ),
  canal: () => (
    <>
      {gables(20, 110, 6, 70, -10)}
      <W d="M0 136 L400 136 L400 196 L0 196 Z" c="cobalt" o={0.16} />
      <L d="M0 136 L400 136 M0 196 L400 196" w={1.6} o={0.6} />
      <L d="M30 152 C40 148 50 156 60 152 M120 170 C130 166 140 174 150 170 M220 156 C230 152 240 160 250 156 M300 178 C310 174 320 182 330 178" w={1.2} o={0.4} />
      <WL d="M300 196 L300 150 C320 128 360 128 380 150 L380 196 L370 196 L370 156 C356 142 324 142 310 156 L310 196 Z M290 136 L390 136" c="cobalt" o={0.14} w={1.4} />
    </>
  ),
  /** Bologna's porticoes: arches and columns, warm plaster. */
  porticoes: () => (
    <>
      <W d="M0 0 L400 0 L400 210 L0 210 Z" c="ochre" o={0.1} />
      {[0, 1, 2, 3, 4].map((i) => {
        const x = -20 + i * 90;
        return <WL key={i} d={`M${x} 210 L${x} 90 C${x} 50 ${x + 70} 50 ${x + 70} 90 L${x + 70} 210 L${x + 76} 210 L${x + 76} 30 L${x - 6} 30 L${x - 6} 210 Z`} c="iron" o={0.18} w={1.4} />;
      })}
      <L d="M0 30 L400 30 M0 210 L400 210" w={1.6} o={0.6} />
    </>
  ),
  room: () => (
    <>
      <W d="M0 0 L400 0 L400 200 L0 200 Z" c="ochre" o={0.06} />
      <L d="M0 200 L400 200" w={1.6} o={0.6} />
      <L d="M0 214 L400 214 M0 230 L400 230" w={0.8} o={0.25} />
    </>
  ),
  kitchen: () => (
    <>
      <W d="M0 0 L400 0 L400 200 L0 200 Z" c="ochre" o={0.06} />
      <WL d="M220 20 L390 20 L390 70 L220 70 Z M262 20 L262 70 M304 20 L304 70 M346 20 L346 70" c="cobalt" o={0.08} w={1.2} />
      {Array.from({ length: 12 }, (_, i) => <WL key={i} d={rect(220 + i * 14, 96, 14, 14)} c="cobalt" o={i % 2 ? 0.14 : 0.04} w={0.8} />)}
      <WL d="M220 110 L390 110 L390 200 L220 200 Z M220 118 L390 118" c="ochre" o={0.12} w={1.4} />
      <L d="M0 200 L400 200" w={1.6} o={0.6} />
    </>
  ),
  classroom: () => (
    <>
      <W d="M0 0 L400 0 L400 200 L0 200 Z" c="copper" o={0.05} />
      <L d="M0 200 L400 200" w={1.6} o={0.6} />
    </>
  ),
  field: () => (
    <>
      <L d="M0 150 L400 150" w={1.4} o={0.6} />
      <W d="M0 150 L400 150 L400 240 L0 240 Z" c="copper" o={0.14} />
      <L d="M0 175 L400 168 M0 200 L400 190 M0 226 L400 214" w={1} o={0.35} />
      <W d="M0 186 L400 177 L400 181 L0 190 Z" c="cobalt" o={0.25} />
    </>
  ),
  park: () => (
    <>
      <L d="M0 160 L400 160" w={1.2} o={0.5} />
      <W d="M0 160 L400 160 L400 240 L0 240 Z" c="copper" o={0.16} />
    </>
  ),
  beach: () => (
    <>
      <W d="M0 120 L400 120 L400 170 L0 170 Z" c="cobalt" o={0.18} />
      <L d="M0 120 L400 120" w={1.4} o={0.6} />
      <L d="M40 135 C50 131 60 139 70 135 M180 150 C190 146 200 154 210 150 M300 140 C310 136 320 144 330 140" w={1.2} o={0.45} />
      <W d="M0 170 C80 160 160 176 400 166 L400 240 L0 240 Z" c="ochre" o={0.22} />
      <WL d="M0 176 C20 150 60 146 90 172 Z" c="copper" o={0.2} w={1.2} />
    </>
  ),
  sea: () => (
    <>
      <W d="M0 130 L400 130 L400 240 L0 240 Z" c="cobalt" o={0.2} />
      <L d="M0 130 L400 130" w={1.4} o={0.6} />
      <L d="M20 160 C34 154 48 166 62 160 M120 190 C134 184 148 196 162 190 M240 166 C254 160 268 172 282 166 M320 206 C334 200 348 212 362 206 M60 222 C74 216 88 228 102 222" w={1.4} o={0.45} />
    </>
  ),
  /** The Wadden Sea at low tide: shining mud, an island on the horizon. */
  mud: () => (
    <>
      <L d="M0 130 L400 130" w={1.2} o={0.5} />
      <W d="M250 130 C280 118 330 118 360 130 Z" c="copper" o={0.3} />
      <W d="M0 130 L400 130 L400 240 L0 240 Z" c="manganese" o={0.12} />
      <W d="M30 170 C70 160 120 176 160 166 C140 182 60 184 30 170 Z M220 200 C270 190 330 206 370 196 C350 214 250 214 220 200 Z" c="cobalt" o={0.2} />
    </>
  ),
  /** A frozen canal in the countryside, for skating. */
  ice: () => (
    <>
      <L d="M0 140 L400 140" w={1.2} o={0.5} />
      <W d="M0 140 L400 140 L400 240 L0 240 Z" c="cobalt" o={0.08} />
      <L d="M40 180 L120 176 M200 200 L300 194 M60 220 L180 214" w={1} o={0.35} />
      <L d="M10 140 L14 124 M18 140 L20 126 M380 140 L384 124 M390 140 L392 128" w={1.2} o={0.5} />
    </>
  ),
  platform: () => (
    <>
      <WL d="M0 30 L400 30 L400 42 L0 42 Z" c="cobalt" o={0.12} w={1.4} />
      <L d="M60 42 L60 200 M200 42 L200 200 M340 42 L340 200" w={1.6} o={0.5} />
      <L d="M0 200 L400 200 M0 214 L400 214" w={1.4} o={0.5} />
    </>
  ),
  /** Inside a train: windows and seats. */
  traininside: () => (
    <>
      <W d="M0 0 L400 0 L400 200 L0 200 Z" c="cobalt" o={0.05} />
      {[30, 150, 270].map((x) => <WL key={x} d={rect(x, 40, 100, 60)} c="copper" o={0.14} w={1.4} />)}
      <L d="M0 200 L400 200" w={1.6} o={0.6} />
    </>
  ),
  hall: () => (
    <>
      <W d="M0 0 L400 0 L400 150 L0 150 Z" c="cobalt" o={0.05} />
      <L d="M0 150 L400 150" w={1.4} o={0.5} />
      <W d="M0 150 L400 150 L400 240 L0 240 Z" c="ochre" o={0.14} />
      <L d="M200 150 L200 240 M150 240 C160 210 240 210 250 240" w={1.2} o={0.4} />
    </>
  ),
  pitch: () => (
    <>
      <L d="M0 140 L400 140" w={1.2} o={0.5} />
      <W d="M0 140 L400 140 L400 240 L0 240 Z" c="copper" o={0.2} />
      <L d="M0 200 L400 200 M200 140 L200 240" w={1.2} o={0.35} />
    </>
  ),
  /** An Italian square: plaster houses, shutters. */
  piazza: () => (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <WL d={rect(-10 + i * 84, 40 + (i % 2) * 14, 84, 170 - (i % 2) * 14)} c={(["ochre", "iron", "ochre", "copper", "iron"] as const)[i]} o={0.12} w={1.2} />
          {[0, 1].map((r) => [0, 1].map((k) => <WL key={`${r}${k}`} d={rect(8 + i * 84 + k * 36, 64 + (i % 2) * 14 + r * 40, 14, 24)} c="copper" o={0.25} w={1} />))}
        </g>
      ))}
      <L d="M0 210 L400 210" w={1.6} o={0.6} />
    </>
  ),
};
