<template>
  <section class="task">
    <h2>ProductList — Options API</h2>
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

<script>
export default {
  name: 'ProductListOptions',
  data() {
    return {
      searchText: '',
      products: [
        { id: 1, name: 'Laptop', price: 3500 },
        { id: 2, name: 'Monitor', price: 900 },
        { id: 3, name: 'Mysz', price: 80 },
        { id: 4, name: 'Klawiatura', price: 150 }
      ]
    };
  },
  computed: {
    filteredProducts() {
      const query = this.searchText.toLowerCase().trim();
      if (!query) return this.products;
      return this.products.filter((p) => p.name.toLowerCase().includes(query));
    }
  },
  methods: {
    resetSearch() {
      this.searchText = '';
    }
  }
};
</script>
