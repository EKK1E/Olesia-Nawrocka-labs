<template>
  <section class="task">
    <h2>Walidacja formularza z watch</h2>
    <form class="form login-form" @submit.prevent>
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Hasło" />
      <input v-model="confirmPassword" type="password" placeholder="Potwierdź hasło" />
    </form>
    <ul class="messages">
      <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
    </ul>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const messages = ref([]);

function validate() {
  const list = [];

  if (email.value && !email.value.includes('@')) {
    list.push('Email musi zawierać znak @');
  }

  if (password.value && password.value.length < 6) {
    list.push('Hasło musi mieć minimum 6 znaków');
  }

  if (confirmPassword.value && confirmPassword.value !== password.value) {
    list.push('Hasła muszą być takie same');
  }

  messages.value = list;
}

watch(email, validate);
watch(password, validate);
watch(confirmPassword, validate);
</script>
