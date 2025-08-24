import express, { Router } from "express";
import { checkEmail } from "../../middleware/check-email.js";
import { deleteUser, getAllUsers, loginUser, registerUser, updateUser, verifyAccount } from "./user-controller.js";

export const userRoutes = Router();
userRoutes.use(express.json());
userRoutes.get("/users", getAllUsers);
userRoutes.post("/users", checkEmail, registerUser);
userRoutes.post("/users/login", loginUser)
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);
userRoutes.get("/users/verify/:email", verifyAccount);