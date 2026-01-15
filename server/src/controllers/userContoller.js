import { UserModel } from "../models/userModel.js";

export const getUserProfile = async (req, res, next) => {
  try {
    const userId = 1;
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};