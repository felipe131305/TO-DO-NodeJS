import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  createTask,
  getTask,
  deleteask,
  updateTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middlewares.js";
import { createScherma } from "../schemas/task.schema.js";
const router = Router();

router.get("/tasks", authRequired, getTasks);
router.post("/tasks", authRequired, validateSchema(createScherma), createTask);
router.delete("/tasks/:id", authRequired, deleteask);
router.get("/tasks/:id", authRequired, getTask);
router.put("/tasks/:id", authRequired, updateTask);

export default router;
