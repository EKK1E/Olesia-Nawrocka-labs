<template>
  <section class="card">
    <h2>Aplikacja ToDo</h2>
    <div class="form">
      <input v-model="newTask" placeholder="Nowe zadanie" />
      <button @click="addTask">Dodaj</button>
    </div>
    <p>Aktualna zawartość input: <strong>{{ newTask }}</strong></p>
    <ul class="todo-list">
      <TODOElement
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @remove="removeTask"
        @toggle="toggleTask"
      />
    </ul>
    <p v-if="!tasks.length">Brak zadań.</p>
  </section>
</template>

<script>
import TODOElement from './TODOElement.vue';

export default {
  name: 'TODOComponent',
  components: { TODOElement },
  data() {
    return {
      newTask: '',
      tasks: [
        { id: 1, text: 'Nauka Vue', done: false },
        { id: 2, text: 'Projekt ToDo', done: true }
      ],
      nextId: 3
    };
  },
  methods: {
    addTask() {
      if (!this.newTask.trim()) return;
      this.tasks.push({
        id: this.nextId++,
        text: this.newTask,
        done: false
      });
      this.newTask = '';
    },
    removeTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleTask(id) {
      const task = this.tasks.find((item) => item.id === id);
      if (task) task.done = !task.done;
    }
  }
};
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
}
</style>
