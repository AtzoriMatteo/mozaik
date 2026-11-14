"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { listPacks } from "@/core/registry";
import type { Glaze, Motif } from "@/core/content";
import { useLearningLanguage } from "./learning-language";
import { UnitTile } from "./unit-tile";

/** Each language's tile on the picker and the switch. */
export const LANGUAGE_TILE: Record<string, { motif: Motif; glaze: Glaze }> = {
  nl: { motif: "tulip", glaze: "cobalt" },
  it: { motif: "sun", glaze: "ochre" },
};

export const tileFor = (code: string) => LANGUAGE_TILE[code] ?? { motif: "star" as Motif, glaze: "cobalt" as Glaze };

const OUTSIDE = ["/login", "/privacy", "/language"];

/** In the top bar: the language you're learning; tap it to choose another. */
export function LanguageSwitch() {
  const { pack } = useLearningLanguage();
  const path = usePathname();
  if (!pack || listPacks().length < 2 || OUTSIDE.some((p) => path.startsWith(p))) return null;
  return (
    <Link href="/language" className="lang-switch" aria-label={`Learning ${pack.name}. Choose another language`}>
      <span className="lang-switch-tile">
        <UnitTile {...tileFor(pack.code)} />
      </span>
      <span lang={pack.code} className="lang-switch-long">{pack.nativeName}</span>
      <span className="lang-switch-short">{pack.code.toUpperCase()}</span>
    </Link>
  );
}
