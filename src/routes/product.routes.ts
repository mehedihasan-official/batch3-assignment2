
import express from 'express';
import { ProductController } from '../controllers/product.controller';

const router = express.Router();

// will call the controller function:

// Create a new product
router.post('/api/products', ProductController.createProduct);

// get all products
router.get('/api/products', ProductController.);


