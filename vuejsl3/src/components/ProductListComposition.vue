<template>
  <section class="task">
    <h2>ProductList — Composition API</h2>
    <div class="form">
      <input v-model="searchText" placeholder="Szukaj produktu..." />
      <button @click="resetSearch">Resetuj</button>
    </div>
    <ul class="list">
      <li v-for="product in filteredProducts" :key="product.id" class="card">
        {{ product.name }} — {{ product.price }} zł
      </li>
    </ul>
    <p v-if="!filteredProducts.length">Brak wyników.</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchText = ref('');

const products = ref([
  { id: 1, name: 'Laptop', price: 3500 },
  { id: 2, name: 'Monitor', price: 900 },
  { id: 3, name: 'Mysz', price: 80 },
  { id: 4, name: 'Klawiatura', price: 150 }
]);

const filteredProducts = computed(() => {
  const query = searchText.value.toLowerCase().trim();
  if (!query) return products.value;
  return products.value.filter((p) => p.name.toLowerCase().includes(query));
});

function resetSearch() {
  searchText.value = '';
}
</script>
