"use client";

import { LanguagePicker } from "@/components/language-picker";
import { useLearningLanguage } from "@/components/learning-language";
import { LibraryPage } from "./library-page";

/** The Library of the language you're learning (or a picker, the first time). */
export function CurrentLibrary() {
  const { pack } = useLearningLanguage();
  if (!pack) return <LanguagePicker />;
  return <LibraryPage lang={pack.code} />;
}
