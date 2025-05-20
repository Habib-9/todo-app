const Task = require('../models/Task');

// Obtener todas las tareas
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva tarea
const createTask = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "El título es obligatorio" });

  try {
    const newTask = new Task({ title });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una tarea (título o done)
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, done } = req.body;

  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    if (title !== undefined) task.title = title;
    if (done !== undefined) task.done = done;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una tarea
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Tarea no encontrada" });

    await task.remove();
    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
