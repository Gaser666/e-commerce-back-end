import { productModel } from "../../../db/models/product-model.js";

const getAllProducts = async (req, res) => {
    const products = await productModel.find();
    res.json({
        message: "All products fetched successfully",
        products: products,
    });
}
const createProduct = async (req, res) => {
    const newProduct = await productModel.insertOne(req.body);
    console.log(newProduct);
    res.json({
        message: "Product created successfully",
        product: newProduct,
    });
}
const deleteProduct = async (req, res) => {
    let { id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete(id);
    res.json({
        message: "Product deleted successfully",
        deletedProduct: deletedProduct,
    });
}
export { createProduct, deleteProduct, getAllProducts };

