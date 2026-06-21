<template>
  <section class="task">
    <h2>Komponent karty użytkownika z props</h2>
    <UserCard
      :imie="user.imie"
      :nazwisko="user.nazwisko"
      :email="user.email"
      :rola="user.rola"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import UserCard from './UserCard.vue';

const user = ref({
  imie: 'Anna',
  nazwisko: 'Kowalska',
  email: 'anna@example.com',
  rola: 'Student'
});
</script>
