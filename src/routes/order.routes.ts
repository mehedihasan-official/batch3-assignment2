import express from "express";
import { OrderController } from "../controllers/order.controller";

const router = express.Router();

// -----------------------
// Order Routes
// -----------------------

// Create a new order
// POST /api/orders
router.post("/api/orders", OrderController.createOrder);

// Get all orders
// GET /api/orders
// Optional query: ?email=user@example.com
router.get("/api/orders", OrderController.getAllOrders);

export default router;
