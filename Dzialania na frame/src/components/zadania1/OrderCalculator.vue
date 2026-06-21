<template>
  <section class="task">
    <h2>Kalkulator zamówienia</h2>
    <div v-for="product in products" :key="product.id" class="card order-row">
      <div>
        <strong>{{ product.nazwa }}</strong>
        <p>Cena: {{ product.cena }} zł</p>
        <p>Ilość: {{ product.ilosc }}</p>
        <p>Wartość: {{ product.cena * product.ilosc }} zł</p>
      </div>
      <div class="class-actions">
        <button @click="increase(product.id)">+</button>
        <button @click="decrease(product.id)">-</button>
      </div>
    </div>
    <div class="summary">
      <p>Suma zamówienia: {{ orderSum }} zł</p>
      <p v-if="discount > 0">Rabat 10%: -{{ discount }} zł</p>
      <p><strong>Do zapłaty: {{ finalPrice }} zł</strong></p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const products = ref([
  { id: 1, nazwa: 'Laptop', cena: 300, ilosc: 1 },
  { id: 2, nazwa: 'Mysz', cena: 80, ilosc: 2 },
  { id: 3, nazwa: 'Monitor', cena: 200, ilosc: 1 }
]);

const orderSum = computed(() => {
  return products.value.reduce((sum, p) => sum + p.cena * p.ilosc, 0);
});

const discount = computed(() => {
  return orderSum.value > 500 ? Math.round(orderSum.value * 0.1) : 0;
});

const finalPrice = computed(() => {
  return orderSum.value - discount.value;
});

function increase(id) {
  const product = products.value.find((p) => p.id === id);
  if (product) product.ilosc++;
}

function decrease(id) {
  const product = products.value.find((p) => p.id === id);
  if (product && product.ilosc > 1) product.ilosc--;
}
</script>
