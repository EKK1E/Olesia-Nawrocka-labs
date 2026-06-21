<template>
  <div>
    <h3>Lista uczniów</h3>
    <div class="cards">
      <StudentCardZ2
        v-for="student in students"
        :key="student.id"
        :student="student"
        :selected="selectedStudent && selectedStudent.id === student.id"
        @select="$emit('select-student', student)"
      />
    </div>
  </div>
</template>

<script setup>
import StudentCardZ2 from './StudentCardZ2.vue';

defineProps({
  students: Array,
  selectedStudent: Object
});

defineEmits(['select-student']);
</script>
