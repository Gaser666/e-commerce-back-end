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