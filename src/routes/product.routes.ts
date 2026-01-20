import express from 'express';
import { ProductController } from '../controllers/product.controller';
import validateRequest from '../middlewares/validateRequest';
import {
  createProductSchema,
  productIdSchema,
  updateProductSchema,
} from '../validations/product.validation';

const router = express.Router();

/**
 * Product Routes
 */

// Create a new product
// POST /api/products
router.post(
  '/',
  validateRequest(createProductSchema),
  ProductController.createProduct,
);

// Get all products (supports search via query ?searchTerm=iphone)
// GET /api/products
router.get('/', ProductController.getAllProduct);

// Get single product by ID
// GET /api/products/:id
router.get(
  '/:id',
  validateRequest(productIdSchema),
  ProductController.getSingleProduct,
);

// Update product by ID
// PUT /api/products/:id
router.put(
  '/:id',
  validateRequest(updateProductSchema),
  ProductController.updateProduct,
);

// Delete product by ID
// DELETE /api/products/:id
router.delete(
  '/:id',
  validateRequest(productIdSchema),
  ProductController.deleteProduct,
);

export const ProductRoutes = router;
