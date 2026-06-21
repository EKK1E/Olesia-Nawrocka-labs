<template>
  <div>
    <nav class="sub-nav">
      <button
        v-for="section in sections"
        :key="section.id"
        :class="{ active: subActive === section.id }"
        @click="subActive = section.id"
      >
        8.{{ section.id }} {{ section.label }}
      </button>
    </nav>
    <section v-if="subActive === 1" class="task">
      <h2>8.1 Walidacja formularza z watch</h2>
      <form class="form login-form" @submit.prevent>
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Hasło" />
        <input v-model="confirmPassword" type="password" placeholder="Potwierdź hasło" />
      </form>
      <ul class="messages">
        <li v-for="(msg, index) in messages" :key="index">{{ msg }}</li>
      </ul>
    </section>
    <section v-if="subActive === 2" class="task">
      <h2>8.2 Automatyczne wyszukiwanie z watch</h2>
      <input v-model="searchText" class="search-input" placeholder="Szukaj produktu..." />
      <p v-if="isSearching">Wyszukiwanie...</p>
      <ul class="search-list">
        <li v-for="product in filteredProducts" :key="product.id">
          {{ product.name }} — {{ product.price }} zł
        </li>
      </ul>
      <p v-if="!filteredProducts.length && !isSearching">Brak wyników.</p>
    </section>
    <section v-if="subActive === 3" class="task">
      <h2>8.3 Komponent karty użytkownika z props</h2>
      <UserCardItem
        :imie="user.imie"
        :nazwisko="user.nazwisko"
        :email="user.email"
        :rola="user.rola"
      />
    </section>
    <section v-if="subActive === 4" class="task">
      <h2>8.4 Lista produktów z komponentem dziecka</h2>
      <div class="cards">
        <ProductItem
          v-for="product in products"
          :key="product.id"
          :nazwa="product.nazwa"
          :cena="product.cena"
          :dostepnosc="product.dostepnosc"
        />
      </div>
    </section>
    <section v-if="subActive === 5" class="task">
      <h2>8.5 Usuwanie elementu przez emit</h2>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        @delete-task="deleteTask"
      />
      <p v-if="!tasks.length">Brak zadań.</p>
    </section>
    <section v-if="subActive === 6" class="task">
      <h2>8.6 Edycja danych z props i emit</h2>
      <p>Aktualny student: {{ student.imie }} {{ student.nazwisko }} ({{ student.grupa }})</p>
      <StudentEditor :student="student" @save-student="updateStudent" />
    </section>
    <section v-if="subActive === 7" class="task">
      <h2>8.7 Dodawanie uczniów przez props &amp; emit</h2>
      <AddStudentForm @add-student="addStudent" />
      <div class="cards">
        <div v-for="s in students" :key="s.id" class="card">
          <strong>{{ s.imie }} {{ s.nazwisko }}</strong>
          <p>Grupa: {{ s.grupa }}</p>
        </div>
      </div>
    </section>
    <section v-if="subActive === 8" class="task">
      <h2>8.8 Watch i watchEffect</h2>
      <div class="form">
        <input v-model="imie" placeholder="Imię" />
        <input v-model="grupa" placeholder="Grupa" />
      </div>
      <p>Imię (watch): {{ imieMessage }}</p>
      <p>Informacje (watchEffect): {{ userInfo }}</p>
      <p>Aktualne imię: {{ imie }}</p>
      <p>Aktualna grupa: {{ grupa }}</p>
    </section>
    <section v-if="subActive === 9" class="task">
      <h2>8.9 Miniaplikacja panel zarządzania klasą</h2>
      <div class="class-panel">
        <StudentListZ8
          :students="classStudents"
          :selected-student="selectedStudent"
          @select-student="selectStudent"
        />
        <StudentDetailsZ8 :selected-student="selectedStudent" />
      </div>
    </section>
  </div>
</template>

<script>
import { watchEffect } from 'vue';
import UserCardItem from './watch/UserCardItem.vue';
import ProductItem from './watch/ProductItem.vue';
import TaskItem from './watch/TaskItem.vue';
import StudentEditor from './watch/StudentEditor.vue';
import AddStudentForm from './watch/AddStudentForm.vue';
import StudentListZ8 from './watch/StudentListZ8.vue';
import StudentDetailsZ8 from './watch/StudentDetailsZ8.vue';

