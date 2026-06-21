<template>
  <InfoCard>
    <template v-slot:header>Produkt</template>
    <template v-slot:body>
      <p><strong>{{ product.nazwa }}</strong></p>
      <p>Cena: {{ product.cena }} zł</p>
      <p>{{ product.opis }}</p>
      <p>Kategoria: {{ product.kategoria }}</p>
    </template>
    <template v-slot:footer>Szczegóły</template>
  </InfoCard>
</template>

<script setup>
import InfoCard from './InfoCard.vue';

defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>
