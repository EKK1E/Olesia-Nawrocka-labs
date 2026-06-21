<template>
  <section class="task">
    <h2>5.9 Modal z formularzem</h2>
    <button @click="showModal = true">Dodaj</button>
    <Modal :show="showModal" @close="showModal = false">
      <template v-slot:title>Nowy element</template>
      <template v-slot:body>
        <form class="form modal-form" @submit.prevent="saveItem">
          <input v-model="form.nazwa" placeholder="Nazwa" required />
          <textarea v-model="form.opis" placeholder="Opis" required></textarea>
        </form>
      </template>
      <template v-slot:actions>
        <button @click="saveItem">Zapisz</button>
        <button @click="showModal = false">Anuluj</button>
      </template>
    </Modal>
    <ul class="search-list">
      <li v-for="item in items" :key="item.id">
        <strong>{{ item.nazwa }}</strong> — {{ item.opis }}
      </li>
    </ul>
  </section>
</template>

<script>
import Modal from './shared/Modal.vue';

export default {
  name: 'ModalFormTask',
  components: { Modal },
  data() {
    return {
      showModal: false,
      nextId: 1,
      form: { nazwa: '', opis: '' },
      items: []
    };
  },
  methods: {
    saveItem() {
      if (!this.form.nazwa.trim()) return;
      this.items.push({ id: this.nextId++, ...this.form });
      this.form = { nazwa: '', opis: '' };
      this.showModal = false;
    }
  }
};
</script>
