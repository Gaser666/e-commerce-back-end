import express, { Router } from 'express';
import { createProduct, getAllProducts } from './product-controller.js';
export const productRoutes = Router();
productRoutes.use(express.json());
productRoutes.get("/products", getAllProducts);
productRoutes.post("/products", createProduct);