import type { Metadata } from "next";
import { CurrentLibrary } from "@/components/library/current-library";

export const metadata: Metadata = { title: "Library · Mozaik" };

export default function LibraryHome() {
  return (
    <main>
      <CurrentLibrary />
    </main>
  );
}
