import mongoose from "mongoose";
export const dbConnection = mongoose.connect("mongodb://localhost:27017/e-commerce-nti").then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.error("Database connection failed:", err);
});