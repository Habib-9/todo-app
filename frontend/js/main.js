const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [],
      newTitle: ''
    };
  },
  methods: {
    loadTasks() {
      TaskModel.fetchAll()
        .then(list => this.tasks = list)
        .catch(err => console.error(err));
    },
    addTask() {
      const t = this.newTitle.trim();
      if (!t) return;
      TaskModel.create(t)
        .then(task => {
          this.tasks.unshift(task);
          this.newTitle = '';
        })
        .catch(err => alert(err.message));
    },
    toggleDone(task) {
      TaskModel.update(task)
        .catch(err => {
          alert(err.message);
          task.done = !task.done;
        });
    },
    removeTask(task) {
      TaskModel.delete(task)
        .then(() => {
          this.tasks = this.tasks.filter(t => t._id !== task._id);
        })
        .catch(err => alert(err.message));
    }
  },
  mounted() {
    this.loadTasks();
  }
}).mount('#app');
