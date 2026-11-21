import type { Glaze } from "@/core/content";
import { At, G, INK, L, W, WL, circle } from "./kit";

export type Hair = "short" | "long" | "bun" | "curly" | "bald" | "ponytail" | "scarf" | "cap" | "mitre" | "bob";
export type Pose = "stand" | "wave" | "point" | "hold" | "carry" | "cheer" | "cane" | "sit" | "phone" | "write" | "walk" | "ride" | "lounge";

export type PersonSpec = {
  /** man, woman, boy, girl, old man, old woman. Children are drawn smaller. */
  kind: "man" | "woman" | "boy" | "girl" | "oldman" | "oldwoman";
  hair?: Hair;
  beard?: boolean;
  glasses?: boolean;
  apron?: boolean;
  /** Clothes glaze. */
  c?: Glaze;
  pose?: Pose;
};

const HEAD_Y = -82;

/**
 * A person in the tile style: no face, just the shape of the head, hair,
 * clothes and pose, the way Delft tiles draw figures. Feet at (0, 0).
 */
export function Person({ kind, hair, beard, glasses, apron, c = "cobalt", pose = "stand" }: PersonSpec) {
  const female = kind === "woman" || kind === "girl" || kind === "oldwoman";
  const old = kind === "oldman" || kind === "oldwoman";
  const h: Hair = hair ?? (kind === "oldwoman" ? "bun" : kind === "oldman" ? "bald" : female ? "long" : "short");
  // sit and write: on a chair. lounge: on a sofa or bed. ride: on a bike or in a wheelchair.
  const sit = pose === "sit" || pose === "write" || pose === "ride" || pose === "lounge";
  const chair = pose === "sit" || pose === "write";
  const hairO = old ? 0.28 : 0.7;
  // Seated people sit lower; their legs go forward and down to the floor.
  const dy = pose === "ride" ? 26 : sit ? 16 : 0;

  const rightArm: Record<Pose, string> = {
    stand: "M12 -68 L17 -42",
    walk: "M12 -68 L20 -46",
    wave: "M12 -68 L21 -80 L25 -97",
    point: "M12 -68 L24 -66 L37 -67",
    hold: "M12 -68 L18 -53 L28 -53",
    carry: "M12 -68 L13 -52 L4 -50",
    cheer: "M12 -68 L19 -84 L22 -100",
    cane: "M12 -68 L18 -45",
    sit: "M12 -68 L17 -50 L24 -46",
    phone: "M12 -68 L16 -60 L9 -80",
    write: "M12 -68 L16 -52 L26 -46",
    ride: "M12 -68 L22 -56 L30 -58",
    lounge: "M12 -68 L17 -50 L24 -46",
  };
  const leftArm: Record<Pose, string> = {
    stand: "M-12 -68 L-17 -42",
    walk: "M-12 -68 L-19 -46",
    wave: "M-12 -68 L-17 -42",
    point: "M-12 -68 L-17 -42",
    hold: "M-12 -68 L-17 -42",
    carry: "M-12 -68 L-13 -52 L-4 -50",
    cheer: "M-12 -68 L-19 -84 L-22 -100",
    cane: "M-12 -68 L-17 -42",
    sit: "M-12 -68 L-15 -50 L-6 -46",
    phone: "M-12 -68 L-17 -42",
    write: "M-12 -68 L-14 -52 L-2 -46",
    ride: "M-12 -68 L8 -56 L28 -58",
    lounge: "M-12 -68 L-15 -50 L-6 -46",
  };
  const hand = (d: string) => {
    const m = d.match(/(-?[\d.]+) (-?[\d.]+)$/);
    return m ? <circle cx={+m[1]} cy={+m[2]} r={2.3} fill="var(--tile)" stroke={INK} strokeWidth={1.4} /> : null;
  };

  const body = (
    <>
      {chair ? <L d="M-17 -66 L-17 -40 L13 -40 M-15 -40 L-15 -16 M11 -40 L11 -16" w={1.8} o={0.7} /> : null}
      {/* hair that falls behind the head */}
      {h === "long" ? <W d="M-9 -82 C-11 -96 11 -96 9 -82 L10.5 -64 C5 -67 -5 -67 -10.5 -64 Z" c="cobalt" o={0.6} /> : null}
      {h === "scarf" ? <WL d="M-10.5 -82 C-11 -97 11 -97 10.5 -82 L13 -66 C6 -69 -6 -69 -13 -66 Z" c={c === "cobalt" ? "manganese" : "cobalt"} o={0.45} w={1.6} /> : null}
      {/* torso */}
      {female ? (
        <WL d={`M-11 -70 C-5 -72.5 5 -72.5 11 -70 L${sit ? 14 : 19} ${sit ? -40 : -16} L${sit ? -14 : -19} ${sit ? -40 : -16} Z`} c={c} o={0.4} />
      ) : (
        <WL d="M-12 -70 C-6 -72.5 6 -72.5 12 -70 L13 -40 L-13 -40 Z" c={c} o={0.4} />
      )}
      {apron ? <WL d="M-8 -60 L8 -60 L10 -30 L-10 -30 Z" c="ochre" o={0} w={1.4} /> : null}
      {/* legs */}
      {sit ? (
        <L d={pose === "ride" ? "M-6 -40 L16 -40 L16 -14 M6 -40 L22 -40 L22 -14" : "M-6 -40 L16 -40 L16 -16 M6 -40 L22 -40 L22 -16"} w={2} />
      ) : female ? (
        <L d={pose === "walk" ? "M-6 -16 L-10 -1 M6 -16 L9 -1" : "M-6 -16 L-6 -1 M6 -16 L6 -1"} w={2} />
      ) : (
        <WL d={pose === "walk" ? "M-13 -40 L13 -40 L15 0 L7 0 L0 -24 L-7 0 L-15 0 Z" : "M-13 -40 L13 -40 L11 0 L2 0 L0 -25 L-2 0 L-11 0 Z"} c="cobalt" o={0.18} />
      )}
      {/* arms and hands */}
      <L d={leftArm[pose]} w={2} />
      <L d={rightArm[pose]} w={2} />
      {hand(leftArm[pose])}
      {hand(rightArm[pose])}
      {pose === "cane" ? <L d="M19 -45 L23 0" w={2.2} /> : null}
      {pose === "phone" ? <WL d="M6 -87 L11 -86 L10 -76 L5 -77 Z" c="cobalt" o={0.5} w={1.2} /> : null}
      {/* neck and head */}
      <L d="M0 -73.5 L0 -71" w={2} />
      <circle cx={0} cy={HEAD_Y} r={8.5} fill="var(--tile)" stroke={INK} strokeWidth={2} />
      {/* hair on top */}
      {h === "short" || h === "ponytail" ? <W d="M-8.9 -80 C-10.5 -96 10.5 -96 8.9 -80 C8 -86.5 -8 -86.5 -8.9 -80 Z" c="cobalt" o={hairO} /> : null}
      {h === "long" ? <W d="M-8.8 -82 C-9.5 -94 9.5 -94 8.8 -82 C7 -88 -7 -88 -8.8 -82 Z" c="cobalt" o={0.7} /> : null}
      {h === "bob" ? <W d="M-9.5 -76 C-12 -95 12 -95 9.5 -76 L7 -76 C8 -86 -8 -86 -7 -76 Z" c="cobalt" o={0.65} /> : null}
      {h === "ponytail" ? <L d="M7.5 -87 C14 -87 15 -79 12 -72" w={3} o={0.7} /> : null}
      {h === "bun" ? (
        <>
          <W d="M-8.8 -83 C-9.5 -93 9.5 -93 8.8 -83 C6 -88 -6 -88 -8.8 -83 Z" c="cobalt" o={hairO} />
          <WL d={circle(0, -93.5, 4)} c="cobalt" o={hairO} w={1.2} />
        </>
      ) : null}
      {h === "curly" ? (
        <g>
          {[[-7, -88], [-3, -91.5], [2, -92], [6.5, -89], [-8.5, -83], [8.5, -83]].map(([x, y], i) => (
            <W key={i} d={circle(x, y, 3.2)} c="cobalt" o={0.6} />
          ))}
        </g>
      ) : null}
      {h === "bald" ? <L d="M-8 -80 C-9 -84 -8.5 -86 -7 -87 M8 -80 C9 -84 8.5 -86 7 -87" w={2.2} o={0.4} /> : null}
      {h === "cap" ? <WL d="M-9 -84 C-8 -95 8 -95 9 -84 L16 -83 L16 -81 L-9 -82 Z" c={c} o={0.5} w={1.5} /> : null}
      {h === "scarf" ? <WL d="M-9.5 -80 C-10 -95 10 -95 9.5 -80 C6 -89 -6 -89 -9.5 -80 Z" c={c === "cobalt" ? "manganese" : "cobalt"} o={0.45} w={1.4} /> : null}
      {h === "mitre" ? (
        <>
          <WL d="M-9 -86 L-8 -104 L0 -114 L8 -104 L9 -86 Z" c="iron" o={0.55} w={1.6} />
          <L d="M0 -112 L0 -98 M-4 -105 L4 -105" w={1.5} />
        </>
      ) : null}
      {beard ? <WL d="M-7.5 -80 C-7 -66 7 -66 7.5 -80 C4 -76 -4 -76 -7.5 -80 Z" c="cobalt" o={old || h === "mitre" ? 0.08 : 0.55} w={1.2} /> : null}
      {glasses ? <L d="M-6.5 -83 a2.6 2.6 0 1 0 5.2 0 a2.6 2.6 0 1 0 -5.2 0 M1.3 -83 a2.6 2.6 0 1 0 5.2 0 a2.6 2.6 0 1 0 -5.2 0 M-1.3 -83 L1.3 -83" w={1} /> : null}
    </>
  );

  const scale = kind === "boy" || kind === "girl" ? 0.66 : 1;
  return (
    <g transform={`translate(0 ${dy * scale}) scale(${scale})`}>
      {body}
    </g>
  );
}

