import type { Metadata } from "next";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Log in · Mozaik" };

export default function LoginPage() {
  return (
    <main>
      <h1 className="page-title">Log in</h1>
      <p className="lede">
        No password needed. Enter your email and we&apos;ll send you a link that logs you in.
      </p>
      <LoginForm />
    </main>
  );
}
