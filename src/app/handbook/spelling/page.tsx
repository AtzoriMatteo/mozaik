import type { Metadata } from "next";
import Link from "next/link";
import { HandbookSection } from "@/components/handbook/handbook-section";

export const metadata: Metadata = { title: "Sounds and spelling · Handbook · Mozaik" };

export default function Page() {
  return (
    <main>
      <Link href="/handbook" className="back-link">
        Handbook
      </Link>
      <header className="unit-page-head">
        <h1 className="page-title">Sounds and spelling</h1>
        <p className="lede">The alphabet, long and short vowels, and the sounds to practise.</p>
      </header>
      <HandbookSection section="spelling" filterLabel="Find a sound or letter" />
    </main>
  );
}
