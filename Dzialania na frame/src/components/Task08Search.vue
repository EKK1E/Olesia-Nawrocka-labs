<template>
  <section class="task">
    <h2>Wyszukiwarka produktów</h2>
    <input v-model="searchText" placeholder="Szukaj produktu..." class="search-input" />
    <ul v-if="filteredProducts.length" class="search-list">
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} — {{ product.price }} zł
      </li>
    </ul>
    <p v-else>Nic nie znaleziono.</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchText = ref('');

const products = ref([
  { id: 1, name: 'Laptop', price: 3500 },
  { id: 2, name: 'Monitor', price: 900 },
  { id: 3, name: 'Klawiatura', price: 150 },
  { id: 4, name: 'Mysz', price: 80 }
]);

const filteredProducts = computed(() => {
  const query = searchText.value.toLowerCase().trim();
  if (!query) {
    return products.value;
  }
  return products.value.filter((p) => p.name.toLowerCase().includes(query));
});
</script>
