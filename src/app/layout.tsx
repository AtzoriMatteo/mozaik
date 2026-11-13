import type { Metadata, Viewport } from "next";
import "@fontsource-variable/literata";
import "@fontsource-variable/literata/wght-italic.css";
import "@fontsource-variable/atkinson-hyperlegible-next";
import "./globals.css";
import { Logo } from "@/components/logo";
import { Nav } from "@/components/nav";
import { Account } from "@/components/account";
import { ProgressSync } from "@/components/progress-sync";
import { LearningLanguageProvider } from "@/components/learning-language";

export const metadata: Metadata = {
  title: "Mozaik",
  description: "Learn a language tile by tile: real reading, listening, vocabulary, grammar and speaking.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eceee9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f141d" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LearningLanguageProvider>
          <div className="shell">
            <header className="topbar">
              <div className="topbar-left">
                <Logo />
                <Nav />
              </div>
              <Account />
              <ProgressSync />
            </header>
            {children}
          </div>
        </LearningLanguageProvider>
      </body>
    </html>
  );
}
