import { orderModel } from "../../../db/models/order-model.js";

const createOrder = async (req, res) => {
    const { userId, products } = req.body;
    const totalPrice = products.reduce((total, product) => total + product.price * product.qty, 0);
    const order = await orderModel.create({ userId, products, total });
    res.json({
        message: "Order created successfully",
        order: order,
    });
}
const getAllOrders = async (req, res) => {
    const orders = await orderModel.find({ id: req.params.id }).populate('user').populate('products.product');
    res.json({
        message: "All orders fetched successfully",
        orders: orders,
    });
}
export { createOrder, getAllOrders };