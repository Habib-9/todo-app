// model.js

window.TaskModel = {
  API_BASE: '/api/tasks',

  fetchAll() {
    return fetch(this.API_BASE)
      .then(res => {
        if (!res.ok) throw new Error('Error al carregar tasques');
        return res.json();
      });
  },

  create(title) {
    return fetch(this.API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    })
    .then(res => {
      if (!res.ok) throw new Error('Error al crear tasca');
      return res.json();
    });
  },

  update(task) {
    return fetch(`${this.API_BASE}/${task._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: task.done })
    })
    .then(res => {
      if (!res.ok) throw new Error('Error al actualitzar tasca');
      return res.json();
    });
  },

  delete(task) {
    return fetch(`${this.API_BASE}/${task._id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) throw new Error('Error al eliminar tasca');
      return res.json();
    });
  }
};
