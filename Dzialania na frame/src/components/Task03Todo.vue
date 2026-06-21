<template>
  <section class="task">
    <h2>ToDo</h2>
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

<script setup>
import { ref, computed } from 'vue';

const tasks = ref([
  { id: 1, text: 'Nauka Vue', done: false },
  { id: 2, text: 'Projekt na zajęcia', done: true }
]);

const newTask = ref('');
const currentFilter = ref('all');
let nextId = 3;

const filters = [
  { label: 'Wszystkie', value: 'all' },
  { label: 'Aktywne', value: 'active' },
  { label: 'Wykonane', value: 'done' }
];

const filteredTasks = computed(() => {
  if (currentFilter.value === 'active') {
    return tasks.value.filter((t) => !t.done);
  }
  if (currentFilter.value === 'done') {
    return tasks.value.filter((t) => t.done);
  }
  return tasks.value;
});

function addTask() {
  tasks.value.push({ id: nextId++, text: newTask.value, done: false });
  newTask.value = '';
}

function toggleTask(id) {
  const task = tasks.value.find((t) => t.id === id);
  if (task) {
    task.done = !task.done;
  }
}
</script>
