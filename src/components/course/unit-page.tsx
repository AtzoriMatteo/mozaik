"use client";

import Link from "next/link";
import { minutesToRead } from "@/core/content";
import { getPack } from "@/core/registry";
import type { LanguagePack } from "@/core/language-pack";
import { useCourseProgress } from "@/lib/progress/use-course-progress";

const KIND_LABEL = {
  dialogue: "Dialogue",
  monologue: "Monologue",
  announcement: "Announcement",
  voicemail: "Voicemail",
} as const;

/** One unit: its goals, then a section per skill. */
export function UnitPage({ lang, unitId }: { lang: string; unitId: string }) {
  const pack = getPack(lang) as LanguagePack;
  const unit = pack.units.find((u) => u.id === unitId)!;
  const progress = useCourseProgress(pack);
  const nextHere =
    [
      ...unit.texts.map((t) => ({ kind: "read" as const, id: t.id, title: t.title, href: `/read/${lang}/${t.id}` })),
      ...unit.listening.map((l) => ({
        kind: "listen" as const,
        id: l.id,
        title: l.title,
        href: `/listen/${lang}/${l.id}`,
      })),
    ].find((a) => !progress.isDone(a)) ?? null;

  return (
    <article>
      <Link href="/course" className="back-link">All units</Link>
      <header className="unit-page-head">
        <p className="reader-unit">
          <span className="level-tag">{unit.level}</span>
          Unit {pack.units.indexOf(unit) + 1} of {pack.units.length}
        </p>
        <h1 className="page-title" lang={lang}>{unit.title}</h1>
        <p className="reader-subtitle">{unit.titleTranslation}</p>
      </header>

      <section className="can-do-box" aria-labelledby="can-do-title">
        <h2 id="can-do-title">After this unit you can</h2>
        <ul>
          {unit.canDo.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {nextHere ? (
        <Link href={nextHere.href} className="button continue-button">
          {nextHere.kind === "read" ? "Read" : "Listen to"} <span lang={lang}>{nextHere.title}</span>
        </Link>
      ) : null}

      <section className="skill-section" aria-labelledby="reading-title">
        <h2 id="reading-title">Reading</h2>
        <ol className="text-list">
          {unit.texts.map((t) => {
            const done = progress.isDone({ kind: "read", id: t.id });
            return (
              <li key={t.id}>
                <Link href={`/read/${lang}/${t.id}`} className="text-card" data-read={done || undefined}>
                  <span className="text-card-title" lang={lang}>{t.title}</span>
                  <span className="text-card-meta">
                    {t.titleTranslation}
                    <span>{minutesToRead(t)} min</span>
                    {done ? <span className="text-card-done">Done</span> : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="skill-section" aria-labelledby="listening-title">
        <h2 id="listening-title">Listening</h2>
        <ol className="text-list">
          {unit.listening.map((l) => {
            const done = progress.isDone({ kind: "listen", id: l.id });
            return (
              <li key={l.id}>
                <Link href={`/listen/${lang}/${l.id}`} className="text-card" data-read={done || undefined}>
                  <span className="text-card-title" lang={lang}>{l.title}</span>
                  <span className="text-card-meta">
                    {l.titleTranslation}
                    <span>{KIND_LABEL[l.kind]}</span>
                    {done ? <span className="text-card-done">Done</span> : null}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </article>
  );
}
