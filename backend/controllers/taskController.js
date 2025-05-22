// backend/controllers/taskController.js
const Task = require('../models/Task');

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    return res.json(tasks);
  } catch (err) {
    console.error('Error in getTasks:', err);
    return next(err);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: 'El títol és obligatori' });
    }
    const newTask = new Task({ title: req.body.title, done: false });
    const saved = await newTask.save();
    return res.status(201).json(saved);
  } catch (err) {
    console.error('Error in createTask:', err);
    return next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      { done: req.body.done },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Tarea no encontrada' });
    return res.json(updated);
  } catch (err) {
    console.error('Error in updateTask:', err);
    return next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Tarea no encontrada' });
    return res.json({ message: 'Tarea eliminada' });
  } catch (err) {
    console.error('Error in deleteTask:', err);
    return next(err);
  }
};
