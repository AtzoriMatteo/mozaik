"use client";

import Link from "next/link";
import { VERB, type Activity } from "@/core/course";
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
      Next: {VERB[next.kind]}{" "}
      {next.kind === "grammar" ? next.title : <span lang={pack.code}>{next.title}</span>}
    </Link>
  );
}
