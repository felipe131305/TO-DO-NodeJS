import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
const router = Router();

router.post("/Resgister", validateSchema(registerSchema), register);

router.post("/Login", validateSchema(loginSchema), login);

router.post("/Logout", logout);

router.get("/profile", authRequired, profile);

router.get("/Auth/verify", verifyToken);


export default router;
