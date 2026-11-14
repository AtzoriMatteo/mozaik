/**
 * Say numbers the Dutch way, for word help on digits: 1985 → negentien
 * vijfentachtig, 08.14 → veertien over acht, 1.250 → twaalfhonderdvijftig.
 */

const UNITS = ["nul", "een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien",
  "elf", "twaalf", "dertien", "veertien", "vijftien", "zestien", "zeventien", "achttien", "negentien"];
const TENS = ["", "", "twintig", "dertig", "veertig", "vijftig", "zestig", "zeventig", "tachtig", "negentig"];

/** "en" between unit and tens gets a diaeresis after an e: tweeëntwintig. */
const join = (unit: string, tens: string) => `${unit}${unit.endsWith("e") ? "ën" : "en"}${tens}`;

/** 0–9999 as one word; 1100–1999 the everyday way (twaalfhonderd, not duizend tweehonderd). */
export function sayNumber(n: number): string {
  if (n < 20) return UNITS[n];
  if (n < 100) return n % 10 === 0 ? TENS[n / 10] : join(UNITS[n % 10], TENS[Math.floor(n / 10)]);
  if (n < 1000) {
    const h = Math.floor(n / 100);
    return `${h === 1 ? "" : UNITS[h]}honderd${n % 100 ? sayNumber(n % 100) : ""}`;
  }
  if (n < 2000 && n % 100 !== 0 && n >= 1100) {
    return `${sayNumber(Math.floor(n / 100))}honderd${n % 100 ? sayNumber(n % 100) : ""}`;
  }
  if (n < 1_000_000) {
    const t = Math.floor(n / 1000);
    const rest = n % 1000;
    return `${t === 1 ? "" : sayNumber(t)}duizend${rest ? ` ${sayNumber(rest)}` : ""}`.trim();
  }
  return String(n);
}

/** Years: 1985 → negentien vijfentachtig, 2008 → tweeduizend acht. */
export function sayYear(y: number): string {
  if (y >= 1100 && y < 2000) {
    const rest = y % 100;
    const century = sayNumber(Math.floor(y / 100));
    // 1985 → negentien vijfentachtig, but 1602 → zestienhonderdtwee
    return rest >= 10 ? `${century} ${sayNumber(rest)}` : `${century}honderd${rest ? sayNumber(rest) : ""}`;
  }
  return sayNumber(y);
}

/** Clock times the way people say them: 16.40 → tien over half vijf. */
export function sayTime(time: string): string {
  const [hh, mm] = time.split(/[.:]/).map(Number);
  const hour = (h: number) => sayNumber(((h + 11) % 12) + 1);
  if (mm === 0) return `${hour(hh)} uur`;
  if (mm < 15) return `${sayNumber(mm)} over ${hour(hh)}`;
  if (mm === 15) return `kwart over ${hour(hh)}`;
  if (mm < 30) return `${sayNumber(30 - mm)} voor half ${hour(hh + 1)}`;
  if (mm === 30) return `half ${hour(hh + 1)}`;
  if (mm < 45) return `${sayNumber(mm - 30)} over half ${hour(hh + 1)}`;
  if (mm === 45) return `kwart voor ${hour(hh + 1)}`;
  return `${sayNumber(60 - mm)} voor ${hour(hh + 1)}`;
}

/** Phone numbers: digit by digit. */
export const sayDigits = (digits: string) => [...digits].map((d) => UNITS[Number(d)]).join(" ");

/** Amounts written with a thousands dot: 1.250 → 1250. */
export const parseAmount = (s: string) => Number(s.replace(/\./g, ""));
