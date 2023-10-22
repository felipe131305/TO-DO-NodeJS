import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(
        `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.99izthw.mongodb.net/merndb`
    );
    console.log("successful connection");
  } catch (error) {
    console.log(error);
  }
};
