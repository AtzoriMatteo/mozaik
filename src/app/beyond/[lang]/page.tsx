import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { BeyondPage } from "@/components/beyond/beyond-page";

type Params = { lang: string };

export function generateStaticParams(): Params[] {
  return listPacks().map((pack) => ({ lang: pack.code }));
}

export const metadata: Metadata = { title: "Beyond the course · Mozaik" };

export default async function BeyondRoute({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  if (!getPack(lang)) notFound();
  return (
    <main>
      <BeyondPage lang={lang} />
    </main>
  );
}
