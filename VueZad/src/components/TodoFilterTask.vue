<template>
  <section class="task">
    <h2>5.3 ToDo z filtrowaniem statusów</h2>
    <form class="form" @submit.prevent="addTask">
      <input v-model="newTask" placeholder="Nowe zadanie" required />
      <button type="submit">Dodaj</button>
    </form>
    <div class="filters">
      <button
        v-for="filter in filters"
        :key="filter.value"
        :class="{ active: currentFilter === filter.value }"
        @click="currentFilter = filter.value"
      >
        {{ filter.label }}
      </button>
    </div>
    <ul class="todo-list">
      <li v-for="task in filteredTasks" :key="task.id" v-show="true">
        <span :class="{ done: task.done }">{{ task.text }}</span>
        <button @click="toggleTask(task.id)">
          {{ task.done ? 'Aktywne' : 'Wykonane' }}
        </button>
      </li>
    </ul>
    <p v-if="!filteredTasks.length">Brak zadań.</p>
  </section>
</template>

<script>
export default {
  name: 'TodoFilterTask',
  data() {
    return {
      tasks: [
        { id: 1, text: 'Nauka Vue', done: false },
        { id: 2, text: 'Projekt na zajęcia', done: true }
      ],
      newTask: '',
      currentFilter: 'all',
      nextId: 3,
      filters: [
        { label: 'Wszystkie', value: 'all' },
        { label: 'Aktywne', value: 'active' },
        { label: 'Wykonane', value: 'done' }
      ]
    };
  },
  computed: {
    filteredTasks() {
      if (this.currentFilter === 'active') {
        return this.tasks.filter((t) => !t.done);
      }
      if (this.currentFilter === 'done') {
        return this.tasks.filter((t) => t.done);
      }
      return this.tasks;
    }
  },
  methods: {
    addTask() {
      this.tasks.push({ id: this.nextId++, text: this.newTask, done: false });
      this.newTask = '';
    },
    toggleTask(id) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) task.done = !task.done;
    }
  }
};
</script>
