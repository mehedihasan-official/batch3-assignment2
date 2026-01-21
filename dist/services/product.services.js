"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../models/product.model");
/**
 * Create a new product
 */
const createProductIntoDB = async (productData) => {
    if (await product_model_1.ProductData.isProductExist(productData.name)) {
        throw new Error('Product with this name already exists');
    }
    return await product_model_1.ProductData.create(productData);
};
/**
 * Get all products (supports search)
 */
const getAllProductsFromDB = async (searchTerm) => {
    if (searchTerm) {
        const regex = new RegExp(searchTerm, 'i');
        return await product_model_1.ProductData.find({
            $or: [{ name: regex }, { category: regex }, { tags: { $in: [regex] } }],
        });
    }
    return await product_model_1.ProductData.find();
};
/**
 * Get single product by ID
 */
const getSingleProductFromDB = async (id) => {
    if (!mongoose_1.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid product ID');
    }
    const product = await product_model_1.ProductData.findById(id);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};
/**
 * Update product by ID
 */
const updateProductIntoDB = async (id, payload) => {
    if (!mongoose_1.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid product ID');
    }
    const updatedProduct = await product_model_1.ProductData.findByIdAndUpdate(id, payload, {
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
const deleteProductFromDB = async (id) => {
    if (!mongoose_1.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid product ID');
    }
    const deletedProduct = await product_model_1.ProductData.findByIdAndDelete(id);
    if (!deletedProduct) {
        throw new Error('Product not found');
    }
    return deletedProduct;
};
exports.ProductService = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    updateProductIntoDB,
    deleteProductFromDB,
};
//# sourceMappingURL=product.services.js.map