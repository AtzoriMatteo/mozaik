import Link from "next/link";
import { Tile } from "./tile";

/** Wordmark: one glazed tile beside the name. */
export function Logo() {
  return (
    <Link href="/" className="wordmark" aria-label="Mozaik home">
      <span style={{ width: 30, display: "inline-block" }}>
        <Tile glazed />
      </span>
      Mozaik
    </Link>
  );
}
