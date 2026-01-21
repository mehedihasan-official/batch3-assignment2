import express from 'express';
import { OrderController } from '../controllers/order.controller';

const router = express.Router();

// Order Routes

// Create a new order
router.post('/', OrderController.createOrder);

// Get all orders

router.get('/', OrderController.getAllOrders);

export const OrderRoutes = router;
