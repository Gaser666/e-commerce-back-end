import { Schema } from "mongoose";

const orderSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
        },
    }],
    total: Number,
    status: {
        type: String,
        enum: ["pending", "completed", "cancelled"],
        default: "pending",
    },
},
    {
        timestamps: true,
        versionKey: false
    }
);
export const orderModel = mongoose.model("Order", orderSchema);