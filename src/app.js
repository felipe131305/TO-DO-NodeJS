import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import taksRoutes from"./routes/tasks.routes.js"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Reemplaza con tu puerto de front-end
    credentials: true
  }));
  
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api",taksRoutes);

export default app;
