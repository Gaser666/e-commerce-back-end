import { Router } from 'express';
import { createProduct, getAllProducts } from './product-controller.js';
export const productRoutes = Router();
productRoutes.get("/products", getAllProducts);
productRoutes.post("/products", createProduct);