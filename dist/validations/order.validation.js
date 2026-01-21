"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const mongoose_1 = require("mongoose");
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    productId: zod_1.z.string().refine((val) => mongoose_1.Types.ObjectId.isValid(val), {
        message: 'Invalid product ID',
    }),
    price: zod_1.z.number().min(0, 'Order price cannot be negative'),
    quantity: zod_1.z.number().min(1, "Quantity must be at least 1"),
});
//# sourceMappingURL=order.validation.js.map