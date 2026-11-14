import type { Metadata } from "next";
import Link from "next/link";
import { HandbookSection } from "@/components/handbook/handbook-section";

export const metadata: Metadata = { title: "Phrases · Handbook · Mozaik" };

export default function Page() {
  return (
    <main>
      <Link href="/handbook" className="back-link">
        Handbook
      </Link>
      <header className="unit-page-head">
        <h1 className="page-title">Phrases</h1>
        <p className="lede">What to say in the shop, at the doctor&apos;s, on the phone and when you don&apos;t understand.</p>
      </header>
      <HandbookSection section="phrases" filterLabel="Find a phrase" />
    </main>
  );
}
