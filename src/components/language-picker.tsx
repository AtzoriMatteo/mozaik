"use client";

import { listPacks } from "@/core/registry";
import { useLearningLanguage } from "./learning-language";

/** Shown when several languages are installed and the learner hasn't picked one. */
export function LanguagePicker() {
  const { setLanguage } = useLearningLanguage();

  return (
    <div>
      <h1 className="page-title">What do you want to learn?</h1>
      <p className="lede">You can switch at any time. Each language keeps its own mosaic.</p>
      <ul className="language-list">
        {listPacks().map((pack) => (
          <li key={pack.code}>
            <button
              type="button"
              className="button language-option"
              onClick={() => setLanguage(pack.code)}
            >
              <span lang={pack.code}>{pack.nativeName}</span>
              <small>{pack.name}</small>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
