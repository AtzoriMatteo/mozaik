import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { WritingHub } from "@/components/writing/writing";

type Params = { lang: string; unitId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((p) => p.units.filter((u) => u.writing?.length).map((u) => ({ lang: p.code, unitId: u.id })));
}

export const metadata: Metadata = { title: "Writing · Mozaik" };

export default async function WritingHubRoute({ params }: { params: Promise<Params> }) {
  const { lang, unitId } = await params;
  if (!getPack(lang)?.units.find((u) => u.id === unitId)?.writing?.length) notFound();
  return (
    <main>
      <WritingHub lang={lang} unitId={unitId} />
    </main>
  );
}
