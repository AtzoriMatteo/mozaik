import type { LanguagePack } from "./language-pack";
import { dutch } from "@/packs/nl";

/**
 * All installed language packs. Adding a language = adding a folder under
 * src/packs and one line here. Nothing else in the app changes.
 */
const packs: readonly LanguagePack[] = [dutch];

export const DEFAULT_LANGUAGE = "nl";

export function listPacks(): readonly LanguagePack[] {
  return packs;
}

export function getPack(code: string): LanguagePack | undefined {
  return packs.find((p) => p.code === code);
}

export function getDefaultPack(): LanguagePack {
  const pack = getPack(DEFAULT_LANGUAGE);
  if (!pack) throw new Error(`Default language pack "${DEFAULT_LANGUAGE}" is missing`);
  return pack;
}
