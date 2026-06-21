<template>
  <div class="card product-card">
    <img :src="image" :alt="name" />
    <h4>{{ name }}</h4>
    <p class="price">{{ price }} zł</p>
    <p>{{ description }}</p>
    <p class="category">{{ category }}</p>
    <button @click="$emit('remove')">Usuń</button>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  name: String,
  price: Number,
  description: String,
  category: String
});

defineEmits(['remove']);
</script>
