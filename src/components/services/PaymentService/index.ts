"use server";

import { cookies } from "next/headers";

const backendUrl = process.env.BACKEND_URL as string;

export const getSession = async (payload: {
  name: string;
  email: string;
  amount: number;
}) => {
  try {
    const res = await fetch(`${backendUrl}/payment/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("error", error);
    throw new Error("Failed to fetch payment");
  }
};

export const getMyPayments = async (email: string) => {
  const token = (await cookies()).get("accessToken")?.value as string;
  const carts = await fetch(`${backendUrl}/my-payments/${email}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  });
  const result = await carts.json();
  return result;
};

export const createPayment = async (payload: any) => {
  const token = (await cookies()).get("accessToken")?.value as string;
  const res = await fetch(`${backendUrl}/payment/create`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(payload),
  });
  const result = await res.json();
  return result;
};
