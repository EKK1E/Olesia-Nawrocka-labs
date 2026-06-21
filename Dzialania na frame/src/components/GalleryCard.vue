<template>
  <div class="card gallery-card">
    <img :src="image" :alt="title" />
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
    <button @click="$emit('details')">Szczegóły</button>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String
});

defineEmits(['details']);
</script>
