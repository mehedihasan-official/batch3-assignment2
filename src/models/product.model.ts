import { Document, model, Model, Schema } from 'mongoose';
import { TProduct } from '../interfaces/product.interface';

//Variation Sub Schema
const variantschema = new Schema(
  {
    type: {
      type: String,
      required: [true, 'Variation type is required'],
      trim: true,
    },
    value: {
      type: String,
      required: [true, 'Variation value is required'],
      trim: true,
    },
  },
  { _id: false },
);

// Inventory Sub Schema
const inventorySchema = new Schema(
  {
    quantity: {
      type: Number,
      required: [true, 'Inventory quantity is required'],
      min: 0,
    },
    inStock: {
      type: Boolean,
      required: [true, 'Inventory stock status is required'],
    },
  },
  { _id: false },
);

//Product Document Type
export type ProductDocument = TProduct & Document;

//Product Schema

const productSchema = new Schema<ProductDocument>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Product description is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: 0,
    },
    category: {
      type: String,
      required: [true, 'Product category is required'],
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    variants: {
      type: [variantschema],
      default: [],
    },
    inventory: {
      type: inventorySchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

/**
 * Static Method
 */
productSchema.statics.isProductExist = async function (
  name: string,
): Promise<ProductDocument | null> {
  return this.findOne({ name });
};

//Model Interface
interface ProductModel extends Model<ProductDocument> {
  isProductExist(name: string): Promise<ProductDocument | null>;
}

export const ProductData = model<ProductDocument, ProductModel>(
  'Product',
  productSchema,
);
