import { Schema, model, Model } from "mongoose";
import { Tproduct } from "../interfaces/product.interface";
/**
 * Variation Sub Schema
 */
const variationSchema = new Schema(
  {
    type: {
      type: String,
      required: [true, "Variation type is required"],
      trim: true,
    },
    value: {
      type: String,
      required: [true, "Variation value is required"],
      trim: true,
    },
  },
  { _id: false }
);

/**
 * Inventory Sub Schema
 */
const inventorySchema = new Schema(
  {
    quantity: {
      type: Number,
      required: [true, "Inventory quantity is required"],
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: [true, "Inventory stock status is required"],
    },
  },
  { _id: false }
);

/**
 * Product Schema
 */
const productSchema = new Schema<Tproduct>(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: 0,
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
      required: false,
    },
    variations: {
      type: [variationSchema],
      default: [],
      required: false,
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

/**
 * Static Method: Check if product exists by name
 */
productSchema.statics.isProductExist = async function (
  name: string
): Promise<Tproduct | null> {
  return this.findOne({ name });
};

/**
 * Product Model Type
 */
interface ProductModel extends Model<Tproduct> {
  isProductExist(name: string): Promise<Tproduct | null>;
}

export const ProductData = model<Tproduct, ProductModel>(
  "Product",
  productSchema
);
