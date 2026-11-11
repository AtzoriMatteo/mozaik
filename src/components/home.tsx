"use client";

import Link from "next/link";
import { Greeting } from "./greeting";
import { LanguagePicker } from "./language-picker";
import { useLearningLanguage } from "./learning-language";
import { Mosaic } from "./mosaic";

export function Home() {
  const { pack } = useLearningLanguage();
  if (!pack) return <LanguagePicker />;

  // Saved words arrive in step 2; until then every mosaic starts empty.
  const learned = 0;

  return (
    <>
      <Greeting pack={pack} />

      <section className="mosaic-block" aria-labelledby="mosaic-heading">
        <h2 id="mosaic-heading" className="sr-only">Your {pack.name} mosaic</h2>
        <Mosaic learned={learned} />
        <p className="mosaic-caption">
          {learned === 0
            ? "Your mosaic is empty. Every word you learn fills a tile."
            : `${learned} tiles so far.`}
        </p>
      </section>

      <Link href="/read" className="button">Start reading</Link>
    </>
  );
}
