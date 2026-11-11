import { isAuthEnabled } from "@/lib/supabase/config";
import { getCurrentUserEmail } from "@/lib/supabase/server";

/** Top-right corner: who is logged in, or a preview-mode notice. */
export async function Account() {
  if (!isAuthEnabled()) {
    return <span className="notice">Preview mode</span>;
  }

  const email = await getCurrentUserEmail();
  if (!email) return null;

  return (
    <div className="account">
      <span>{email}</span>
      <form action="/auth/signout" method="post">
        <button type="submit" className="button button-quiet">Log out</button>
      </form>
    </div>
  );
}
