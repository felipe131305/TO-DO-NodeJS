import	app from "./app.js"
import {connectDB} from "./db.js"
import dotenv from "dotenv"
dotenv.config()

connectDB();
app.listen(process.env.PORT,"0.0.0.0");
console.log("Server is running on port: "+process.env.PORT);