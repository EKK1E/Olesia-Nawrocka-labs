<template>
  <section class="task">
    <h2>Lista produktów z komponentem dziecka</h2>
    <div class="cards">
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :nazwa="product.nazwa"
        :cena="product.cena"
        :dostepnosc="product.dostepnosc"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ProductItem from './ProductItem.vue';

const products = ref([
  { id: 1, nazwa: 'Laptop', cena: 3500, dostepnosc: true },
  { id: 2, nazwa: 'Mysz', cena: 80, dostepnosc: true },
  { id: 3, nazwa: 'Słuchawki', cena: 199, dostepnosc: false }
]);
</script>
