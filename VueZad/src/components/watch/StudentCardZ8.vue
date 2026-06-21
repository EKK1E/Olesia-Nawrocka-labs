<template>
  <div
    class="card student-select-card"
    :class="{ selected: selected }"
    @click="$emit('select', student)"
  >
    <strong>{{ student.imie }} {{ student.nazwisko }}</strong>
    <p>Grupa: {{ student.grupa }}</p>
  </div>
</template>

<script>
export default {
  name: 'StudentCardZ8',
  props: {
    student: Object,
    selected: Boolean
  },
  emits: ['select']
};
</script>
