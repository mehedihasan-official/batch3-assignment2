import { z } from "zod";

//Variant Schema
const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});


//Inventory Schema
const inventorySchema = z.object({
  quantity: z.number().int().nonnegative(),
  inStock: z.boolean(),
});


//CREATE PRODUCT (POST)
export const createProductSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.array(z.string()),
    variants: z.array(variantSchema),
    inventory: inventorySchema,
  }),
});


//UPDATE PRODUCT (PUT)
export const updateProductSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    variants: z.array(variantSchema).optional(),
    inventory: inventorySchema.optional(),
  }),
});



//PARAMS VALIDATION
export const productIdSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
});
