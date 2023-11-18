import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "User is Requiered ",
  }),
  email: z.string({
    required_error: "Email is Requiered",
  }).email({
    message: "Invalid email ",
  }),
  password: z.string({
    required_error: "password is Requiered ",
  }).min(6, {
    message: "Password must be at least 6 characters ",
  }),
});

export const loginSchema = z.object({
  email: z.string({
    required_error: "Email is Requiered ",
  }).email({
    message: "Email is not valid ",
  }),
  password: z.string({
    required_error: "password is Requiered ",
  }).min(6, {
    message: "Password must be at least 6 characters ",
  }),
});
