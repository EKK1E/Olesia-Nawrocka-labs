<template>
  <section class="task">
    <h2>5.1 Lista uczniów z komponentem podrzędnym</h2>
    <form class="form" @submit.prevent="addStudent">
      <input v-model="form.imie" placeholder="Imię" required />
      <input v-model="form.nazwisko" placeholder="Nazwisko" required />
      <input v-model="form.grupa" placeholder="Grupa" required />
      <button type="submit">Dodaj ucznia</button>
    </form>
    <div class="cards">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :imie="student.imie"
        :nazwisko="student.nazwisko"
        :grupa="student.grupa"
        @remove="removeStudent(student.id)"
      />
    </div>
  </section>
</template>

<script>
const StudentCard = {
  name: 'StudentCard',
  props: ['imie', 'nazwisko', 'grupa'],
  emits: ['remove'],
  template: `
    <div class="card">
      <h4>{{ imie }} {{ nazwisko }}</h4>
      <p>Grupa: {{ grupa }}</p>
      <button @click="$emit('remove')">Usuń</button>
    </div>
  `
};

export default {
  name: 'StudentListTask',
  components: { StudentCard },
  data() {
    return {
      nextId: 2,
      form: { imie: '', nazwisko: '', grupa: '' },
      students: [
        { id: 1, imie: 'Anna', nazwisko: 'Kowalska', grupa: 'A' }
      ]
    };
  },
  methods: {
    addStudent() {
      this.students.push({
        id: this.nextId++,
        imie: this.form.imie,
        nazwisko: this.form.nazwisko,
        grupa: this.form.grupa
      });
      this.form = { imie: '', nazwisko: '', grupa: '' };
    },
    removeStudent(id) {
      this.students = this.students.filter((s) => s.id !== id);
    }
  }
};
</script>
