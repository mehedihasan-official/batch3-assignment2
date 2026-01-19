import { Tproduct } from "../interfaces/product.interface";
import { Types } from "mongoose";
import { ProductData } from "../models/product.model";

/**
 * Create a new product
 */
const createProductIntoDB = async (productData: Tproduct) => {
  // check duplicate product by name
  if (await ProductData.isProductExist(productData.name)) {
    throw new Error("Product with this name already exists");
  }

  const result = await ProductData.create(productData);
  return result;
};

/**
 * Get all products
 * Supports search by searchTerm
 */
const getAllProductsFromDB = async (searchTerm?: string) => {
  if (searchTerm) {
    return await ProductData.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { category: { $regex: searchTerm, $options: "i" } },
        { tags: { $regex: searchTerm, $options: "i" } },
      ],
    });
  }

  return await ProductData.find();
};

/**
 * Get single product by ID
 */
const getSingleProductFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error("Invalid product ID");
  }

  const product = await ProductData.findById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

/**
 * Update product by ID
 */
const updateProductIntoDB = async (id: string, payload: Partial<Tproduct>) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error("Invalid product ID");
  }

  const updatedProduct = await ProductData.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!updatedProduct) {
    throw new Error("Product not found");
  }

  return updatedProduct;
};

/**
 * Delete product by ID
 */
const deleteProductFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error("Invalid product ID");
  }

  const deletedProduct = await ProductData.findByIdAndDelete(id);

  if (!deletedProduct) {
    throw new Error("Product not found");
  }

  return null;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
