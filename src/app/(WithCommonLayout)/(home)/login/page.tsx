"use client"
import LoginModal from "@/components/auth/loginFormModal";
import React, { useState } from "react";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  return (
    <div>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
};

export default LoginPage;
