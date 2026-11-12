"use client";

import Link from "next/link";
import type { Activity } from "@/core/course";
import { ActivityLabel } from "./activity-label";
import type { LanguagePack } from "@/core/language-pack";

/** The single "what's next" button at the end of an activity. */
export function NextActivityLink({
  pack,
  next,
  onDone,
}: {
  pack: LanguagePack;
  next: Activity | null;
  onDone: () => void;
}) {
  if (!next) {
    return (
      <Link href="/course" className="button" onClick={onDone}>
        Done: back to the course
      </Link>
    );
  }
  return (
    <Link href={next.href} className="button" onClick={onDone}>
      Next: <ActivityLabel activity={next} lang={pack.code} />
    </Link>
  );
}
