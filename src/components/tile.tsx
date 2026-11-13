/**
 * A single Mozaik tile. Glazed tiles carry a simple Delft-style ornament
 * (corner quarter-circles and a four-petal centre); empty tiles are just
 * an outline waiting to be filled.
 */
export function Tile({ glazed, title, color = "var(--accent)" }: { glazed: boolean; title?: string; color?: string }) {
  if (!glazed) {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <rect
          x="1" y="1" width="38" height="38" rx="4"
          fill="none" stroke="var(--grout)" strokeWidth="1.25" strokeDasharray="3 3"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 40 40" role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <rect x="1" y="1" width="38" height="38" rx="4" fill="var(--tile)" stroke={color} strokeWidth="1.25" />
      {/* corner quarter-circles */}
      <path d="M1 9 A8 8 0 0 0 9 1" fill="none" stroke={color} strokeWidth="1.5" />
      <path d="M31 1 A8 8 0 0 0 39 9" fill="none" stroke={color} strokeWidth="1.5" />
      <path d="M39 31 A8 8 0 0 0 31 39" fill="none" stroke={color} strokeWidth="1.5" />
      <path d="M9 39 A8 8 0 0 0 1 31" fill="none" stroke={color} strokeWidth="1.5" />
      {/* four petals */}
      <ellipse cx="20" cy="13.5" rx="3.2" ry="5" fill={color} />
      <ellipse cx="20" cy="26.5" rx="3.2" ry="5" fill={color} />
      <ellipse cx="13.5" cy="20" rx="5" ry="3.2" fill={color} />
      <ellipse cx="26.5" cy="20" rx="5" ry="3.2" fill={color} />
      <circle cx="20" cy="20" r="2.4" fill="var(--tile)" />
    </svg>
  );
}
