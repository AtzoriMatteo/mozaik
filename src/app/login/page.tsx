import type { Metadata } from "next";
import { GitHubLogin, LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Log in · Mozaik" };

export default function LoginPage() {
  return (
    <main>
      <h1 className="page-title">Log in</h1>
      <p className="lede">No password needed.</p>
      <GitHubLogin />
      <p className="login-or">or get a login link by email</p>
      <LoginForm />
    </main>
  );
}
