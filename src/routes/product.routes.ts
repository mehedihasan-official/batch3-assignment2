import express from 'express';
import { ProductController } from '../controllers/product.controller';
import validateRequest from '../middlewares/validateRequest';
import {
  createProductSchema,
  productIdSchema,
  updateProductSchema,
} from '../validations/product.validation';

const router = express.Router();

// Product Routes
 

// Create a new product
router.post(
  '/',
  validateRequest(createProductSchema),
  ProductController.createProduct,
);

// Get all products (supports search via query ?searchTerm=iphone)

router.get('/', ProductController.getAllProduct);

// Get single product by ID
router.get(
  '/:id',
  validateRequest(productIdSchema),
  ProductController.getSingleProduct,
);

// Update product by ID
router.put(
  '/:id',
  validateRequest(updateProductSchema),
  ProductController.updateProduct,
);

// Delete product by ID
router.delete(
  '/:id',
  validateRequest(productIdSchema),
  ProductController.deleteProduct,
);

export const ProductRoutes = router;
