import type { Verdict } from "@/core/answers";

const LABEL: Record<Verdict, string> = { right: "Right", almost: "Almost", wrong: "Not quite" };

/** The verdict headline in a feedback banner: a glazed mark and one clear word. */
export function VerdictLine({ verdict, label }: { verdict: Verdict; label?: string }) {
  return (
    <p className="feedback-verdict" data-verdict={verdict}>
      <span className="verdict-mark" aria-hidden="true">
        {verdict === "wrong" ? (
          <svg viewBox="0 0 16 16" width="14" height="14">
            <path d="M4 4 L12 12 M12 4 L4 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" width="14" height="14">
            <path d="M3.5 8.5 L6.8 11.5 L12.5 4.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        )}
      </span>
      {label ?? LABEL[verdict]}
    </p>
  );
}

/** Dictation and other scored answers: 0–1 to a verdict. */
export function verdictFromScore(score: number): Verdict {
  return score >= 0.95 ? "right" : score >= 0.6 ? "almost" : "wrong";
}
