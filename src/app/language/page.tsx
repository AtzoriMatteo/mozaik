import type { Metadata } from "next";
import { LanguagePicker } from "@/components/language-picker";

export const metadata: Metadata = { title: "Choose a language · Mozaik" };

export default function Page() {
  return (
    <main>
      <LanguagePicker goHome />
    </main>
  );
}
