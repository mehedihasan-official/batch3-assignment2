import { Request, Response } from 'express';
import { ProductService } from '../services/product.services';
import { productValidationSchema } from '../validations/product.validation';

/**
 * Create a new product
 * POST /api/products
 */
const createProduct = async (req: Request, res: Response) => {
  try {
    const validatedData = productValidationSchema.parse(req.body);
    const result = await ProductService.createProductIntoDB(validatedData);

    res.status(202).json({
      success: true,
      message: 'Product Created Successfully',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Product creation failed',
    });
  }
};

export const ProductController = {
  createProduct,
};
