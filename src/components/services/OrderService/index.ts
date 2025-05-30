"use server";

import { cookies } from "next/headers";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export const getMyOrders = async () => {
  const token = (await cookies()).get("accessToken")?.value as string;

  console.log(token);
  const orders = await fetch(`${backendUrl}/order/my-orders`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  });
  const result = await orders.json();
  return result;
};

export const addOrder = async (payload: any) => {
  const token = (await cookies()).get("accessToken")?.value as string;
  const res = await fetch(`${backendUrl}/order/create`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  return result;
};

export const getOrderById = async (id: string) => {
  const token = (await cookies()).get("accessToken")?.value as string;

  const order = await fetch(`${backendUrl}/order/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: token,
    },
  });
  const result = await order.json();
  return result;
};
