import { Router } from 'express';
import { createOrder, getAllOrders } from './order-controllers.js';
export const orderRoutes = Router();
orderRoutes.post("/orders", createOrder);
orderRoutes.get("/orders", getAllOrders);
