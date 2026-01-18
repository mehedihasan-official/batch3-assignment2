import { z } from "zod";

// Variant
const variantSchema = z.object({
  type: z.string().min(1, "Variant type is required"),
  value: z.string().min(1, "Variant value is required"),
});

// Inventory
const inventorySchema = z.object({
  quantity: z
    .number()
    .min(0, "Inventory quantity cannot be negative"),

  inStoke: z.boolean(),
});

// Product
export const productValidationSchema = z.object({
  name: z.string().min(1, "Product name is required"),

  description: z.string().min(1, "Product description is required"),

  price: z
    .number()
    .min(0, "Product price cannot be negative"),

  category: z.string().min(1, "Product category is required"),

  tags: z.array(z.string()).optional(),

  variations: z.array(variantSchema).optional(),

  inventory: inventorySchema,
});
