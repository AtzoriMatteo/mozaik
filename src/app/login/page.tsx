import type { Metadata } from "next";
import { EmailLogin, ProviderLogin } from "./login-form";

export const metadata: Metadata = { title: "Log in · Mozaik" };

export default function LoginPage() {
  return (
    <main className="login-page">
      <h1 className="page-title">Log in</h1>
      <p className="lede">Your words and progress are kept on your account, on every device.</p>
      <ProviderLogin />
      <p className="login-or">or with email</p>
      <EmailLogin />
    </main>
  );
}
