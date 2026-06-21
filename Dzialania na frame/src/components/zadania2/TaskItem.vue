<template>
  <div class="card class-row">
    <span>{{ title }}</span>
    <button @click="$emit('delete-task', id)">Usuń</button>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
  title: String
});

defineEmits(['delete-task']);
</script>
