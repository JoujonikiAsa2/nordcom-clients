"use server";

import { CartItem } from "@/types/cart";
import { cookies } from "next/headers";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export const getMyCarts = async () => {
  const token = (await cookies()).get("accessToken")?.value as string;

  console.log(token);
  const carts = await fetch(`${backendUrl}/cart`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  });
  const result = await carts.json();
  console.log(result);
  return result;
};

export const addToCart = async (userId: string, items: CartItem) => {
  const paylaod = {
    userId,
    items,
  };
  const token = (await cookies()).get("accessToken")?.value as string;
  const result = await fetch(`${backendUrl}/cart/add`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(paylaod),
  });
  return result;
};

export const removeItemFromCart = async (id: string) => {
  const token = (await cookies()).get("accessToken")?.value as string;
  const result = await fetch(`${backendUrl}/cart/remove/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  return result;
};

export const removeCart = async (id: string) => {
  const token = (await cookies()).get("accessToken")?.value as string;
  const result = await fetch(`${backendUrl}/cart/remove-cart/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  return result;
};
