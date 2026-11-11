import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "@fontsource-variable/literata";
import "@fontsource-variable/literata/wght-italic.css";
import "@fontsource-variable/atkinson-hyperlegible-next";
import "./globals.css";
import { Logo } from "@/components/logo";
import { Account } from "@/components/account";

export const metadata: Metadata = {
  title: "Mozaik",
  description: "Learn a language tile by tile: real reading, listening, vocabulary, grammar and speaking.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1524" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="topbar">
            <Logo />
            <Suspense fallback={null}>
              <Account />
            </Suspense>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
