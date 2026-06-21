<template>
  <div class="card">
    <strong>{{ nazwa }}</strong>
    <p>Cena: {{ cena }} zł</p>
    <p>Dostępność: {{ dostepnosc ? 'Tak' : 'Nie' }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    nazwa: String,
    cena: Number,
    dostepnosc: Boolean
  }
};
</script>
