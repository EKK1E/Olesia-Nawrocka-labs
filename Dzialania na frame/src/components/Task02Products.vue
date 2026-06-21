<template>
  <section class="task">
    <h2>Karty produktów</h2>
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
        <Card
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

<script setup>
import { ref, computed } from 'vue';
import Card from './Card.vue';

const products = ref([
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
]);

const selectedCategory = ref('');

const categories = computed(() => {
  const list = products.value.map((p) => p.category);
  return [...new Set(list)];
});

const filteredProducts = computed(() => {
  if (!selectedCategory.value) {
    return products.value;
  }
  return products.value.filter((p) => p.category === selectedCategory.value);
});

const productCount = computed(() => filteredProducts.value.length);

function removeProduct(id) {
  products.value = products.value.filter((p) => p.id !== id);
}
</script>
