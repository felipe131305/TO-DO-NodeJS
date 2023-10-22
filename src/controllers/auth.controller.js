import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password,
    });
    const userSave =await newUser.save();
    res.send(userSave);
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  console.log(req.body);
};
