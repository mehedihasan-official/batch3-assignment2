import express from "express";
import { OrderController } from "../controllers/order.controller";

const router = express.Router();


// Order Routes

// Create a new order
router.post("/api/orders", OrderController.createOrder);

// Get all orders

router.get("/api/orders", OrderController.getAllOrders);

export default router;
