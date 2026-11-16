/**
 * Possible dictionary forms of an inflected Dutch word: adjective endings
 * (grote, groter, grootst), plurals (katten, bomen, auto's) and diminutives
 * (boompje, tafeltje). Generous on purpose: used to recognise a known word.
 */
export function dutchStems(word: string): string[] {
  const w = word.toLowerCase();
  const out = new Set<string>();
  const fix = (stem: string) => {
    if (stem.length < 2) return;
    out.add(stem);
    // Doubled consonant: dikk → dik, katt → kat.
    if (/([bdfgklmnprst])\1$/.test(stem)) out.add(stem.slice(0, -1));
    // Open syllable lost a vowel: grot → groot, bom → boom, man → maan.
    const m = stem.match(/^(.*[^aeiou])([aeou])([^aeiouy])$/);
    if (m) out.add(`${m[1]}${m[2]}${m[2]}${m[3]}`);
    // v/z at the end of the stem: lev → leef, huiz → huis.
    out.add(stem.replace(/v$/, "f").replace(/z$/, "s"));
  };
  for (const suffix of ["sten", "ste", "st", "ere", "er", "en", "e", "s", "'s", "eren"]) {
    if (w.endsWith(suffix) && w.length > suffix.length + 1) fix(w.slice(0, -suffix.length));
  }
  for (const dim of ["etje", "pje", "tje", "je", "etjes", "pjes", "tjes", "jes"]) {
    if (w.endsWith(dim) && w.length > dim.length + 1) fix(w.slice(0, -dim.length));
  }
  out.delete(w);
  return [...out];
}
