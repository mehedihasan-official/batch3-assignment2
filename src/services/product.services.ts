import { Types } from 'mongoose';
import { TProduct } from '../interfaces/product.interface';
import { ProductData } from '../models/product.model';

/**
 * Create a new product
 */
const createProductIntoDB = async (productData: TProduct) => {
  if (await ProductData.isProductExist(productData.name)) {
    throw new Error('Product with this name already exists');
  }

  return await ProductData.create(productData);
};

/**
 * Get all products (supports search)
 */
const getAllProductsFromDB = async (searchTerm?: string) => {
  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'i');

    return await ProductData.find({
      $or: [{ name: regex }, { category: regex }, { tags: { $in: [regex] } }],
    });
  }

  return await ProductData.find();
};

/**
 * Get single product by ID
 */
const getSingleProductFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error('Invalid product ID');
  }

  const product = await ProductData.findById(id);

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
};

/**
 * Update product by ID
 */
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error('Invalid product ID');
  }

  const updatedProduct = await ProductData.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!updatedProduct) {
    throw new Error('Product not found');
  }

  return updatedProduct;
};

/**
 * Delete product by ID
 */
const deleteProductFromDB = async (id: string) => {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error('Invalid product ID');
  }

  const deletedProduct = await ProductData.findByIdAndDelete(id);

  if (!deletedProduct) {
    throw new Error('Product not found');
  }

  return deletedProduct;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
