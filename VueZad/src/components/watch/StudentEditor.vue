<template>
  <form class="form" @submit.prevent="save">
    <input v-model="localStudent.imie" placeholder="Imię" />
    <input v-model="localStudent.nazwisko" placeholder="Nazwisko" />
    <input v-model="localStudent.grupa" placeholder="Grupa" />
    <button type="submit">Zapisz</button>
  </form>
</template>

<script>
export default {
  name: 'StudentEditor',
  props: {
    student: Object
  },
  emits: ['save-student'],
  data() {
    return {
      localStudent: { ...this.student }
    };
  },
  watch: {
    student: {
      handler(value) {
        this.localStudent = { ...value };
      },
      deep: true
    }
  },
  methods: {
    save() {
      this.$emit('save-student', { ...this.localStudent });
    }
  }
};
</script>
