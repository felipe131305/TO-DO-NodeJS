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
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usertFound = await User.findOne({ email });
    if (!usertFound) return res.status(400).json({ message: "user not found" });
    const isMatch = await bcrypt.compare(password, usertFound.password);

    if (!isMatch)
      return res
        .status(400)
        .json({ message: "the username or password is wrong" });

    const token = await createAccessToken({ id: usertFound._id });
    res.cookie("token", token);
    // res.json({
    //   message: "usuario create successful"
    // })
    res.send({
      id: usertFound._id,
      username: usertFound.username,
      email: usertFound.email,
      createdAt: usertFound.createdAt,
      updatedAt: usertFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");

  // eliminacion de token con expiracion y fecha de caducidad
  // res.cookie('token', "" ,{
  //   expires: new Date(0)
  // })

  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "user not found" });
  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
