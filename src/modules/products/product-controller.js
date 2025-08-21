import { productModel } from "../../../db/models/product-model.js";

const getAllProducts = async (req, res) => {
    const products = await productModel.find();
    res.json({
        message: "All products fetched successfully",
        products: products,
    });
}
const createProduct = async (req, res) => {
    const newProduct = await productModel.create(req.body);
    res.json({
        message: "Product created successfully",
        product: newProduct,
    });
}
export { getAllProducts, createProduct };