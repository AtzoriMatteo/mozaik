"use client";

import { useMemo } from "react";
import { activities, type Activity } from "@/core/course";
import type { LanguagePack } from "@/core/language-pack";
import { useProgress } from "./use-read-texts";
import { WRITING_REQUIRED } from "@/core/writing";

/** What's done across the course, and the one obvious next thing to do. */
export function useCourseProgress(pack: LanguagePack | null) {
  const read = useProgress("read", pack?.code ?? null);
  const listen = useProgress("listen", pack?.code ?? null);
  const grammar = useProgress("grammar", pack?.code ?? null);
  const speak = useProgress("speak", pack?.code ?? null);
  // Writing: finished topics; a unit's writing counts once enough are done.
  const writing = useProgress("writing", pack?.code ?? null);
  const done = useMemo(() => {
    const write = new Set(
      (pack?.units ?? [])
        .filter((u) => (u.writing ?? []).filter((t) => writing.doneIds.has(t.id)).length >= WRITING_REQUIRED)
        .map((u) => u.id),
    );
    return { read: read.doneIds, listen: listen.doneIds, grammar: grammar.doneIds, write, speak: speak.doneIds };
  }, [pack, read.doneIds, listen.doneIds, grammar.doneIds, writing.doneIds, speak.doneIds]);

  const isDone = (a: Pick<Activity, "kind" | "id">) => done[a.kind].has(a.id);

  const all = pack ? activities(pack) : [];
  // Speaking is a bonus: Continue never waits on it.
  const next = all.find((a) => a.kind !== "speak" && !isDone(a)) ?? null;
  const started = Object.values(done).some((ids) => ids.size > 0);

  return {
    done,
    isDone,
    next,
    started,
    markRead: read.markDone,
    markListened: listen.markDone,
    markGrammar: grammar.markDone,
    markSpoken: speak.markDone,
    writingDone: writing.doneIds,
    markWritten: writing.markDone,
  };
}
