<template>
  <section class="task">
    <h2>Panel logowania</h2>
    <div v-if="!isLoggedIn" class="form login-form">
      <input v-model="login" placeholder="Login" />
      <input v-model="password" type="password" placeholder="Hasło" />
      <button @click="logIn">Zaloguj</button>
    </div>
    <div v-else class="profile card">
      <h3>{{ userName }}</h3>
      <p>Miło Cię widzieć w aplikacji Vue.</p>
      <button @click="logOut">Wyloguj</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false);
const login = ref('');
const password = ref('');
const userName = ref('');

function logIn() {
  if (login.value.trim()) {
    userName.value = login.value;
    isLoggedIn.value = true;
  }
}

function logOut() {
  isLoggedIn.value = false;
  login.value = '';
  password.value = '';
  userName.value = '';
}
</script>
