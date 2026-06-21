<template>
  <section class="task">
    <h2>Panel zarządzania klasą</h2>
    <div class="class-panel">
      <StudentList
        :students="students"
        :selected-student="selectedStudent"
        @select-student="selectStudent"
      />
      <StudentDetails :selected-student="selectedStudent" />
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import StudentList from './StudentList.vue';
import StudentDetails from './StudentDetails.vue';

const students = ref([
  { id: 1, imie: 'Anna', nazwisko: 'Kowal', grupa: 'A', aktywny: true, email: 'anna@test.com' },
  { id: 2, imie: 'Jan', nazwisko: 'Nowak', grupa: 'B', aktywny: false, email: 'jan@test.com' },
  { id: 3, imie: 'Ewa', nazwisko: 'Lis', grupa: 'A', aktywny: true, email: 'ewa@test.com' }
]);

const selectedStudent = ref(null);

onMounted(() => {
  const saved = localStorage.getItem('selectedStudent');
  if (saved) {
    const parsed = JSON.parse(saved);
    const found = students.value.find((s) => s.id === parsed.id);
    if (found) {
      selectedStudent.value = found;
    }
  }
});

watch(selectedStudent, (value) => {
  if (value) {
    localStorage.setItem('selectedStudent', JSON.stringify(value));
  }
});

function selectStudent(student) {
  selectedStudent.value = student;
}
</script>

<style scoped>
.class-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .class-panel {
    grid-template-columns: 1fr;
  }
}
</style>
