import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id
  });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id,
  });
  const saveTask = await newTask.save();
  res.json(saveTask);
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(400).json({ message: "Task not found" });
  res.json(task);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  console.log("paso")
  if (!task) return res.status(400).json({ message: "Task not update" });
  res.json(task);
};

export const deleteask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(400).json({ message: "Task not delete" });
  return res.status(204);
};
