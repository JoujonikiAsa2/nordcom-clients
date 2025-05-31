"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema } from "./formValidation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { registerUser } from "@/lib/api/register";

type RegisterModalProps = {
  onClose: () => void;
};

export default function RegisterModal({ onClose }: RegisterModalProps) {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(registrationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = form;

  const password = watch("password");
  const passwordConfirm = watch("passwordConfirm");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await registerUser(data);
      if (res?.success) {
        toast.success(res?.message);
        onClose();
        router.push("/");
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  // Optional: Close modal on Escape key press
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-left">Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-left">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-left">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-left">Confirm Password</label>
            <input
              type="password"
              {...register("passwordConfirm")}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {passwordConfirm && password !== passwordConfirm && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!!passwordConfirm && password !== passwordConfirm}
           className="w-full bg-[#101940] text-white py-2 rounded hover:bg-orange-500 transition-colors"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
