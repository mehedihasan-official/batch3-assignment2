import { Types } from "mongoose";
import { TOrder } from "../interfaces/order.interface";
import { ProductData } from "../models/product.model";
import { OrderData } from "../models/order.model";


/**
 * Create a new order
 * Also updates product inventory
 */
const createOrderIntoDB = async (orderData: TOrder) => {
  const { productId, quantity } = orderData;

  //  Validate productId
  if (!Types.ObjectId.isValid(productId)) {
    throw new Error("Invalid product ID");
  }

  //  Find product
  const product = await ProductData.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }

  // Check inventory availability
  if (product.inventory.quantity < quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  //  Reduce inventory quantity
  product.inventory.quantity -= quantity;

  //  Update inStock status
  if (product.inventory.quantity === 0) {
    product.inventory.inStock = false;
  }

  await product.save();

  //  Create order
  const order = await OrderData.create(orderData);

  return order;
};

/**
 * Get all orders
 * Optionally filter by email
 */
const getAllOrdersFromDB = async (email?: string) => {
  if (email) {
    return await OrderData.find({ email });
  }

  return await OrderData.find();
};

export const OrderService = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};
