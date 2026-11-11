import type { LanguagePack } from "./language-pack";
import { dutch } from "@/packs/nl";

/**
 * All installed language packs. Adding a language = adding a folder under
 * src/packs and one line here. Nothing else in the app changes.
 *
 * There is deliberately no "default language": which language someone is
 * learning is their choice, stored per learner (see chooseLearningPack).
 */
const packs: readonly LanguagePack[] = [dutch];

export function listPacks(): readonly LanguagePack[] {
  return packs;
}

export function getPack(code: string): LanguagePack | undefined {
  return packs.find((p) => p.code === code);
}

/**
 * Decide which pack a learner is in.
 * - Their saved choice wins, if that pack is installed.
 * - With exactly one pack installed, there is nothing to choose: use it.
 * - Otherwise return null, meaning "ask them what they want to learn".
 */
export function chooseLearningPack(
  installed: readonly LanguagePack[],
  savedCode: string | null | undefined,
): LanguagePack | null {
  const saved = savedCode ? installed.find((p) => p.code === savedCode) : undefined;
  if (saved) return saved;
  if (installed.length === 1) return installed[0];
  return null;
}
