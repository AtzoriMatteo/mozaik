import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { LibraryPage } from "@/components/library/library-page";

type Params = { lang: string };

export function generateStaticParams(): Params[] {
  return listPacks().map((pack) => ({ lang: pack.code }));
}

export const metadata: Metadata = { title: "Library · Mozaik" };

export default async function LibraryRoute({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  if (!getPack(lang)) notFound();
  return (
    <main>
      <LibraryPage lang={lang} />
    </main>
  );
}
