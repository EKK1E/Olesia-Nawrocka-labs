<template>
  <section class="task">
    <h2>Lista uczniów</h2>
    <form class="form" @submit.prevent="addStudent">
      <input v-model="form.imie" placeholder="Imię" required />
      <input v-model="form.nazwisko" placeholder="Nazwisko" required />
      <input v-model="form.grupa" placeholder="Grupa" required />
      <button type="submit">Dodaj ucznia</button>
    </form>
    <div class="cards">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :imie="student.imie"
        :nazwisko="student.nazwisko"
        :grupa="student.grupa"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import StudentCard from './StudentCard.vue';

const students = ref([
  { id: 1, imie: 'Anna', nazwisko: 'Kowalska', grupa: 'A' }
]);

const form = ref({
  imie: '',
  nazwisko: '',
  grupa: ''
});

let nextId = 2;

function addStudent() {
  students.value.push({
    id: nextId++,
    imie: form.value.imie,
    nazwisko: form.value.nazwisko,
    grupa: form.value.grupa
  });
  form.value = { imie: '', nazwisko: '', grupa: '' };
}
</script>
