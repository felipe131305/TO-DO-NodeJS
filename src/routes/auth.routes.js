import { Router } from "express";
import { login, register, logout, profile } from "../controllers/auth.controller.js";
import {authRequired} from "../middlewares/validateToken.js";
const router = Router();

router.post("/Resgister", register);

router.post("/Login", login);

router.post("/Logout", logout);

router.get("/profile",authRequired,profile)

export default router;
