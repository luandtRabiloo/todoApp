import Task from "../models/task.js";

export const getAllTasks = async (req, res) => {
  try {
    const allTask = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(allTask);
  } catch (error) {
    console.log("allTask", error);
    res.status(500).json({ message: "loi he thong" });
  }
};

export const createTasks = async (req, res) => {
  try {
    const { title } = req.body;
    const task = new Task({ title });
    const newTask = await task.save();
    res.status(200).json(newTask);
  } catch (error) {
    console.log("createTasks", error);
    res.status(500).json({ message: "loi he thong" });
  }
};

export const editTasks = async (req, res) => {
  try {
    const { title, status, completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        status,
        completed,
      },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ message: "Nhiem vu khong ton tai" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.log("editTasks", error);
    res.status(500).json({ message: "loi he thong" });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.status(404).json({ message: "Nhiem vu khong ton tai" });
    }
    res.status(200).json(deleteTask);
    res.status(200).send("ban co 20 ");
  } catch (error) {
    console.log("deleteTasks", error);
    res.status(500).json({ message: "loi he thong" });
  }
};
