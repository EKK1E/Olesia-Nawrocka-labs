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

<script setup>
defineProps({
  student: Object,
  selected: Boolean
});

defineEmits(['select']);
</script>
