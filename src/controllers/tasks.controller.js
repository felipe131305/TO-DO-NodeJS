import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id
  });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id,
  });
  const saveTask = await newTask.save();
  res.json(saveTask);
  } catch (error) {
    return res.sendStatus(500).json({ message: "something whet wrong" });
  }
};

export const getTask = async (req, res) => {
 try {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(400).json({ message: "Task not found" });
  res.json(task);
 } catch (error) {
  return res.sendStatus(500).json({ message: "something whet wrong" });
 }
};

export const updateTask = async (req, res) => {
try {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(400).json({ message: "Task not update" });
  res.json(task);
} catch (error) {
  return  res.status(400).json({ message: "Task not update" });
}
};

export const deletetask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(400).json({ message: "Task not delete" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(400).json({ message: "Task not delete" });
  }
};
