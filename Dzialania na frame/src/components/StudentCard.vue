<template>
  <div class="card">
    <h4>{{ imie }} {{ nazwisko }}</h4>
    <p>Grupa: {{ grupa }}</p>
  </div>
</template>

<script setup>
defineProps({
  imie: String,
  nazwisko: String,
  grupa: String
});
</script>
