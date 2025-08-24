import express from 'express';
import { dbConnection } from './db/db-connection.js';
import { orderRoutes } from './src/modules/orders/order-routes.js';
import { productRoutes } from './src/modules/products/product-routes.js';
import { userRoutes } from './src/modules/user/user-routes.js';
const app = express();
app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);

dbConnection
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});