export default {
  name: 'WatchPropsEmitTasks',
  components: {
    UserCardItem,
    ProductItem,
    TaskItem,
    StudentEditor,
    AddStudentForm,
    StudentListZ8,
    StudentDetailsZ8
  },
  data() {
    return {
      subActive: 1,
      sections: [
        { id: 1, label: 'Walidacja' },
        { id: 2, label: 'Wyszukiwanie' },
        { id: 3, label: 'UserCard' },
        { id: 4, label: 'ProductItem' },
        { id: 5, label: 'Emit delete' },
        { id: 6, label: 'StudentEditor' },
        { id: 7, label: 'Add student' },
        { id: 8, label: 'watchEffect' },
        { id: 9, label: 'Class panel' }
      ],
      email: '',
      password: '',
      confirmPassword: '',
      messages: [],
      searchText: '',
      filteredProducts: [],
      isSearching: false,
      searchProducts: [
        { id: 1, name: 'Laptop', price: 3500 },
        { id: 2, name: 'Monitor', price: 900 },
        { id: 3, name: 'Klawiatura', price: 150 },
        { id: 4, name: 'Mysz', price: 80 }
      ],
      user: {
        imie: 'Anna',
        nazwisko: 'Kowalska',
        email: 'anna@example.com',
        rola: 'Student'
      },
      products: [
        { id: 1, nazwa: 'Laptop', cena: 3500, dostepnosc: true },
        { id: 2, nazwa: 'Mysz', cena: 80, dostepnosc: true },
        { id: 3, nazwa: 'Słuchawki', cena: 199, dostepnosc: false }
      ],
      tasks: [
        { id: 1, title: 'Nauka Vue' },
        { id: 2, title: 'Projekt na zajęcia' },
        { id: 3, title: 'Test aplikacji' }
      ],
      student: { imie: 'Jan', nazwisko: 'Nowak', grupa: 'A' },
      students: [{ id: 1, imie: 'Anna', nazwisko: 'Kowal', grupa: 'A' }],
      nextStudentId: 2,
      imie: '',
      grupa: '',
      imieMessage: '',
      userInfo: '',
      classStudents: [
        { id: 1, imie: 'Anna', nazwisko: 'Kowal', grupa: 'A', aktywny: true, email: 'anna@test.com' },
        { id: 2, imie: 'Jan', nazwisko: 'Nowak', grupa: 'B', aktywny: false, email: 'jan@test.com' },
        { id: 3, imie: 'Ewa', nazwisko: 'Lis', grupa: 'A', aktywny: true, email: 'ewa@test.com' }
      ],
      selectedStudent: null,
      searchTimer: null,
      stopWatchEffect: null
    };
  },
  watch: {
    email() { this.validate(); },
    password() { this.validate(); },
    confirmPassword() { this.validate(); },
    searchText(value) {
      this.isSearching = true;
      clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => {
        const query = value.toLowerCase().trim();
        if (!query) {
          this.filteredProducts = [...this.searchProducts];
        } else {
          this.filteredProducts = this.searchProducts.filter((p) =>
            p.name.toLowerCase().includes(query)
          );
        }
        this.isSearching = false;
      }, 500);
    },
    imie(value) {
      this.imieMessage = value ? `Zmieniono imię na: ${value}` : 'Brak imienia';
    },
    selectedStudent(value) {
      if (value) {
        localStorage.setItem('selectedStudent', JSON.stringify(value));
      }
    }
  },
  mounted() {
    this.filteredProducts = [...this.searchProducts];
    const saved = localStorage.getItem('selectedStudent');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const found = this.classStudents.find((s) => s.id === parsed.id);
        if (found) this.selectedStudent = found;
      } catch (e) {
        /* ignore */
      }
    }
    this.stopWatchEffect = watchEffect(() => {
      this.userInfo = `Użytkownik: ${this.imie || '—'}, grupa: ${this.grupa || '—'}`;
    });
  },
  beforeUnmount() {
    if (this.stopWatchEffect) this.stopWatchEffect();
    clearTimeout(this.searchTimer);
  },
  methods: {
    validate() {
      const list = [];
      if (this.email && !this.email.includes('@')) {
        list.push('Email musi zawierać znak @');
      }
      if (this.password && this.password.length < 6) {
        list.push('Hasło musi mieć minimum 6 znaków');
      }
      if (this.confirmPassword && this.confirmPassword !== this.password) {
        list.push('Hasła muszą być takie same');
      }
      this.messages = list;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    updateStudent(data) {
      this.student = { ...data };
    },
    addStudent(data) {
      this.students.push({ id: this.nextStudentId++, ...data });
    },
    selectStudent(student) {
      this.selectedStudent = student;
    }
  }
};
</script>
