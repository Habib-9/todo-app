const { reactive, toRefs } = Vue;

const useTaskViewModel = () => {
  const state = reactive({
    tasks: [],
    newTitle: ''
  });

  const loadTasks = () => {
    TaskModel.fetchAll().then(tasks => {
      state.tasks = tasks;
    });
  };

  const addTask = () => {
    if (!state.newTitle.trim()) return;
    TaskModel.create(state.newTitle.trim()).then(task => {
      state.tasks.push(task);
      state.newTitle = '';
    });
  };

  const toggleDone = (task) => {
    task.done = !task.done;
    TaskModel.update(task).catch(() => {
      task.done = !task.done; // revertir si error
    });
  };

  const removeTask = (task) => {
    TaskModel.delete(task).then(() => {
      state.tasks = state.tasks.filter(t => t._id !== task._id);
    });
  };

  return {
    ...toRefs(state),
    loadTasks,
    addTask,
    toggleDone,
    removeTask
  };
};
