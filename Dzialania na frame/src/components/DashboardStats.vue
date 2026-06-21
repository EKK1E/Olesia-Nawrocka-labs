<template>
  <div class="dashboard card">
    <div class="stat">
      <span>Liczba uczniów</span>
      <strong>{{ totalStudents }}</strong>
    </div>
    <div class="stat">
      <span>Liczba aktywnych uczniów</span>
      <strong>{{ activeStudents }}</strong>
    </div>
    <div class="stat">
      <span>Liczba grup</span>
      <strong>{{ groupCount }}</strong>
    </div>
    <div class="stat">
      <span>Procent aktywności</span>
      <strong>{{ activityPercent }}%</strong>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  students: {
    type: Array,
    required: true
  }
});

const totalStudents = computed(() => props.students.length);

const activeStudents = computed(() => {
  return props.students.filter((s) => s.aktywny).length;
});

const groupCount = computed(() => {
  const groups = props.students.map((s) => s.grupa);
  return [...new Set(groups)].length;
});

const activityPercent = computed(() => {
  if (!totalStudents.value) {
    return 0;
  }
  return Math.round((activeStudents.value / totalStudents.value) * 100);
});
</script>
