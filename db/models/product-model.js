import mongoose, { Schema } from "mongoose";
const productSchema = Schema({
    title: String,
    description: String,
    price: Number,
    qty: Number,
},
    {
        timestamps: true,
        versionKey: false
    }
);
export const productModel = mongoose.model("Product", productSchema);