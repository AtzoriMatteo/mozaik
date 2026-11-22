import type { Glaze, PictureItem, PictureSpec } from "./content";

/** Helpers for writing picture specs compactly in the packs. */
type Opts = Partial<Omit<PictureItem, "k" | "x" | "y">> & { c?: Glaze };

/** A person: p("woman", 150, 212, { hair: "bun", c: "iron", pose: "wave" }). */
export const p = (kind: "man" | "woman" | "boy" | "girl" | "oldman" | "oldwoman", x: number, y: number, o: Opts = {}): PictureItem => ({ k: `p:${kind}`, x, y, ...o });

/** A thing: o("bike", 300, 212, { c: "iron" }). */
export const o = (k: string, x: number, y: number, opts: Opts = {}): PictureItem => ({ k, x, y, ...opts });

export const pic = (scene: string, alt: string, items: PictureItem[], night = false): PictureSpec => ({ scene, alt, items, night: night || undefined });
