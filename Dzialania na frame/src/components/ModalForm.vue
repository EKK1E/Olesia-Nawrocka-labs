<template>
  <form class="form modal-form" @submit.prevent="save">
    <input v-model="form.nazwa" placeholder="Nazwa" required />
    <textarea v-model="form.opis" placeholder="Opis" required></textarea>
    <div class="modal-actions">
      <button type="submit">Zapisz</button>
      <button type="button" @click="$emit('close')">Anuluj</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['save', 'close']);

const form = ref({
  nazwa: '',
  opis: ''
});

function save() {
  emit('save', { ...form.value });
  form.value = { nazwa: '', opis: '' };
}
</script>
