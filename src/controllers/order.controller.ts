import { Request, Response } from "express";
import { orderValidationSchema } from "../validations/order.validation";
import { OrderService } from "../services/order.services";
import { Types } from "mongoose";

//Create a new order

const createOrder = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const validatedData = orderValidationSchema.parse(req.body);

const orderDataForDB = {
  ...validatedData,
  productId: new Types.ObjectId(validatedData.productId),
};

const result = await OrderService.createOrderIntoDB(orderDataForDB);

    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || "Order creation failed",
    });
  }
};

//Get all orders

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    const result = await OrderService.getAllOrdersFromDB(
      email as string | undefined
    );

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Failed to fetch orders",
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
};
