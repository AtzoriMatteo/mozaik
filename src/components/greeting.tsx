"use client";

import { useSyncExternalStore } from "react";
import type { LanguagePack } from "@/core/language-pack";

const noSubscribe = () => () => {};
const localHour = () => new Date().getHours();
const serverHour = () => null;

/**
 * Greets the learner in the language they're learning, based on their local
 * time. The server doesn't know the visitor's hour, so it renders the pack's
 * neutral greeting and the browser swaps in the time-of-day one.
 */
export function Greeting({ pack }: { pack: LanguagePack }) {
  const hour = useSyncExternalStore(noSubscribe, localHour, serverHour);
  const greeting = pack.greeting(hour ?? 12);

  return (
    <div lang={pack.code}>
      <h1 className="greeting" style={{ visibility: hour === null ? "hidden" : undefined }}>
        {greeting.text}
      </h1>
      <p className="greeting-meaning" lang="en" style={{ visibility: hour === null ? "hidden" : undefined }}>
        {greeting.meaning}
      </p>
    </div>
  );
}
