/**
 * Combining this device's progress with the account's.
 *
 * The account is the record: an activity it knows about (done or undone)
 * looks the same on every device. Anything only this device knows about was
 * finished here before syncing existed, or while offline, so it is kept and
 * uploaded. That way the first sync joins phone and laptop progress instead of
 * one overwriting the other.
 */

export type ProgressRow = { language: string; kind: string; item_id: string; done: boolean };

/** "language|kind" → finished ids. */
export type LocalProgress = Map<string, Set<string>>;

export const slot = (language: string, kind: string) => `${language}|${kind}`;

export function mergeProgress(local: LocalProgress, rows: ProgressRow[]) {
  const next: LocalProgress = new Map([...local].map(([k, ids]) => [k, new Set(ids)]));
  const known = new Set<string>();
  for (const r of rows) {
    const k = slot(r.language, r.kind);
    known.add(`${k}|${r.item_id}`);
    const ids = next.get(k) ?? new Set<string>();
    if (r.done) ids.add(r.item_id);
    else ids.delete(r.item_id);
    next.set(k, ids);
  }
  const upload: ProgressRow[] = [];
  for (const [k, ids] of local) {
    const [language, kind] = k.split("|");
    for (const id of ids) {
      if (!known.has(`${k}|${id}`)) upload.push({ language, kind, item_id: id, done: true });
    }
  }
  return { next, upload };
}
