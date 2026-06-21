<template>
  <section class="task">
    <h2>Zadanie 3 — Formularz użytkownika (Composition API)</h2>
    <form class="form" @submit.prevent="addUser">
      <input v-model="form.imie" placeholder="Imię" required />
      <input v-model="form.nazwisko" placeholder="Nazwisko" required />
      <input v-model="form.email" placeholder="E-mail" required />
      <input v-model.number="form.wiek" type="number" placeholder="Wiek" required />
      <button type="submit">Dodaj</button>
    </form>
    <ul class="list">
      <li v-for="user in users" :key="user.email" class="card">
        {{ user.imie }} {{ user.nazwisko }} — {{ user.email }} — {{ user.wiek }} lat
      </li>
    </ul>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  imie: '',
  nazwisko: '',
  email: '',
  wiek: ''
});

const users = ref([]);

function clearForm() {
  form.imie = '';
  form.nazwisko = '';
  form.email = '';
  form.wiek = '';
}

function addUser() {
  users.value.push({ ...form });
  clearForm();
}
</script>
