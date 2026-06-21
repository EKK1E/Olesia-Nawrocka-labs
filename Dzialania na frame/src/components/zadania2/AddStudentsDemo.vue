<template>
  <section class="task">
    <h2>Dodawanie uczniów przez komponent rodzic-dziecko</h2>
    <AddStudentForm @add-student="addStudent" />
    <div class="cards">
      <div v-for="student in students" :key="student.id" class="card">
        <strong>{{ student.imie }} {{ student.nazwisko }}</strong>
        <p>Grupa: {{ student.grupa }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import AddStudentForm from './AddStudentForm.vue';

const students = ref([
  { id: 1, imie: 'Anna', nazwisko: 'Kowal', grupa: 'A' }
]);

let nextId = 2;

function addStudent(data) {
  students.value.push({
    id: nextId++,
    ...data
  });
}
</script>
