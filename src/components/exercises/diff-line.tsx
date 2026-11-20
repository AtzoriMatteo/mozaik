import type { DiffPart } from "@/core/dictation";

/**
 * A checked dictation as a real sentence: the words as written (capitals,
 * punctuation), with missing, almost-right and extra words marked inline.
 */
export function DiffLine({ parts }: { parts: readonly DiffPart[] }) {
  const shown = parts.filter((p) => p.kind === "extra" || p.display !== "");
  return (
    <>
      {shown.map((p, i) => (
        <span key={i}>
          {i > 0 ? " " : null}
          <span
            className={`diff-${p.kind}`}
            title={p.kind === "almost" ? `You wrote: ${p.typed}` : p.kind === "missing" ? "Missing" : p.kind === "extra" ? "Not in the sentence" : undefined}
          >
            {p.kind === "extra" ? p.typed : p.display}
          </span>
        </span>
      ))}
    </>
  );
}
