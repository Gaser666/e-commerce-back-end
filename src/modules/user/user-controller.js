import bcrypt from "bcrypt";
import { userModel } from "../../../db/models/user-model.js";
const getAllUsers = async (req, res) => {
    const users = await userModel.find();
    res.json({
        message: "All users fetched successfully",
        users: users,
    })
};
const registerUser = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const newUser = await userModel.insertOne(req.body);
    newUser.password = undefined;
    res.json({
        message: "User registered successfully",
        user: newUser,
    })
}
const loginUser = async (req, res) => {
    const exist = await userModel.findOne({ email: req.body.email });
    if (!exist) {
        return res.status(404).json({
            message: "User not found",
        });
    }
    const isPasswordValid = bcrypt.compareSync(req.body.password, exist.password);
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "emial or password is incorrect",
        });
    }
    res.json({
        message: `Welcocme ${exist.name}`
    });

}
const updateUser = async (req, res) => {
    let { id } = req.params;
    const updatedUser = await userModel.findByIdAndUpdate(id, { ...req.body }, { new: true });
    res.json({
        message: "User updated successfully",
        user: updatedUser,
    });
}
const deleteUser = async (req, res) => {
    let { id } = req.params;
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.json({
        message: "User deleted successfully",
        deletedUser: deletedUser,
    });
}
export { deleteUser, getAllUsers, loginUser, registerUser, updateUser };

