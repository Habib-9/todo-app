// main.js

const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [],
      newTitle: '',
      loading: false,
      error: ''
    };
  },
  methods: {
    async loadTasks() {
      this.error = '';
      this.loading = true;
      try {
        this.tasks = await TaskModel.fetchAll();
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    async addTask() {
      const t = this.newTitle.trim();
      if (!t) return;
      this.error = '';
      this.loading = true;
      try {
        const task = await TaskModel.create(t);
        this.tasks.unshift(task);
        this.newTitle = '';
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = false;
      }
    },
    async toggleDone(task) {
      this.error = '';
      try {
        task.done = !task.done;
        await TaskModel.update(task);
      } catch (e) {
        this.error = e.message;
        task.done = !task.done;
      }
    },
    async removeTask(task) {
      this.error = '';
      try {
        await TaskModel.delete(task);
        this.tasks = this.tasks.filter(t => t._id !== task._id);
      } catch (e) {
        this.error = e.message;
      }
    }
  },
  mounted() {
    this.loadTasks();
  },
  template: `
    <div id="app">
      <h1>To-Do List</h1>
      <div v-if="error" class="error">{{ error }}</div>
      <div class="input-group">
        <input
          type="text"
          v-model="newTitle"
          @keyup.enter="addTask"
          :disabled="loading"
          placeholder="Nova tasca"
        />
        <button @click="addTask" :disabled="loading">
          {{ loading ? '...' : 'Afegir' }}
        </button>
      </div>
      <ul>
        <li v-for="task in tasks" :key="task._id" :class="{ done: task.done }">
          <label>
            <input type="checkbox" v-model="task.done" @change="toggleDone(task)" />
            {{ task.title }}
          </label>
          <button class="delete-btn" @click="removeTask(task)">Eliminar</button>
        </li>
      </ul>
    </div>
  `
}).mount('#app');
