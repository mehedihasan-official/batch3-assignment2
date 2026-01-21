"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const validateRequest_1 = __importDefault(require("../middlewares/validateRequest"));
const product_validation_1 = require("../validations/product.validation");
const router = express_1.default.Router();
// Product Routes
// Create a new product
router.post('/', (0, validateRequest_1.default)(product_validation_1.createProductSchema), product_controller_1.ProductController.createProduct);
// Get all products (supports search via query ?searchTerm=iphone)
router.get('/', product_controller_1.ProductController.getAllProduct);
// Get single product by ID
router.get('/:id', (0, validateRequest_1.default)(product_validation_1.productIdSchema), product_controller_1.ProductController.getSingleProduct);
// Update product by ID
router.put('/:id', (0, validateRequest_1.default)(product_validation_1.updateProductSchema), product_controller_1.ProductController.updateProduct);
// Delete product by ID
router.delete('/:id', (0, validateRequest_1.default)(product_validation_1.productIdSchema), product_controller_1.ProductController.deleteProduct);
exports.ProductRoutes = router;
//# sourceMappingURL=product.routes.js.map