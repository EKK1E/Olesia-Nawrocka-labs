<template>
  <section class="task">
    <h2>Watch i watchEffect</h2>
    <div class="form">
      <input v-model="imie" placeholder="Imię" />
      <input v-model="grupa" placeholder="Grupa" />
    </div>
    <p>Imię (watch): {{ imieMessage }}</p>
    <p>Informacje (watchEffect): {{ userInfo }}</p>
    <p>Aktualne imię: {{ imie }}</p>
    <p>Aktualna grupa: {{ grupa }}</p>
  </section>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';

const imie = ref('');
const grupa = ref('');
const imieMessage = ref('');
const userInfo = ref('');

watch(imie, (value) => {
  imieMessage.value = value ? `Zmieniono imię na: ${value}` : 'Brak imienia';
});

watchEffect(() => {
  userInfo.value = `Użytkownik: ${imie.value || '—'}, grupa: ${grupa.value || '—'}`;
});
</script>
