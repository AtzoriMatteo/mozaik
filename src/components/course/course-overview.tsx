"use client";

import Link from "next/link";
import { activities, unitHref } from "@/core/course";
import { ActivityLabel } from "./activity-label";
import { LanguagePicker } from "@/components/language-picker";
import { useLearningLanguage } from "@/components/learning-language";
import { useCourseProgress } from "@/lib/progress/use-course-progress";
import { UnitTile } from "@/components/unit-tile";

/** The course as a wall of tiles: one per unit, numbered, each in its own glaze. */
export function CourseOverview() {
  const { pack } = useLearningLanguage();
  const progress = useCourseProgress(pack);
  if (!pack) return <LanguagePicker />;

  const { next } = progress;
  const levels = pack.levels.filter((l) => pack.units.some((u) => u.level === l));

  return (
    <>
      <h1 className="page-title">Course</h1>
      <p className="lede">
        Each tile is a topic: texts to read, things to hear, grammar and speaking. Go in order, or pick any tile.
      </p>

      {next ? (
        <Link href={next.href} className="button continue-button">
          {progress.started ? "Continue" : "Start"}: <ActivityLabel activity={next} lang={pack.code} />
        </Link>
      ) : (
        <p className="lede">You&apos;ve done everything here. More is on the way.</p>
      )}

      {levels.map((level) => (
        <section key={level} className="level-block" aria-labelledby={`level-${level}`}>
          <h2 id={`level-${level}`} className="level-heading">
            <span className="level-tag">{level}</span>
            {LEVEL_NAME[level] ?? level}
          </h2>
          <ol className="tile-wall">
            {pack.units
              .filter((u) => u.level === level)
              .map((unit) => {
                const n = pack.units.indexOf(unit) + 1;
                const items = activities(pack).filter((a) => a.unit.id === unit.id && a.kind !== "speak");
                const done = items.filter((a) => progress.isDone(a)).length;
                const look = unit.look ?? { motif: "tulip", glaze: "cobalt" };
                return (
                  <li key={unit.id}>
                    <Link
                      href={unitHref(pack, unit)}
                      className="unit-cell"
                      data-glaze={look.glaze}
                      data-complete={done === items.length || undefined}
                    >
                      <UnitTile motif={look.motif} glaze={look.glaze} className="unit-cell-art" />
                      <span className="unit-cell-text">
                        <span className="unit-num" aria-hidden="true">{n}</span>
                        <span className="unit-cell-names">
                          <span className="unit-cell-title" lang={pack.code}>{unit.title}</span>
                          <span className="unit-cell-sub">
                            <span className="sr-only">Unit {n}: </span>
                            {unit.titleTranslation}
                          </span>
                        </span>
                      </span>
                      <span className="unit-dots" role="img" aria-label={`${done} of ${items.length} done`}>
                        {items.map((a, i) => (
                          <span key={i} data-done={progress.isDone(a) || undefined} />
                        ))}
                      </span>
                    </Link>
                  </li>
                );
              })}
          </ol>
        </section>
      ))}

      <section className="beyond-teaser">
        <h2>Beyond the course</h2>
        <p>Real Dutch for your level: videos, shows, podcasts and books, picked to match what you can follow.</p>
        <Link href={`/beyond/${pack.code}`} className="button button-quiet">
          See what to watch, hear and read
        </Link>
      </section>
    </>
  );
}

const LEVEL_NAME: Record<string, string> = {
  A1: "Beginner",
  A2: "Elementary",
  B1: "Intermediate",
  B2: "Upper intermediate",
  C1: "Advanced",
  C2: "Proficient",
};
