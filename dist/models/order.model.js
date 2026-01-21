"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderData = void 0;
const mongoose_1 = require("mongoose");
//Order Schema
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Customer email is required'],
        trim: true,
        lowercase: true,
    },
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Product ID is required'],
    },
    price: {
        type: Number,
        required: [true, 'Order price is required'],
        min: [0, 'Price cannot be negative'],
    },
    quantity: {
        type: Number,
        required: [true, 'Order quantity is required'],
        min: [1, 'Quantity must be at least 1'],
    },
}, {
    timestamps: true,
});
exports.OrderData = (0, mongoose_1.model)('Order', orderSchema);
//# sourceMappingURL=order.model.js.map