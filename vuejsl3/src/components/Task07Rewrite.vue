<template>
  <section class="task-wide">
    <h2>Zadanie 7 — Przepisanie komponentu z Options API na Composition API</h2>
    <div class="compare-grid">
      <ProductListOptions />
      <ProductListComposition />
    </div>
  </section>
</template>

<script setup>
import ProductListOptions from './ProductListOptions.vue';
import ProductListComposition from './ProductListComposition.vue';
</script>
