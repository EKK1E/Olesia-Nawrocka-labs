<template>
  <section class="task">
    <h2>Zadanie 5 — Komponent z nazwanymi slotami</h2>
    <ArticleCard>
      <template v-slot:header>
        <h3>Vue 3 — nowe możliwości</h3>
      </template>
      <template v-slot:content>
        <p>Vue 3 wprowadza nowe narzędzia do budowy interfejsów.</p>
      </template>
      <template v-slot:footer>
        <p>Autor: Anna Kowalska | Data: 2026-03-16</p>
      </template>
    </ArticleCard>
  </section>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue';
</script>
