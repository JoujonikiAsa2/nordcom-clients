"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./formValidation"; 
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RegisterModal from "./registerFormModal";

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const [open, setOpen] = useState(false);

const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
  try {
    const res = await fetch("https://nordcom-backend-server.vercel.app/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok && result.success) {
      const { accessToken, refreshToken, name, email, role } = result.data;

      // Save to cookies
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("userRole", role);

      //showing success message .. 
      toast.success(result.message || "Login successful");
      onClose(); 
      router.push( "/dashboard");
    } else {
      toast.error(result.message || "Login failed");
    }
  } catch (error: any) {
    console.error(error);
    toast.error("Something went wrong!");
  }
};


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#101940] bg-opacity-70 flex justify-center items-center  z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-lg relative ">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl">
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-orange-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-orange-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#101940] text-white py-2 rounded hover:bg-orange-500 transition-colors"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-sm text-gray-600 text-center mt-4">
         <span> Don’t have an account?</span>
          <button
            onClick={() => setOpen(true)}
           className="underline text-orange-500 px-2"
          >
            Open Register
          </button>
          {open && <RegisterModal onClose={() => setOpen(false)} />}
         </div>
      </div>
    </div>
  );
}
