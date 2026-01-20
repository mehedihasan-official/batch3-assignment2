import { Request, Response } from 'express';
import { ProductService } from '../services/product.services';


/**
 * Create a new product
 * POST /api/products
 */
const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.createProductIntoDB(req.body);

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Product creation failed',
    });
  }
};


/**
 * Get all products (with optional search)
 * GET /api/products
 */
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await ProductService.getAllProductsFromDB(
      searchTerm as string,
    );

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Failed to fetch products',
    });
  }
};

/**
 * Get single product
 * GET /api/products/:id
 */
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const result = await ProductService.getSingleProductFromDB(id);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Failed to fetch product',
    });
  }
};

/**
 * Update product
 * PATCH /api/products/:id
 */
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    const result = await ProductService.updateProductIntoDB(id, req.body);

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Failed to update product',
    });
  }
};


/**
 * Delete product
 * DELETE /api/products/:id
 */
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    await ProductService.deleteProductFromDB(id);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: null,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Failed to delete product',
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
