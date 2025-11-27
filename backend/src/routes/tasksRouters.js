import express from "express";
import {
  createTasks,
  deleteTasks,
  editTasks,
  getAllTasks,
} from "../controllers/tasksControllers.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTasks);
router.put("/:id", editTasks);
router.delete("/:id", deleteTasks);

export default router;
