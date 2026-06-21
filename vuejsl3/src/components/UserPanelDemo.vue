<template>
  <section class="task">
    <h2>Zadanie 6 — Panel użytkownika ze slotami</h2>
    <UserPanel>
      <template v-slot:header>
        Profil użytkownika
      </template>
      <template v-slot:user-data>
        <p><strong>Jan Nowak</strong></p>
        <p>Email: jan@example.com</p>
        <p>Rola: Student</p>
      </template>
      <template v-slot:actions>
        <button>Edytuj</button>
        <button>Usuń</button>
      </template>
    </UserPanel>
  </section>
</template>

<script setup>
import UserPanel from './UserPanel.vue';
</script>
