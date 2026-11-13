"use client";

import { useEffect } from "react";
import { syncProgress } from "@/lib/progress/sync";

/** Syncs progress when the site opens and whenever you come back to its tab. */
export function ProgressSync() {
  useEffect(() => {
    void syncProgress();
    const onVisible = () => {
      if (document.visibilityState === "visible") void syncProgress();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);
  return null;
}
