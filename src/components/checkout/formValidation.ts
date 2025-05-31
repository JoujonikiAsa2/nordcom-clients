import { z } from "zod";

export const checkoutFormSchema = z.object({
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email address").optional(),
    address: z
      .string({ required_error: "Address is required" }).optional(),
    shippingAddress: z
      .string({ required_error: "Shipping address is required" }).optional(),
    paymentMethod: z
      .enum(['cod','online']).optional().optional(),
      
  });