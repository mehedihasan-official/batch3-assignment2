"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const mongoose_1 = require("mongoose");
const order_model_1 = require("../models/order.model");
const product_model_1 = require("../models/product.model");
/**
 * Create a new order
 * Also updates product inventory
 */
const createOrderIntoDB = async (orderData) => {
    const { productId, quantity } = orderData;
    //  Validate productId
    if (!mongoose_1.Types.ObjectId.isValid(productId)) {
        throw new Error("Invalid product ID");
    }
    //  Find product
    const product = await product_model_1.ProductData.findById(productId);
    if (!product) {
        throw new Error("Product not found");
    }
    // Check inventory availability
    if (product.inventory.quantity < quantity) {
        throw new Error("Insufficient quantity available in inventory");
    }
    //  Reduce inventory quantity
    product.inventory.quantity -= quantity;
    // Update inStock status
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();
    //  Create order
    const order = await order_model_1.OrderData.create(orderData);
    return order;
};
//Get all orders
//Optionally filter by email
const getAllOrdersFromDB = async (email) => {
    if (email) {
        return await order_model_1.OrderData.find({ email });
    }
    return await order_model_1.OrderData.find();
};
exports.OrderService = {
    createOrderIntoDB,
    getAllOrdersFromDB,
};
//# sourceMappingURL=order.services.js.map