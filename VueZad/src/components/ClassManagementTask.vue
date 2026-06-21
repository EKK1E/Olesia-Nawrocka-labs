<template>
  <section class="task">
    <h2>5.10 System zarządzania klasą</h2>
    <form class="form" @submit.prevent="addStudent">
      <input v-model="form.imie" placeholder="Imię" required />
      <input v-model="form.nazwisko" placeholder="Nazwisko" required />
      <input v-model="form.grupa" placeholder="Grupa" required />
      <button type="submit">Dodaj ucznia</button>
    </form>
    <div class="form">
      <label>
        Filtruj grupę:
        <select v-model="groupFilter">
          <option value="">Wszystkie</option>
          <option v-for="grupa in groups" :key="grupa" :value="grupa">{{ grupa }}</option>
        </select>
      </label>
      <p>Liczba uczniów: {{ filteredStudents.length }}</p>
    </div>
    <ClassStudentRow
      v-for="student in filteredStudents"
      :key="student.id"
      :student="student"
      @toggle="toggleActive"
      @remove="removeStudent"
    />
    <p v-if="!filteredStudents.length">Brak uczniów.</p>
  </section>
</template>

<script>
const ClassStudentRow = {
  name: 'ClassStudentRow',
  props: { student: Object },
  emits: ['toggle', 'remove'],
  template: `
    <div class="class-row card">
      <div>
        <strong>{{ student.imie }} {{ student.nazwisko }}</strong>
        <p>Grupa: {{ student.grupa }}</p>
        <p>Status: {{ student.aktywny ? 'Aktywny' : 'Nieaktywny' }}</p>
      </div>
      <div class="class-actions">
        <button @click="$emit('toggle', student.id)">Zmień aktywność</button>
        <button @click="$emit('remove', student.id)">Usuń</button>
      </div>
    </div>
  `
};

export default {
  name: 'ClassManagementTask',
  components: { ClassStudentRow },
  data() {
    return {
      nextId: 3,
      groupFilter: '',
      form: { imie: '', nazwisko: '', grupa: '' },
      students: [
        { id: 1, imie: 'Anna', nazwisko: 'Kowal', grupa: 'A', aktywny: true },
        { id: 2, imie: 'Jan', nazwisko: 'Nowak', grupa: 'B', aktywny: false }
      ]
    };
  },
  computed: {
    groups() {
      return [...new Set(this.students.map((s) => s.grupa))];
    },
    filteredStudents() {
      if (!this.groupFilter) return this.students;
      return this.students.filter((s) => s.grupa === this.groupFilter);
    }
  },
  methods: {
    addStudent() {
      this.students.push({
        id: this.nextId++,
        imie: this.form.imie,
        nazwisko: this.form.nazwisko,
        grupa: this.form.grupa,
        aktywny: true
      });
      this.form = { imie: '', nazwisko: '', grupa: '' };
    },
    toggleActive(id) {
      const student = this.students.find((s) => s.id === id);
      if (student) student.aktywny = !student.aktywny;
    },
    removeStudent(id) {
      this.students = this.students.filter((s) => s.id !== id);
    }
  }
};
</script>
