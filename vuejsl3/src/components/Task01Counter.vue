<template>
  <section class="task">
    <h2>Zadanie 1 — Porównanie Options API i Composition API</h2>
    <div class="compare-grid">
      <CounterOptions />
      <CounterComposition />
    </div>
  </section>
</template>

<script setup>
import CounterOptions from './CounterOptions.vue';
import CounterComposition from './CounterComposition.vue';
</script>
