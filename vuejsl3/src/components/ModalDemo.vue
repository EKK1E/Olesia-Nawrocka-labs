<template>
  <section class="task">
    <h2>Zadanie 8 — Zaawansowany komponent modalny ze slotami</h2>
    <button @click="showModal = true">Otwórz modal</button>
    <Modal :show="showModal" @close="showModal = false">
      <template v-slot:title>
        Edycja danych
      </template>
      <template v-slot:body>
        <p>Tutaj możesz edytować dane użytkownika lub produktu.</p>
      </template>
      <template v-slot:actions>
        <button @click="showModal = false">Zamknij</button>
        <button @click="save">Zapisz</button>
      </template>
    </Modal>
    <p v-if="savedMessage" class="success">{{ savedMessage }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const showModal = ref(false);
const savedMessage = ref('');

function save() {
  savedMessage.value = 'Dane zostały zapisane!';
  showModal.value = false;
}
</script>

<style scoped>
.success {
  margin-top: 12px;
  color: #15803d;
}
</style>
