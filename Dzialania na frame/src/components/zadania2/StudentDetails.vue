<template>
  <div class="card">
    <h3>Szczegóły ucznia</h3>
    <p v-if="selectedStudent">
      <strong>{{ selectedStudent.imie }} {{ selectedStudent.nazwisko }}</strong>
    </p>
    <p v-if="selectedStudent">Grupa: {{ selectedStudent.grupa }}</p>
    <p v-if="selectedStudent">Email: {{ selectedStudent.email }}</p>
    <p v-if="selectedStudent">Aktywny: {{ selectedStudent.aktywny ? 'Tak' : 'Nie' }}</p>
    <p v-else>Wybierz ucznia z listy.</p>
  </div>
</template>

<script setup>
defineProps({
  selectedStudent: Object
});
</script>
