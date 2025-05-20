require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Endpoint de prueba
app.get('/api/ping', (req, res) => {
  res.send('pong');
});

// Rutas de tareas
app.use('/api/tasks', require('./routes/tasks'));

// Puerto desde .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
