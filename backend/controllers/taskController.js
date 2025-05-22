const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const newTask = new Task({ title: req.body.title, done: false });
    const saved = await newTask.save();
    res.status(201).json(saved);
  } catch (e) {
    res.status(500).json({ message: 'Error al crear tarea', error: e.message });
  }
};

exports.getTasks = async (_, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (e) {
    res.status(500).json({ message: 'Error al obtener tareas', error: e.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      { done: req.body.done },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json(updated);
  } catch (e) {
    res.status(500).json({ message: 'Error al actualizar tarea', error: e.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.json({ message: 'Tarea eliminada' });
  } catch (e) {
    res.status(500).json({ message: 'Error al eliminar tarea', error: e.message });
  }
};
