"use client";

import Link from "next/link";
import { minutesToRead } from "@/core/content";
import { LanguagePicker } from "@/components/language-picker";
import { useLearningLanguage } from "@/components/learning-language";

/** All reading texts for the language being learned, in suggested order. */
export function TextList() {
  const { pack } = useLearningLanguage();
  if (!pack) return <LanguagePicker />;

  return (
    <>
      <h1 className="page-title">Read</h1>
      <p className="lede">Short texts about everyday life. Tap any word you don&apos;t know.</p>
      <ol className="text-list">
        {pack.texts.map((t) => (
          <li key={t.id}>
            <Link href={`/read/${pack.code}/${t.id}`} className="text-card">
              <span className="text-card-title" lang={pack.code}>{t.title}</span>
              <span className="text-card-meta">
                {t.titleTranslation}
                <span className="text-card-level">{t.level}</span>
                <span>{minutesToRead(t)} min</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
