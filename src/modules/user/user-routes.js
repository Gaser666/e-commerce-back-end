import express, { Router } from "express";
import { deleteUser, getAllUsers, loginUser, registerUser, updateUser } from "./user-controller.js";

export const userRoutes = Router();
userRoutes.use(express.json());
userRoutes.get("/users", getAllUsers);
userRoutes.post("/users", registerUser);
userRoutes.post("/users/login", loginUser)
userRoutes.put("/users/:id", updateUser);
userRoutes.delete("/users/:id", deleteUser);