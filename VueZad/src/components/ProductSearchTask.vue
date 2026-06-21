<template>
  <section class="task">
    <h2>5.8 Lista produktów z wyszukiwarką</h2>
    <input v-model="searchText" placeholder="Szukaj produktu..." class="search-input" />
    <ul v-if="filteredProducts.length" class="search-list">
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} — {{ product.price }} zł
      </li>
    </ul>
    <p v-else>Nic nie znaleziono.</p>
  </section>
</template>

<script>
export default {
  name: 'ProductSearchTask',
  data() {
    return {
      searchText: '',
      products: [
        { id: 1, name: 'Laptop', price: 3500 },
        { id: 2, name: 'Monitor', price: 900 },
        { id: 3, name: 'Klawiatura', price: 150 },
        { id: 4, name: 'Mysz', price: 80 }
      ]
    };
  },
  computed: {
    filteredProducts() {
      const query = this.searchText.toLowerCase().trim();
      if (!query) return this.products;
      return this.products.filter((p) => p.name.toLowerCase().includes(query));
    }
  }
};
</script>
