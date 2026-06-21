<template>
  <section class="task">
    <h2>Zadanie 9 — System kart informacyjnych</h2>
    <div class="compare-grid">
      <UserCard :user="user" />
      <ProductCard :product="product" />
    </div>
  </section>
</template>

<script setup>
import UserCard from './UserCard.vue';
import ProductCard from './ProductCard.vue';

const user = {
  imie: 'Anna',
  nazwisko: 'Kowalska',
  email: 'anna@example.com',
  rola: 'Student'
};

const product = {
  nazwa: 'Laptop',
  cena: 3500,
  opis: 'Szybki komputer do nauki',
  kategoria: 'Elektronika'
};
</script>
