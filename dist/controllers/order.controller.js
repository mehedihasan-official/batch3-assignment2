"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_validation_1 = require("../validations/order.validation");
const order_services_1 = require("../services/order.services");
const mongoose_1 = require("mongoose");
/**
 * Create a new order
 * POST /api/orders
 */
const createOrder = async (req, res) => {
    try {
        // Validate request body
        const validatedData = order_validation_1.orderValidationSchema.parse(req.body);
        const orderDataForDB = {
            ...validatedData,
            productId: new mongoose_1.Types.ObjectId(validatedData.productId),
        };
        const result = await order_services_1.OrderService.createOrderIntoDB(orderDataForDB);
        res.status(201).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || "Order creation failed",
        });
    }
};
/**
 * Get all orders
 * GET /api/orders
 * Optional query: email
 */
const getAllOrders = async (req, res) => {
    try {
        const { email } = req.query;
        const result = await order_services_1.OrderService.getAllOrdersFromDB(email);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Failed to fetch orders",
        });
    }
};
exports.OrderController = {
    createOrder,
    getAllOrders,
};
//# sourceMappingURL=order.controller.js.map