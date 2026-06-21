<template>
  <form class="form" @submit.prevent="submit">
    <input v-model="form.imie" placeholder="Imię" required />
    <input v-model="form.nazwisko" placeholder="Nazwisko" required />
    <input v-model="form.grupa" placeholder="Grupa" required />
    <button type="submit">Dodaj ucznia</button>
  </form>
</template>

<script>
export default {
  name: 'AddStudentForm',
  emits: ['add-student'],
  data() {
    return {
      form: { imie: '', nazwisko: '', grupa: '' }
    };
  },
  methods: {
    submit() {
      this.$emit('add-student', { ...this.form });
      this.form = { imie: '', nazwisko: '', grupa: '' };
    }
  }
};
</script>
