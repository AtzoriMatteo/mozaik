"use client";

import { useSyncExternalStore } from "react";

/**
 * The current time, refreshed every minute, read only in the browser.
 * Returns null while prerendering (the server can't know the visitor's
 * time), so time-based UI fills in once the page loads.
 */

let minute = 0;

function snapshot() {
  const m = Math.floor(Date.now() / 60_000) * 60_000;
  if (m !== minute) minute = m;
  return minute;
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
}

export function useNow(): number | null {
  return useSyncExternalStore(subscribe, snapshot, () => null);
}
