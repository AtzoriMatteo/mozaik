"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/course", label: "Course", match: ["/course", "/read", "/listen", "/grammar"] },
  { href: "/review", label: "Review", match: ["/review"] },
];

export function Nav() {
  const path = usePathname();
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
