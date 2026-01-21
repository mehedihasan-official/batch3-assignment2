"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productIdSchema = exports.updateProductSchema = exports.createProductSchema = void 0;
const zod_1 = require("zod");
/**
 * Variant Schema
 */
const variantSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
/**
 * Inventory Schema
 */
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().int().nonnegative(),
    inStock: zod_1.z.boolean(),
});
/**
 * CREATE PRODUCT (POST)
 */
exports.createProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        price: zod_1.z.number(),
        category: zod_1.z.string(),
        tags: zod_1.z.array(zod_1.z.string()),
        variants: zod_1.z.array(variantSchema),
        inventory: inventorySchema,
    }),
});
/**
 * UPDATE PRODUCT (PUT)
 */
exports.updateProductSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        category: zod_1.z.string().optional(),
        tags: zod_1.z.array(zod_1.z.string()).optional(),
        variants: zod_1.z.array(variantSchema).optional(),
        inventory: inventorySchema.optional(),
    }),
});
/**
 * PARAMS VALIDATION
 */
exports.productIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string(),
    }),
});
//# sourceMappingURL=product.validation.js.map