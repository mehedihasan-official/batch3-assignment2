import cors from 'cors';
import express from 'express';
import errorHandler from './middlewares/errorHandler';
import { OrderRoutes } from './routes/order.routes';
import { ProductRoutes } from './routes/product.routes';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

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
app.use(errorHandler);

export default app;
