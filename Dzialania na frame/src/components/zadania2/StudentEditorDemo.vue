<template>
  <section class="task">
    <h2>Edycja danych z props i emit</h2>
    <p>Aktualny student: {{ student.imie }} {{ student.nazwisko }} ({{ student.grupa }})</p>
    <StudentEditor :student="student" @save-student="updateStudent" />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import StudentEditor from './StudentEditor.vue';

const student = ref({
  imie: 'Jan',
  nazwisko: 'Nowak',
  grupa: 'A'
});

function updateStudent(data) {
  student.value = { ...data };
}
</script>
