<template>
  <div class="card">
    <h3>Szczegóły ucznia</h3>
    <template v-if="selectedStudent">
      <p><strong>{{ selectedStudent.imie }} {{ selectedStudent.nazwisko }}</strong></p>
      <p>Grupa: {{ selectedStudent.grupa }}</p>
      <p>Email: {{ selectedStudent.email }}</p>
      <p>Aktywny: {{ selectedStudent.aktywny ? 'Tak' : 'Nie' }}</p>
    </template>
    <p v-else>Wybierz ucznia z listy.</p>
  </div>
</template>

<script>
export default {
  name: 'StudentDetailsZ8',
  props: {
    selectedStudent: Object
  }
};
</script>
