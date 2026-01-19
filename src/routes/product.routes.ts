import express from "express";
import { ProductController } from "../controllers/product.controller";

const router = express.Router();

/**
 * Product Routes
 */

// Create a new product
// POST /api/products
router.post("/api/products", ProductController.createProduct);

// Get all products (supports search via query ?searchTerm=iphone)
// GET /api/products
router.get("/api/products", ProductController.getAllProduct);

// Get single product by ID
// GET /api/products/:id
router.get("/api/products/:id", ProductController.getSingleProduct);

// Update product by ID
// PUT /api/products/:id
router.put("/api/products/:id", ProductController.updateProduct);

// Delete product by ID
// DELETE /api/products/:id
router.delete("/api/products/:id", ProductController.deleteProduct);

export const ProductRoutes = router;