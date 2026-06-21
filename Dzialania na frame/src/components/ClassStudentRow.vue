<template>
  <div class="class-row card">
    <div>
      <strong>{{ student.imie }} {{ student.nazwisko }}</strong>
      <p>Grupa: {{ student.grupa }}</p>
      <p>Status: {{ student.aktywny ? 'Aktywny' : 'Nieaktywny' }}</p>
    </div>
    <div class="class-actions">
      <button @click="$emit('toggle', student.id)">Zmień aktywność</button>
      <button @click="$emit('remove', student.id)">Usuń</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  student: Object
});

defineEmits(['toggle', 'remove']);
</script>
