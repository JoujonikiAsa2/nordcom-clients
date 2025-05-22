import LoginForm from "@/components/auth/loginForm";
import React, { Suspense } from "react";
// import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
