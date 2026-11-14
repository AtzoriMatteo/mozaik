import { units } from "@/packs/it/units";
import { tokenizeItalian } from "@/packs/it/tokenize";
import { lexicon } from "@/packs/it/lexicon";
import { helpFor } from "@/core/content";
const miss = new Set<string>();
for (const u of units) { for (const t of u.texts) for (const s of t.paragraphs.flat()) for (const tok of tokenizeItalian(s.text)) if (tok.kind === "word" && !helpFor(lexicon, t, tok.normalized)) miss.add(tok.normalized);
 for (const l of u.listening) for (const x of l.lines) for (const tok of tokenizeItalian(x.text)) if (tok.kind === "word" && !helpFor(lexicon, l, tok.normalized)) miss.add(tok.normalized); }
console.log([...miss].join(" "));
for (const [w,h] of Object.entries(lexicon)) for (const x of [h.meaning,h.closer,h.local]) if (x && x.length>80) console.log("LONG", w, x.length);
for (const [w,h] of Object.entries(lexicon)) if (h.base && !lexicon[h.base]) console.log("NOBASE", w, h.base);
