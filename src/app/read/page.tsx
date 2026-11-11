import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Read · Mozaik" };

export default function ReadPage() {
  return (
    <main>
      <h1 className="page-title">Reading opens here soon</h1>
      <p className="lede">
        Next up: open a short Dutch text, tap any word you don&apos;t know, and save it for review.
      </p>
      <Link href="/" className="button button-quiet">Back to your mosaic</Link>
    </main>
  );
}
