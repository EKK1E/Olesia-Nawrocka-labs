<template>
  <form class="form" @submit.prevent="submit">
    <input v-model="form.imie" placeholder="Imię" required />
    <input v-model="form.nazwisko" placeholder="Nazwisko" required />
    <input v-model="form.grupa" placeholder="Grupa" required />
    <button type="submit">Dodaj ucznia</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-student']);

const form = ref({
  imie: '',
  nazwisko: '',
  grupa: ''
});

function submit() {
  emit('add-student', { ...form.value });
  form.value = { imie: '', nazwisko: '', grupa: '' };
}
</script>
