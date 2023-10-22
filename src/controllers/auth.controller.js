import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import dotenv from "dotenv";
import { token } from "morgan";
dotenv.config();

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const userSave = await newUser.save();
    const token = await createAccessToken({ id: userSave._id });
    res.cookie("token", token);
    // res.json({
    //   message: "usuario create successful"
    // })
    res.send({
      id: userSave._id,
      username: userSave.username,
      email: userSave.email,
      createdAt: userSave.createdAt,
      updatedAt: userSave.updatedAt,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};

export const login = (req, res) => {
  console.log(req.body);
};
