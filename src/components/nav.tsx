"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/course", label: "Course", match: ["/course", "/read", "/listen", "/grammar", "/speak"] },
  { href: "/review", label: "Review", match: ["/review"] },
  { href: "/plan", label: "Plan", match: ["/plan"] },
];

/** Pages you see before logging in, where the course links only lead back to login. */
const OUTSIDE = ["/login", "/privacy", "/account"];

export function Nav() {
  const path = usePathname();
  if (OUTSIDE.some((p) => path.startsWith(p))) return null;
  return (
    <nav className="nav" aria-label="Main">
      {LINKS.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="nav-link"
          aria-current={l.match.some((m) => path.startsWith(m)) ? "page" : undefined}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
