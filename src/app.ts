import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes";

const app: Application = express();

//middleware
app.use(express.json());

// Routes:
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Error handling
app.use(errorHandler);