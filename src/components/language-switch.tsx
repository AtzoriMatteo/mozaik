"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { listPacks } from "@/core/registry";
import { useLearningLanguage } from "./learning-language";
import { UnitTile } from "./unit-tile";
import type { Glaze, Motif } from "@/core/content";

/** Each language's tile on the picker and the switcher. */
export const LANGUAGE_TILE: Record<string, { motif: Motif; glaze: Glaze }> = {
  nl: { motif: "tulip", glaze: "cobalt" },
  it: { motif: "sun", glaze: "ochre" },
};

const OUTSIDE = ["/login", "/privacy", "/account"];

/** Small menu in the top bar: which language you're learning, and a way to switch. */
export function LanguageSwitch() {
  const { pack, setLanguage } = useLearningLanguage();
  const path = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);
  const packs = listPacks();
  if (!pack || packs.length < 2 || OUTSIDE.some((p) => path.startsWith(p))) return null;
  return (
    <details className="lang-switch" ref={ref}>
      <summary aria-label={`Learning ${pack.name}. Switch language`}>
        <span lang={pack.code} className="lang-switch-long">{pack.nativeName}</span>
        <span className="lang-switch-short">{pack.code.toUpperCase()}</span>
      </summary>
      <ul>
        {packs.map((p) => (
          <li key={p.code}>
            <button
              type="button"
              aria-pressed={p.code === pack.code}
              data-theme={p.theme ?? "delft"}
              onClick={() => {
                setLanguage(p.code);
                ref.current?.removeAttribute("open");
              }}
            >
              <span className="lang-switch-tile">
                <UnitTile {...(LANGUAGE_TILE[p.code] ?? { motif: "star", glaze: "cobalt" })} />
              </span>
              <span lang={p.code}>{p.nativeName}</span>
              <small>{p.name}</small>
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
}
