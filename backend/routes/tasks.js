const express = require('express');
const router  = express.Router();
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// ¡Atención! No dejes espacios ni caracteres extraños en las comillas
router.post('/',    createTask);
router.get('/',     getTasks);
router.put('/:id',  updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
