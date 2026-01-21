"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const order_routes_1 = require("./routes/order.routes");
const product_routes_1 = require("./routes/product.routes");
const app = (0, express_1.default)();
// middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// routes
app.use('/api/products', product_routes_1.ProductRoutes);
app.use('/api/orders', order_routes_1.OrderRoutes);
app.get('/', (_req, res) => {
    res.send('E-commerce API is running');
});
// not found route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});
// global error handler
app.use(errorHandler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map