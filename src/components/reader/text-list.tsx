"use client";

import Link from "next/link";
import { minutesToRead } from "@/core/content";
import { allTexts } from "@/core/language-pack";
import { LanguagePicker } from "@/components/language-picker";
import { useLearningLanguage } from "@/components/learning-language";
import { useReadTexts } from "@/lib/progress/use-read-texts";

/** The course, unit by unit, with one obvious "continue" action on top. */
export function TextList() {
  const { pack } = useLearningLanguage();
  const { readIds } = useReadTexts(pack?.code ?? null);
  if (!pack) return <LanguagePicker />;

  const texts = allTexts(pack);
  const next = texts.find((t) => !readIds.has(t.id));

  return (
    <>
      <h1 className="page-title">Read</h1>
      <p className="lede">
        Short texts about everyday life, grouped by topic. Tap any word you don&apos;t know.
      </p>

      {next ? (
        <Link href={`/read/${pack.code}/${next.id}`} className="button continue-button">
          {readIds.size === 0 ? "Start with" : "Continue with"}:{" "}
          <span lang={pack.code}>{next.title}</span>
        </Link>
      ) : (
        <p className="lede">You&apos;ve read every text. More are on the way.</p>
      )}

      {pack.units.map((unit) => {
        const done = unit.texts.filter((t) => readIds.has(t.id)).length;
        return (
          <section key={unit.id} className="unit" aria-labelledby={`${unit.id}-title`}>
            <header className="unit-head">
              <h2 id={`${unit.id}-title`}>
                <span className="level-tag">{unit.level}</span>
                <span lang={pack.code}>{unit.title}</span>
              </h2>
              <p className="unit-sub">
                {unit.titleTranslation}
                <span className="unit-progress">
                  {done} of {unit.texts.length} read
                </span>
              </p>
            </header>

            <details className="can-do">
              <summary>What you&apos;ll be able to do</summary>
              <ul>
                {unit.canDo.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </details>

            <ol className="text-list">
              {unit.texts.map((t) => (
                <li key={t.id}>
                  <Link
                    href={`/read/${pack.code}/${t.id}`}
                    className="text-card"
                    data-read={readIds.has(t.id) || undefined}
                  >
                    <span className="text-card-title" lang={pack.code}>{t.title}</span>
                    <span className="text-card-meta">
                      {t.titleTranslation}
                      <span>{minutesToRead(t)} min</span>
                      {readIds.has(t.id) ? <span className="text-card-done">Read</span> : null}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </>
  );
}
