const TaskModel = {
    fetchAll() {
      return fetch('/api/tasks').then(res => res.json());
    },
    create(title) {
      return fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, done: false })
      }).then(res => res.json());
    },
    update(task) {
      return fetch(`/api/tasks/${task._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ done: task.done })
      }).then(res => res.json());
    },
    delete(task) {
      return fetch(`/api/tasks/${task._id}`, {
        method: 'DELETE'
      }).then(res => res.json());
    }
  };
  