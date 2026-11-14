"use client";

import { useRouter } from "next/navigation";
import { listPacks } from "@/core/registry";
import { useLearningLanguage } from "./learning-language";
import { tileFor } from "./language-switch";
import { UnitTile } from "./unit-tile";

/** Choose what to learn. Shown at the start, and on /language to switch. */
export function LanguagePicker({ goHome = false }: { goHome?: boolean }) {
  const { pack: current, setLanguage } = useLearningLanguage();
  const router = useRouter();

  return (
    <div>
      <h1 className="page-title">What do you want to learn?</h1>
      <p className="lede">You can switch at any time. Each language keeps its own mosaic and progress.</p>
      <ul className="language-list">
        {listPacks().map((pack) => (
          <li key={pack.code}>
            <button
              type="button"
              className="button language-option"
              data-theme={pack.theme ?? "delft"}
              aria-pressed={current?.code === pack.code}
              onClick={() => {
                setLanguage(pack.code);
                if (goHome) router.push("/");
              }}
            >
              <span className="language-option-tile">
                <UnitTile {...tileFor(pack.code)} />
              </span>
              <span className="language-option-name">
                <span lang={pack.code}>{pack.nativeName}</span>
                <small>{pack.name}</small>
              </span>
              {current?.code === pack.code ? <span className="language-current">Learning now</span> : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
