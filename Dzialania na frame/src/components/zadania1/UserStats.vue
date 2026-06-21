<template>
  <section class="task">
    <h2>Panel statystyk użytkownika</h2>
    <ul class="search-list">
      <li v-for="task in tasks" :key="task.id" class="card class-row">
        <div>
          <strong>{{ task.nazwa }}</strong>
          <p>Status: {{ task.status }}</p>
          <p>Punkty: {{ task.punkty }}</p>
        </div>
        <button @click="toggleStatus(task.id)">Zmień status</button>
      </li>
    </ul>
    <div class="dashboard">
      <div class="stat card">
        <span>Wykonane</span>
        <strong>{{ doneCount }}</strong>
      </div>
      <div class="stat card">
        <span>Niewykonane</span>
        <strong>{{ pendingCount }}</strong>
      </div>
      <div class="stat card">
        <span>Suma punktów</span>
        <strong>{{ totalPoints }}</strong>
      </div>
      <div class="stat card">
        <span>Procent ukończenia</span>
        <strong>{{ completionPercent }}%</strong>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const tasks = ref([
  { id: 1, nazwa: 'Projekt Vue', status: 'done', punkty: 20 },
  { id: 2, nazwa: 'Test jednostkowy', status: 'pending', punkty: 10 },
  { id: 3, nazwa: 'Dokumentacja', status: 'done', punkty: 15 },
  { id: 4, nazwa: 'Prezentacja', status: 'pending', punkty: 25 }
]);

const doneCount = computed(() => tasks.value.filter((t) => t.status === 'done').length);
const pendingCount = computed(() => tasks.value.filter((t) => t.status === 'pending').length);
const totalPoints = computed(() => tasks.value.reduce((sum, t) => sum + t.punkty, 0));

const completionPercent = computed(() => {
  if (!tasks.value.length) return 0;
  return Math.round((doneCount.value / tasks.value.length) * 100);
});

function toggleStatus(id) {
  const task = tasks.value.find((t) => t.id === id);
  if (task) {
    task.status = task.status === 'done' ? 'pending' : 'done';
  }
}
</script>
