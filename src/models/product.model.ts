import { Schema } from "mongoose";
import { Tproduct } from "../interfaces/product.interface";

// Variant Schema
const variantSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, "Variant type is required"],
    },
    value: {
      type: String,
      required: [true, "Variant value is required"],
    },
  },
  { _id: false }
);

// Inventory Schema
const inventorySchema = new Schema(
  {
    quantity: {
      type: Number,
      required: [true, "Inventory quantity is required"],
      min: 0,
    },
    inStoke: {
      type: Boolean,
      required: [true, "Inventory stock status is required"],
    },
  },
  { _id: false }
);

// Product Schema
const productSchema = new Schema<Tproduct>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: 0,
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
    },
    tags: {
      type: [String],
      default: [],
    },
    variations: {
      type: [variantSchema],
      default: [],
    },
    inventory: {
      type: inventorySchema,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default productSchema;
