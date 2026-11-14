import type { Metadata, Viewport } from "next";
import "@fontsource-variable/literata";
import "@fontsource-variable/literata/wght-italic.css";
import "@fontsource-variable/atkinson-hyperlegible-next";
import "@fontsource-variable/bodoni-moda";
import "./globals.css";
import { Logo } from "@/components/logo";
import { Nav } from "@/components/nav";
import { Account } from "@/components/account";
import { LanguageSwitch } from "@/components/language-switch";
import { ProgressSync } from "@/components/progress-sync";
import { LearningLanguageProvider } from "@/components/learning-language";

const DESCRIPTION = "Learn Dutch or Italian, tile by tile: real texts, listening, grammar and writing. Free.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mozaik-tau.vercel.app"),
  title: "Mozaik",
  description: DESCRIPTION,
  // The card WhatsApp, iMessage and others show for a shared link. The
  // preview robots aren't logged in, so this sits on every page, login too.
  openGraph: {
    title: "Mozaik",
    description: DESCRIPTION,
    url: "/",
    siteName: "Mozaik",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Four Delft tiles: a tulip, a windmill, cheese and a drawbridge" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Mozaik", description: DESCRIPTION, images: ["/og.png"] },
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
              <div className="topbar-right">
                <LanguageSwitch />
                <Account />
              </div>
              <ProgressSync />
            </header>
            {children}
          </div>
        </LearningLanguageProvider>
      </body>
    </html>
  );
}
