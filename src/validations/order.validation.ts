import { z } from "zod";
import { Types } from "mongoose";

export const orderValidationSchema = z.object({
  email: z
    .string()
    .email("Invalid email address"),

  productId: z
    .string()
    .refine((val) => Types.ObjectId.isValid(val), {
      message: "Invalid product ID",
    }),

  price: z
    .number()
    .min(0, "Order price cannot be negative"),

  quantity: z
    .number()
    .min(1, "Quantity must be at least 1"),
});
