"use client";

import { useEffect, useState } from "react";
import { isAuthEnabled } from "@/lib/supabase/config";
import { getBrowserSupabase } from "@/lib/supabase/browser";

/**
 * Top-right corner: who is logged in, or a preview-mode notice.
 *
 * Read in the browser, from the login cookie, so every page can be served
 * as a ready-made static file. The proxy is what actually guards pages; this
 * corner only shows the email.
 */
export function Account() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const supabase = getBrowserSupabase();
    if (!supabase) return;
    let alive = true;
    supabase.auth.getSession().then(({ data }) => {
      if (alive) setEmail(data.session?.user.email ?? null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user.email ?? null);
    });
    return () => {
      alive = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  if (!isAuthEnabled()) {
    return <span className="notice">Preview mode</span>;
  }
  if (!email) return null;

  return (
    <div className="account">
      <span className="account-email">{email}</span>
      <form action="/auth/signout" method="post">
        <button type="submit" className="button button-quiet button-small">Log out</button>
      </form>
    </div>
  );
}
