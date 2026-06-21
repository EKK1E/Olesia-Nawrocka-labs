<template>
  <section class="task">
    <h2>Automatyczne wyszukiwanie z watch</h2>
    <input v-model="searchText" class="search-input" placeholder="Szukaj produktu..." />
    <p v-if="isSearching">Wyszukiwanie...</p>
    <ul class="search-list">
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} — {{ product.price }} zł
      </li>
    </ul>
    <p v-if="!filteredProducts.length && !isSearching">Brak wyników.</p>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';

const searchText = ref('');
const filteredProducts = ref([]);
const isSearching = ref(false);

const products = [
  { id: 1, name: 'Laptop', price: 3500 },
  { id: 2, name: 'Monitor', price: 900 },
  { id: 3, name: 'Klawiatura', price: 150 },
  { id: 4, name: 'Mysz', price: 80 }
];

let timer = null;

watch(searchText, (value) => {
  isSearching.value = true;
  clearTimeout(timer);
  timer = setTimeout(() => {
    const query = value.toLowerCase().trim();
    if (!query) {
      filteredProducts.value = [...products];
    } else {
      filteredProducts.value = products.filter((p) => p.name.toLowerCase().includes(query));
    }
    isSearching.value = false;
  }, 500);
});
</script>
