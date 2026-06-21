<template>
  <section class="task">
    <h2>Zadanie 4 — Komponent z podstawowym slotem</h2>
    <BaseCard>
      <h3>Witaj w Vue</h3>
      <p>To jest przykładowa treść przekazana przez zwykły slot.</p>
      <button>Kliknij mnie</button>
    </BaseCard>
  </section>
</template>

<script setup>
import BaseCard from './BaseCard.vue';
</script>
