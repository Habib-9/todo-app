const app = Vue.createApp({
    setup() {
      const vm = useTaskViewModel();
      vm.loadTasks();
      return vm;
    }
  });
  
  app.mount('#app');
  