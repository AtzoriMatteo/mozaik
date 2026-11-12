"use client";

import { activities, type Activity } from "@/core/course";
import type { LanguagePack } from "@/core/language-pack";
import { useProgress } from "./use-read-texts";

/** What's done across the course, and the one obvious next thing to do. */
export function useCourseProgress(pack: LanguagePack | null) {
  const read = useProgress("read", pack?.code ?? null);
  const listen = useProgress("listen", pack?.code ?? null);

  const isDone = (a: Pick<Activity, "kind" | "id">) =>
    (a.kind === "read" ? read.doneIds : listen.doneIds).has(a.id);

  const all = pack ? activities(pack) : [];
  const next = all.find((a) => !isDone(a)) ?? null;
  const started = read.doneIds.size + listen.doneIds.size > 0;

  return {
    isDone,
    next,
    started,
    markRead: read.markDone,
    markListened: listen.markDone,
  };
}
