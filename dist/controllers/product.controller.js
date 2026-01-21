"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_services_1 = require("../services/product.services");
/**
 * Create a new product
 * POST /api/products
 */
const createProduct = async (req, res) => {
    try {
        const result = await product_services_1.ProductService.createProductIntoDB(req.body);
        res.status(201).json({
            success: true,
            message: 'Product created successfully',
            data: result,
        });
    }
    catch (err) {
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
const getAllProduct = async (req, res) => {
    try {
        const { searchTerm } = req.query;
        const result = await product_services_1.ProductService.getAllProductsFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: 'Products fetched successfully',
            data: result,
        });
    }
    catch (err) {
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
const getSingleProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await product_services_1.ProductService.getSingleProductFromDB(id);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully',
            data: result,
        });
    }
    catch (err) {
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
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await product_services_1.ProductService.updateProductIntoDB(id, req.body);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
            data: result,
        });
    }
    catch (err) {
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
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await product_services_1.ProductService.deleteProductFromDB(id);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
            data: null,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || 'Failed to delete product',
        });
    }
};
exports.ProductController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
//# sourceMappingURL=product.controller.js.map