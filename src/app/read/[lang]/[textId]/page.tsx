import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { Reader } from "@/components/reader/reader";

type Params = { lang: string; textId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((pack) => pack.texts.map((t) => ({ lang: pack.code, textId: t.id })));
}

function find({ lang, textId }: Params) {
  return getPack(lang)?.texts.find((t) => t.id === textId);
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
