import type { Metadata } from "next";
import { FlagsPage } from "@/components/flags/flags-page";

export const metadata: Metadata = { title: "Flagged sentences · Mozaik" };

export default function Flags() {
  return (
    <main>
      <FlagsPage />
    </main>
  );
}
