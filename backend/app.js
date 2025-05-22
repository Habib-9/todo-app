// backend/app.js
require('dotenv').config();
const express   = require('express');
const cors      = require('cors');
const path      = require('path');
const connectDB = require('./config/db');
const tasksRoutes = require('./routes/tasks');

const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas API
app.use('/api/tasks', tasksRoutes);

// Serve frontend
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

// Catch-all serve index.html
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ message: 'API route not found' });
  }
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// **Error handler** (debe ir al final)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});

// Arrancar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('✔️ Server running at http://localhost:' + PORT);
});


function renderTask(task) {
  const li = document.createElement('li');
  if (task.done) li.classList.add('done');

  li.innerHTML = `
    <label>
      <input type="checkbox" ${task.done ? 'checked' : ''}>
      <span>${task.text}</span>
    </label>
    <button class="delete">Eliminar</button>
  `;

  document.getElementById('task-list').appendChild(li);
}
