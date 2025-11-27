import express from "express";
import tasksRouter from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
connectDB();

app.use("/api/tasks", tasksRouter);

const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, () => {
  console.log("Hello world !");
});
