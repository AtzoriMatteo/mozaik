import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPack, listPacks } from "@/core/registry";
import { findSlang, slangParts } from "@/core/slang";
import { SlangPartView } from "@/components/slang/slang-part";

type Params = { lang: string; partId: string };

export function generateStaticParams(): Params[] {
  return listPacks().flatMap((pack) => slangParts(pack).map((p) => ({ lang: pack.code, partId: p.id })));
}

const find = ({ lang, partId }: Params) => {
  const pack = getPack(lang);
  return pack ? findSlang(pack, partId) : undefined;
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const part = find(await params);
  return { title: part ? `${part.title} · Mozaik` : "Mozaik" };
}

export default async function SlangRoute({ params }: { params: Promise<Params> }) {
  const p = await params;
  if (!find(p)) notFound();
  return (
    <main>
      <SlangPartView lang={p.lang} partId={p.partId} />
    </main>
  );
}
