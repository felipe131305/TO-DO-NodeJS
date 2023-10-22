import { Router } from "express";
import { login,register } from "../controllers/auth.controller.js";
const router = Router();

router.post('/Resgister', register);
router.post("/Login", login);


export default router
