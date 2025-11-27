import express from "express";
import tasksRouter from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use("/api/tasks", tasksRouter);
app.use(express.json());

const PORT = process.env.PORT;
console.log(PORT);
console.log("MONGO_URI =", process.env.MONGO_URI);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Hello world !");
  });
});
