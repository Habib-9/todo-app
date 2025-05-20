// frontend/js/model.js
const API_BASE = 'http://localhost:5000/api/tasks';

const TaskModel = {
  fetchAll() {
    return fetch(API_BASE).then(res => res.json());
  },
  create(title) {
    return fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    }).then(res => res.json());
  },
  update(task) {
    return fetch(`${API_BASE}/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: task.done })
    }).then(res => res.json());
  },
  delete(task) {
    return fetch(`${API_BASE}/${task._id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }
};