/** A baby in a sling or in someone's arms: a swaddled oval with a head. */
export function Baby() {
  return (
    <>
      <WL d="M-9 -4 C-10 -14 8 -16 10 -8 C12 0 -8 4 -9 -4 Z" c="ochre" o={0.45} w={1.6} />
      <circle cx={-10} cy={-12} r={5} fill="var(--tile)" stroke={INK} strokeWidth={1.6} />
    </>
  );
}

/** A wheelchair with someone sitting in it, facing right. */
export function WheelchairUser({ c = "iron", hair = "short" as Hair }: { c?: Glaze; hair?: Hair }) {
  return (
    <>
      <At x={-4} y={-8} s={1}>
        <Person kind="man" hair={hair} c={c} pose="ride" />
      </At>
      <L d="M-18 -60 L-18 -34 L14 -34 M14 -34 L18 -14" w={2.2} />
      <circle cx={-10} cy={-16} r={16} fill="none" stroke={INK} strokeWidth={2.2} />
      <circle cx={-10} cy={-16} r={12} fill="none" stroke={INK} strokeWidth={0.8} strokeOpacity={0.5} />
      <circle cx={-10} cy={-16} r={2} fill={INK} />
      <circle cx={20} cy={-5} r={5} fill="none" stroke={INK} strokeWidth={1.8} />
      <path d="M-30 0 L28 0" stroke="none" fill={G.cobalt} />
    </>
  );
}
