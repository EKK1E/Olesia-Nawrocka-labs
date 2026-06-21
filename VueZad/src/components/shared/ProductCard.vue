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

<script>
export default {
  name: 'ProductCard',
  props: {
    image: String,
    name: String,
    price: Number,
    description: String,
    category: String
  },
  emits: ['remove']
};
</script>
