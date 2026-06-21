<template>
  <section class="task">
    <h2>System zarządzania klasą</h2>
    <form class="form" @submit.prevent="addStudent">
      <input v-model="form.imie" placeholder="Imię" required />
      <input v-model="form.nazwisko" placeholder="Nazwisko" required />
      <input v-model="form.grupa" placeholder="Grupa" required />
      <button type="submit">Dodaj ucznia</button>
    </form>
    <div class="form">
      <label>
        Filtruj grupę:
        <select v-model="groupFilter">
          <option value="">Wszystkie</option>
          <option v-for="grupa in groups" :key="grupa" :value="grupa">{{ grupa }}</option>
        </select>
      </label>
      <p>Liczba uczniów: {{ filteredStudents.length }}</p>
    </div>
    <ClassStudentRow
      v-for="student in filteredStudents"
      :key="student.id"
      :student="student"
      @toggle="toggleActive"
      @remove="removeStudent"
    />
    <p v-if="!filteredStudents.length">Brak uczniów.</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import ClassStudentRow from './ClassStudentRow.vue';

const students = ref([
  { id: 1, imie: 'Anna', nazwisko: 'Kowal', grupa: 'A', aktywny: true },
  { id: 2, imie: 'Jan', nazwisko: 'Nowak', grupa: 'B', aktywny: false }
]);

const form = ref({ imie: '', nazwisko: '', grupa: '' });
const groupFilter = ref('');
let nextId = 3;

const groups = computed(() => {
  return [...new Set(students.value.map((s) => s.grupa))];
});

const filteredStudents = computed(() => {
  if (!groupFilter.value) {
    return students.value;
  }
  return students.value.filter((s) => s.grupa === groupFilter.value);
});

function addStudent() {
  students.value.push({
    id: nextId++,
    imie: form.value.imie,
    nazwisko: form.value.nazwisko,
    grupa: form.value.grupa,
    aktywny: true
  });
  form.value = { imie: '', nazwisko: '', grupa: '' };
}

function toggleActive(id) {
  const student = students.value.find((s) => s.id === id);
  if (student) {
    student.aktywny = !student.aktywny;
  }
}

function removeStudent(id) {
  students.value = students.value.filter((s) => s.id !== id);
}
</script>
