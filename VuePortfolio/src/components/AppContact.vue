<template>
  <div class="page">
    <section class="contact card">
      <h2>Kontakt</h2>
      <div class="contact-info">
        <p><strong>Imię i nazwisko:</strong> Kyrylo Voloshyn</p>
        <p><strong>E-mail:</strong> kyrylo.voloshyn@example.com</p>
        <p><strong>Kierunek:</strong> Informatyka</p>
      </div>
      <form class="contact-form" @submit.prevent="sendMessage">
        <input v-model="form.imie" placeholder="Imię" required />
        <input v-model="form.email" type="email" placeholder="E-mail" required />
        <textarea v-model="form.wiadomosc" placeholder="Wiadomość" required></textarea>
        <button type="submit" class="btn-primary">Wyślij</button>
      </form>
      <p v-if="message" class="success">{{ message }}</p>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  imie: '',
  email: '',
  wiadomosc: ''
});

const message = ref('');

function sendMessage() {
  message.value = 'Wiadomość została przygotowana i wysłana testowo.';
  form.imie = '';
  form.email = '';
  form.wiadomosc = '';
}
</script>

<style scoped>
.contact h2 {
  margin-top: 0;
  color: #1565c0;
}

.contact-info {
  margin-bottom: 20px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

input,
textarea {
  padding: 10px 12px;
  border: 1px solid #b0bec5;
  border-radius: 8px;
  font-family: inherit;
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.success {
  margin-top: 16px;
  color: #2e7d32;
  font-weight: bold;
}
</style>
