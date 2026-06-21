<template>
  <div>
    <h3>Lista uczniów</h3>
    <div class="cards">
      <StudentCardZ8
        v-for="student in students"
        :key="student.id"
        :student="student"
        :selected="selectedStudent && selectedStudent.id === student.id"
        @select="$emit('select-student', student)"
      />
    </div>
  </div>
</template>

<script>
import StudentCardZ8 from './StudentCardZ8.vue';

export default {
  name: 'StudentListZ8',
  components: { StudentCardZ8 },
  props: {
    students: Array,
    selectedStudent: Object
  },
  emits: ['select-student']
};
</script>
