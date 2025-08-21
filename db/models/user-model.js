import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    cart: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
            qty: Number,
        }
    ],
    isConfirmed: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
        versionKey: false
    });

export const userModel = mongoose.model("User", userSchema);