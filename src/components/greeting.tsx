"use client";

import { useSyncExternalStore } from "react";
import { getDefaultPack } from "@/core/registry";

const noSubscribe = () => () => {};
const localHour = () => new Date().getHours();
const serverHour = () => null;

/**
 * Greets the learner in the target language, based on their local time.
 * The server doesn't know the visitor's hour, so it renders a neutral
 * "Hallo" and the browser swaps in the time-of-day greeting.
 */
export function Greeting() {
  const pack = getDefaultPack();
  const hour = useSyncExternalStore(noSubscribe, localHour, serverHour);
  const greeting = hour === null ? { text: "Hallo", meaning: "Hello" } : pack.greeting(hour);

  return (
    <div lang={pack.code}>
      <h1 className="greeting">{greeting.text}</h1>
      <p className="greeting-meaning" lang="en">{greeting.meaning}</p>
    </div>
  );
}
