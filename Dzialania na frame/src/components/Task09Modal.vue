<template>
  <section class="task">
    <h2>Modal z formularzem</h2>
    <button @click="showModal = true">Dodaj</button>
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal card">
        <h3>Nowy element</h3>
        <ModalForm @save="addItem" @close="showModal = false" />
      </div>
    </div>
    <ul class="search-list">
      <li v-for="item in items" :key="item.id">
        <strong>{{ item.nazwa }}</strong> — {{ item.opis }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import ModalForm from './ModalForm.vue';

const showModal = ref(false);
const items = ref([]);
let nextId = 1;

function addItem(data) {
  items.value.push({ id: nextId++, ...data });
  showModal.value = false;
}
</script>
