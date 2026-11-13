import type { Metadata } from "next";
import { NewPasswordForm } from "@/app/login/login-form";

export const metadata: Metadata = { title: "Password · Mozaik" };

export default function PasswordPage() {
  return (
    <main className="login-page">
      <h1 className="page-title">Choose a password</h1>
      <p className="lede">Then you can log in with your email and this password, on any device.</p>
      <NewPasswordForm />
    </main>
  );
}
