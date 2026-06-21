<template>
  <section class="task">
    <h2>Usuwanie elementu przez emit</h2>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :id="task.id"
      :title="task.title"
      @delete-task="deleteTask"
    />
    <p v-if="!tasks.length">Brak zadań.</p>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import TaskItem from './TaskItem.vue';

const tasks = ref([
  { id: 1, title: 'Nauka Vue' },
  { id: 2, title: 'Projekt na zajęcia' },
  { id: 3, title: 'Test aplikacji' }
]);

function deleteTask(id) {
  tasks.value = tasks.value.filter((task) => task.id !== id);
}
</script>
