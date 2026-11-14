"use client";

import Link from "next/link";
import type { Activity } from "@/core/course";
import { ActivityLabel } from "./activity-label";
import { unitNumber, type LanguagePack } from "@/core/language-pack";
import { NextStep } from "@/components/next-step";

/** The single "what's next" button at the end of an activity. */
export function NextActivityLink({
  pack,
  next,
  onDone,
  quiet = false,
}: {
  pack: LanguagePack;
  next: Activity | null;
  onDone: () => void;
  quiet?: boolean;
}) {
  const cls = quiet ? "button button-quiet" : "button";
  if (!next) {
    return (
      <Link href="/course" className={cls} onClick={onDone}>
        Done: back to the course
      </Link>
    );
  }
  if (quiet) {
    return (
      <Link href={next.href} className={cls} onClick={onDone}>
        Skip the questions
      </Link>
    );
  }
  return (
    <NextStep href={next.href} skill={next.kind} onClick={onDone} detail={next.kind === "read" || next.kind === "listen" ? next.titleTranslation : `${next.unit.level} unit ${unitNumber(pack, next.unit).n}: ${next.unit.titleTranslation}`}>
      <span className="capitalize">
        <ActivityLabel activity={next} lang={pack.code} />
      </span>
    </NextStep>
  );
}
