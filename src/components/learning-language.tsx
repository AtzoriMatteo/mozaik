"use client";

import { createContext, use, useCallback, useSyncExternalStore, type ReactNode } from "react";
import type { LanguagePack } from "@/core/language-pack";
import { chooseLearningPack, listPacks } from "@/core/registry";

/**
 * Which language the learner is currently learning.
 *
 * For now the choice lives in this browser (localStorage). Once saved words
 * are stored in the database, it moves to the learner's account so it
 * follows them across devices.
 */

const STORAGE_KEY = "mozaik:learning";
const listeners = new Set<() => void>();

function readSaved(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

type LearningContext = {
  /** The pack in use, or null when the learner still has to pick one. */
  pack: LanguagePack | null;
  setLanguage: (code: string) => void;
};

const Ctx = createContext<LearningContext | null>(null);

export function LearningLanguageProvider({ children }: { children: ReactNode }) {
  const saved = useSyncExternalStore(subscribe, readSaved, () => null);
  const pack = chooseLearningPack(listPacks(), saved);

  const setLanguage = useCallback((code: string) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // Storage unavailable (private mode etc.): the choice lasts this visit only.
    }
    listeners.forEach((l) => l());
  }, []);

  // Each language brings its own accent colour.
  const style = pack
    ? ({
        "--accent-light": pack.accent.light,
        "--accent-dark": pack.accent.dark,
      } as React.CSSProperties)
    : undefined;

  return (
    <Ctx value={{ pack, setLanguage }}>
      <div className="accent-scope" style={style} data-theme={pack?.theme ?? "delft"} data-lang={pack?.code}>
        {children}
      </div>
    </Ctx>
  );
}

export function useLearningLanguage(): LearningContext {
  const ctx = use(Ctx);
  if (!ctx) throw new Error("useLearningLanguage must be used inside LearningLanguageProvider");
  return ctx;
}
