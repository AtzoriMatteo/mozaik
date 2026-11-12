"use client";

import Link from "next/link";
import { unitHref } from "@/core/course";
import { LanguagePicker } from "@/components/language-picker";
import { useLearningLanguage } from "@/components/learning-language";
import { useCourseProgress } from "@/lib/progress/use-course-progress";

/** The course at a glance: one Continue button, then the units. */
export function CourseOverview() {
  const { pack } = useLearningLanguage();
  const progress = useCourseProgress(pack);
  if (!pack) return <LanguagePicker />;

  const { next } = progress;

  return (
    <>
      <h1 className="page-title">Course</h1>
      <p className="lede">
        Topic units with texts to read and things to listen to. Go in order, or pick anything.
      </p>

      {next ? (
        <Link href={next.href} className="button continue-button">
          {progress.started ? "Continue" : "Start"}: {next.kind === "read" ? "read" : "listen to"}{" "}
          <span lang={pack.code}>{next.title}</span>
        </Link>
      ) : (
        <p className="lede">You&apos;ve done everything here. More is on the way.</p>
      )}

      <ol className="unit-list">
        {pack.units.map((unit) => {
          const total = unit.texts.length + unit.listening.length;
          const done =
            unit.texts.filter((t) => progress.isDone({ kind: "read", id: t.id })).length +
            unit.listening.filter((l) => progress.isDone({ kind: "listen", id: l.id })).length;
          return (
            <li key={unit.id}>
              <Link href={unitHref(pack, unit)} className="unit-card" data-complete={done === total || undefined}>
                <span className="unit-card-title">
                  <span className="level-tag">{unit.level}</span>
                  <span lang={pack.code}>{unit.title}</span>
                </span>
                <span className="unit-card-meta">
                  <span>{unit.titleTranslation}</span>
                  <span className="unit-card-progress">
                    {done} of {total} done
                  </span>
                </span>
                <span className="unit-meter" aria-hidden="true">
                  <span style={{ width: `${(done / total) * 100}%` }} />
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
