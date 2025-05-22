// data/importData.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Task from '../models/Task.js';
import connectDB from '../config/db.js';

dotenv.config();

const importData = async () => {
  try {
    await connectDB();
    await Task.deleteMany();

    const tasks = [
      { title: 'Fer exercici', done: false },
      { title: 'Estudiar backend', done: true },
      { title: 'Enviar pràctica', done: false },
    ];

    await Task.insertMany(tasks);

    console.log('📥 Dades importades!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
