import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allTexts } from "@/core/language-pack";
import { getPack, listPacks } from "@/core/registry";
import { Reader } from "@/components/reader/reader";

type Params = { lang: string; textId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((pack) => allTexts(pack).map((t) => ({ lang: pack.code, textId: t.id })));
}

function find({ lang, textId }: Params) {
  const pack = getPack(lang);
  return pack ? allTexts(pack).find((t) => t.id === textId) : undefined;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const text = find(await params);
  return { title: text ? `${text.title} · Mozaik` : "Mozaik" };
}

export default async function ReadTextPage({ params }: { params: Promise<Params> }) {
  const p = await params;
  if (!find(p)) notFound();
  return (
    <main>
      <Reader lang={p.lang} textId={p.textId} />
    </main>
  );
}
