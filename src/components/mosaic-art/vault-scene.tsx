/**
 * A1 picture for Italian: a starry vault like the Mausoleum of Galla Placidia
 * in Ravenna (5th century), the oldest mosaic sky in Italy. Rings of gold
 * stars on lapis, a golden rosette at the centre, a red border of gold
 * tesserae, and two doves drinking at a fountain, a classic Roman motif.
 * Drawn in a 1200×800 box with fixed stone colours: it's a picture, so it
 * looks the same in light and dark mode.
 */

const LAPIS = "#1d275a";
const LAPIS_DEEP = "#141c45";
const GOLD = "#d6a93f";
const GOLD_PALE = "#ecd28a";
const RED = "#8e2a22";
const MARBLE = "#efece4";

const r1 = (n: number) => Math.round(n * 10) / 10;

/** An eight-pointed star centred on (x, y). */
function star(x: number, y: number, R: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 16; i++) {
    const a = (i * Math.PI) / 8 - Math.PI / 2;
    const rr = i % 2 === 0 ? R : R * 0.42;
    pts.push(`${r1(x + Math.cos(a) * rr)},${r1(y + Math.sin(a) * rr)}`);
  }
  return pts.join(" ");
}

const CX = 600;
const CY = 380;

/** Rings of stars, smaller towards the edge, kept inside the border. */
const STARS = [
  { r: 150, n: 10, size: 17 },
  { r: 235, n: 16, size: 14 },
  { r: 320, n: 22, size: 12 },
  { r: 405, n: 28, size: 10 },
  { r: 490, n: 34, size: 9 },
  { r: 575, n: 40, size: 8 },
].flatMap((ring, k) =>
  Array.from({ length: ring.n }, (_, i) => {
    const a = ((i + (k % 2) * 0.5) / ring.n) * Math.PI * 2;
    return { x: r1(CX + Math.cos(a) * ring.r), y: r1(CY + Math.sin(a) * ring.r * 0.82), size: ring.size };
  }),
).filter((s) => s.x > 70 && s.x < 1130 && s.y > 70 && s.y < 600);

/** Tesserae along the border: gold squares on red. */
const BORDER = [
  ...Array.from({ length: 40 }, (_, i) => [17 + i * (1166 / 39), 17]),
  ...Array.from({ length: 40 }, (_, i) => [17 + i * (1166 / 39), 783]),
  ...Array.from({ length: 25 }, (_, i) => [17, 17 + (i + 1) * (766 / 26)]),
  ...Array.from({ length: 25 }, (_, i) => [1183, 17 + (i + 1) * (766 / 26)]),
].map(([x, y]) => ({ x: r1(x - 10), y: r1(y - 10) }));

export function VaultScene() {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      <defs>
        {/* Little stones: a faint grid over the sky. */}
        <pattern id="vault-tesserae" width="14" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 0 L14 0 M0 0 L0 14" stroke={LAPIS_DEEP} strokeWidth="1.4" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill={LAPIS} />
      <rect width="1200" height="800" fill="url(#vault-tesserae)" />

      {/* stars */}
      {STARS.map((s, i) => (
        <polygon key={i} points={star(s.x, s.y, s.size)} fill={i % 5 === 0 ? GOLD_PALE : GOLD} />
      ))}

      {/* the central rosette */}
      <circle cx={CX} cy={CY} r={92} fill="none" stroke={GOLD} strokeWidth={6} />
      <circle cx={CX} cy={CY} r={78} fill="none" stroke={GOLD_PALE} strokeWidth={2} opacity={0.7} />
      <rect x={CX - 46} y={CY - 46} width={92} height={92} fill={GOLD} />
      <rect x={CX - 46} y={CY - 46} width={92} height={92} fill={GOLD} transform={`rotate(45 ${CX} ${CY})`} />
      <polygon points={star(CX, CY, 40)} fill={RED} />
      <circle cx={CX} cy={CY} r={12} fill={GOLD_PALE} />

      {/* fountain and doves */}
      <g>
        <rect x={0} y={612} width={1200} height={188} fill={LAPIS_DEEP} opacity={0.55} />
        <path d="M540 640 L660 640 C656 676 630 694 600 694 C570 694 544 676 540 640 Z" fill={GOLD} />
        <path d="M584 694 L616 694 L624 728 L576 728 Z" fill={GOLD} />
        <rect x={560} y={728} width={80} height={12} fill={GOLD_PALE} />
        <ellipse cx={600} cy={642} rx={56} ry={8} fill="#5f8fd0" />
        {/* water rising */}
        <path d="M600 640 C598 616 602 604 600 588" stroke="#9cc3ef" strokeWidth={4} fill="none" />
        <path d="M600 600 C586 604 578 614 576 628 M600 600 C614 604 622 614 624 628" stroke="#9cc3ef" strokeWidth={3} fill="none" />
        {/* left dove, leaning in to drink */}
        <path d="M430 640 C450 610 490 606 512 620 C522 612 534 614 540 624 L548 636 L536 634 C530 646 512 654 488 656 C462 658 440 654 430 640 Z" fill={MARBLE} />
        <path d="M452 636 C470 618 494 618 506 630" stroke="#b9b3a6" strokeWidth={3} fill="none" />
        <path d="M430 640 L404 628 L410 644 L398 652 L432 650" fill={MARBLE} />
        <circle cx={530} cy={622} r={2.6} fill={LAPIS_DEEP} />
        {/* right dove, head up */}
        <path d="M770 640 C750 610 712 606 690 618 C682 604 670 598 660 604 L652 612 L664 614 C664 630 676 646 704 654 C734 660 758 654 770 640 Z" fill={MARBLE} />
        <path d="M748 636 C730 618 706 618 694 630" stroke="#b9b3a6" strokeWidth={3} fill="none" />
        <path d="M770 640 L796 628 L790 644 L802 652 L768 650" fill={MARBLE} />
        <circle cx={666} cy={608} r={2.6} fill={LAPIS_DEEP} />
        {/* vine scrolls either side */}
        <path d="M120 720 C180 660 260 700 300 660 C330 630 310 600 286 610 C266 620 276 646 296 640" stroke={GOLD} strokeWidth={5} fill="none" />
        <path d="M1080 720 C1020 660 940 700 900 660 C870 630 890 600 914 610 C934 620 924 646 904 640" stroke={GOLD} strokeWidth={5} fill="none" />
        {[[180, 690], [240, 688], [960, 688], [1020, 690]].map(([x, y]) => (
          <ellipse key={`${x}`} cx={x} cy={y} rx={14} ry={7} fill="#3c7a58" transform={`rotate(-25 ${x} ${y})`} />
        ))}
      </g>

      {/* border: red band with gold tesserae */}
      <path d="M0 0 H1200 V800 H0 Z M34 34 V766 H1166 V34 Z" fill={RED} fillRule="evenodd" />
      {BORDER.map((b, i) => (
        <rect key={i} x={b.x} y={b.y} width={20} height={20} rx={2} fill={i % 2 ? GOLD_PALE : GOLD} transform={`rotate(45 ${b.x + 10} ${b.y + 10})`} opacity={0.95} />
      ))}
    </g>
  );
}
