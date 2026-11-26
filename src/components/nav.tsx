"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home", match: [], exact: true, icon: "M4 11 L12 4 L20 11 M6 10 V20 H18 V10" },
  { href: "/course", label: "Course", match: ["/course", "/read", "/listen", "/grammar", "/speak", "/write"], icon: "M4 4 H11 V11 H4 Z M13 4 H20 V11 H13 Z M4 13 H11 V20 H4 Z M13 13 H20 V20 H13 Z" },
  { href: "/review", label: "Review", match: ["/review"], icon: "M5 6 H15 V18 H5 Z M9 3 H19 V15" },
  { href: "/library", label: "Library", match: ["/library"], icon: "M5 4 V20 M9 4 V20 M13 5 L17 19 M4 20 H20" },
  { href: "/plan", label: "Plan", match: ["/plan"], icon: "M4 6 H20 V20 H4 Z M4 10 H20 M8 3 V7 M16 3 V7" },
  { href: "/handbook", label: "Handbook", match: ["/handbook"], icon: "M5 4 H17 A2 2 0 0 1 19 6 V20 H7 A2 2 0 0 1 5 18 Z M5 18 A2 2 0 0 1 7 16 H19" },
];

/** Pages you see before logging in, where the course links only lead back to login. */
const OUTSIDE = ["/login", "/privacy", "/account"];

const isCurrent = (path: string, l: (typeof LINKS)[number]) => (l.exact ? path === l.href : l.match.some((m) => path.startsWith(m)));

/** Top-bar links on wider screens. */
export function Nav() {
  const path = usePathname();
  if (OUTSIDE.some((p) => path.startsWith(p))) return null;
  return (
    <nav className="nav" aria-label="Main">
      {LINKS.filter((l) => !l.exact).map((l) => (
        <Link key={l.href} href={l.href} className="nav-link" aria-current={isCurrent(path, l) ? "page" : undefined}>
          {l.label}
        </Link>
      ))}
    </nav>
  );
}

/** On phones: the same links as a tab bar at the bottom, in thumb reach. */
export function TabBar() {
  const path = usePathname();
  if (OUTSIDE.some((p) => path.startsWith(p))) return null;
  return (
    <nav className="tabbar" aria-label="Main">
      {LINKS.map((l) => (
        <Link key={l.href} href={l.href} className="tabbar-link" aria-current={isCurrent(path, l) ? "page" : undefined}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d={l.icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{l.label}</span>
        </Link>
      ))}
    </nav>
  );
}
