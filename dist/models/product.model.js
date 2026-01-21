"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductData = void 0;
const mongoose_1 = require("mongoose");
//Variation Sub Schema
const variantschema = new mongoose_1.Schema({
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
}, { _id: false });
// Inventory Sub Schema
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: [true, 'Inventory quantity is required'],
        min: 0,
    },
    inStock: {
        type: Boolean,
        required: [true, 'Inventory stock status is required'],
    },
}, { _id: false });
//Product Schema
const productSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
/**
 * Static Method
 */
productSchema.statics.isProductExist = async function (name) {
    return this.findOne({ name });
};
exports.ProductData = (0, mongoose_1.model)('Product', productSchema);
//# sourceMappingURL=product.model.js.map