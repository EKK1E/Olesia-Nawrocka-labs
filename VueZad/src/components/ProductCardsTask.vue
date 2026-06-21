<template>
  <section class="task">
    <h2>5.2 Karty produktów z v-for</h2>
    <div class="form">
      <label>
        Kategoria:
        <select v-model="selectedCategory">
          <option value="">Wszystkie</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </label>
      <p>Liczba produktów: {{ productCount }}</p>
    </div>
    <div class="cards">
      <template v-if="filteredProducts.length">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :image="product.image"
          :name="product.name"
          :price="product.price"
          :description="product.description"
          :category="product.category"
          @remove="removeProduct(product.id)"
        />
      </template>
      <p v-else>Brak produktów w tej kategorii.</p>
    </div>
  </section>
</template>

<script>
import ProductCard from './shared/ProductCard.vue';

export default {
  name: 'ProductCardsTask',
  components: { ProductCard },
  data() {
    return {
      selectedCategory: '',
      products: [
        {
          id: 1,
          image: 'https://picsum.photos/seed/p1/200/150',
          name: 'Laptop',
          price: 3500,
          description: 'Szybki komputer',
          category: 'Elektronika'
        },
        {
          id: 2,
          image: 'https://picsum.photos/seed/p2/200/150',
          name: 'Książka',
          price: 45,
          description: 'Podręcznik Vue',
          category: 'Książki'
        },
        {
          id: 3,
          image: 'https://picsum.photos/seed/p3/200/150',
          name: 'Mysz',
          price: 89,
          description: 'Bezprzewodowa mysz',
          category: 'Elektronika'
        }
      ]
    };
  },
  computed: {
    categories() {
      const list = this.products.map((p) => p.category);
      return [...new Set(list)];
    },
    filteredProducts() {
      if (!this.selectedCategory) return this.products;
      return this.products.filter((p) => p.category === this.selectedCategory);
    },
    productCount() {
      return this.filteredProducts.length;
    }
  },
  methods: {
    removeProduct(id) {
      this.products = this.products.filter((p) => p.id !== id);
    }
  }
};
</script>
