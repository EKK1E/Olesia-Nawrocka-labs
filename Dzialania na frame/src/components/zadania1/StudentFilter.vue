<template>
  <section class="task">
    <h2>Filtrowanie listy studentów</h2>
    <div class="form">
      <input v-model="searchText" placeholder="Szukaj po imieniu" />
      <input v-model.number="minAverage" type="number" step="0.1" placeholder="Min. średnia" />
      <button @click="resetFilters">Resetuj filtry</button>
    </div>
    <ul class="search-list">
      <li v-for="student in filteredStudents" :key="student.imie" class="card">
        <strong>{{ student.imie }}</strong> — {{ student.kierunek }} — średnia: {{ student.srednia }}
      </li>
    </ul>
    <p v-if="!filteredStudents.length">Brak wyników.</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const students = ref([
  { imie: 'Anna', kierunek: 'Informatyka', srednia: 4.5 },
  { imie: 'Jan', kierunek: 'Ekonomia', srednia: 3.8 },
  { imie: 'Maria', kierunek: 'Informatyka', srednia: 4.9 },
  { imie: 'Tomek', kierunek: 'Prawo', srednia: 3.2 }
]);

const searchText = ref('');
const minAverage = ref(0);

const filteredStudents = computed(() => {
  return students.value.filter((student) => {
    const matchesName = student.imie.toLowerCase().includes(searchText.value.toLowerCase());
    const matchesAverage = student.srednia >= minAverage.value;
    return matchesName && matchesAverage;
  });
});

function resetFilters() {
  searchText.value = '';
  minAverage.value = 0;
}
</script>
