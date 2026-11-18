import type { LanguagePack } from "@/core/language-pack";
import { tenseUses } from "@/core/coherence";

/** Grammar an Italian text uses beyond the present tense, as grammar point ids. */

const HELPERS = new Set(["ho", "hai", "ha", "abbiamo", "avete", "hanno", "sono", "sei", "è", "siamo", "siete"]);
/** Participles used as adjectives or in set phrases at A1 (sono nata a…, è sposato). */
const FIXED = new Set(["nato", "nata", "nati", "nate", "sposato", "sposata", "sposati", "chiuso", "chiusa", "aperto", "aperta", "stanco", "stanca", "sbagliato", "sbagliata", "macchiato"]);
/** Polite (Lei) imperatives used for directions and requests: formally subjunctive, taught at A1 with the imperative. */
const POLITE = new Set(["giri", "vada", "prenda", "esca", "scusi", "senta", "dica", "venga", "faccia", "continui", "attraversi", "segua", "salga", "scenda"]);
const VORREI = new Set(["vorrei", "vorresti", "vorrebbe", "vorremmo", "vorreste", "vorrebbero"]);

export function italianGrammarIn(pack: LanguagePack, text: string): { grammar: string; word: string }[] {
  return tenseUses(
    pack,
    text,
    (tense, _inf, form) => {
      switch (tense) {
        case "perfect":
          return "passato-prossimo";
        case "imperfect":
          return "imperfetto";
        case "future":
          return "futuro";
        case "conditional":
          return VORREI.has(form) ? "vorrei" : "condizionale";
        case "subjunctive":
          return POLITE.has(form) ? "imperative" : "congiuntivo";
        case "subjunctive-imperfect":
          return "congiuntivo";
        case "remote":
          return "passato-remoto";
        default:
          return null;
      }
    },
    HELPERS,
    FIXED,
  );
}

const UNITS = ["zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove"];
const TENS = ["", "", "venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta"];

/** An Italian number in words (0–2999): ventotto, centotré, milleduecento. */
export function italianNumber(n: number): string {
  if (n < 20) return UNITS[n];
  if (n < 100) {
    const t = TENS[Math.floor(n / 10)];
    const u = n % 10;
    if (u === 0) return t;
    const unit = u === 3 ? "tré" : UNITS[u];
    return (u === 1 || u === 8 ? t.slice(0, -1) : t) + unit;
  }
  if (n < 1000) {
    const h = Math.floor(n / 100);
    const rest = n % 100;
    const head = h === 1 ? "cento" : `${UNITS[h]}cento`;
    const tail = rest === 0 ? "" : italianNumber(rest).replace(/^tré$/, "tre");
    return Math.floor(rest / 10) === 8 ? head.slice(0, -1) + tail : head + tail;
  }
  const th = Math.floor(n / 1000);
  const rest = n % 1000;
  return (th === 1 ? "mille" : `${UNITS[th]}mila`) + (rest ? italianNumber(rest).replace(/^tré$/, "tre") : "");
}

let numberSet: Set<string> | null = null;
export function isItalianNumber(w: string): boolean {
  numberSet ??= new Set(Array.from({ length: 3000 }, (_, i) => italianNumber(i)));
  return numberSet.has(w);
}

/** Possible dictionary forms of an inflected Italian noun or adjective: vicina → vicino, amiche → amica, occhi → occhio. */
export function italianStems(word: string): string[] {
  const w = word.toLowerCase();
  const out = new Set<string>();
  const stem = w.slice(0, -1);
  if (/[aeio]$/.test(w)) for (const e of ["o", "a", "e", "io"]) out.add(stem + e);
  if (/(ch|gh)[ei]$/.test(w)) for (const e of ["o", "a"]) out.add(w.slice(0, -2) + e);
  out.delete(w);
  return [...out];
}
