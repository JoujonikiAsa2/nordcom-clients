import { z } from "zod";

export const checkoutFormSchema = z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address"),
    address: z
      .string({ required_error: "Address is required" }),
    shippingAddress: z
      .string({ required_error: "Shipping address is required" }),
    paymentMethod: z
      .enum(['CARD','BANK']).optional()
  });