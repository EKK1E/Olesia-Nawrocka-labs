<template>
  <div class="card user-card">
    <h4>{{ imie }} {{ nazwisko }}</h4>
    <p>Email: {{ email }}</p>
    <p>Rola: {{ rola }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserCardItem',
  props: {
    imie: String,
    nazwisko: String,
    email: String,
    rola: String
  }
};
</script>
