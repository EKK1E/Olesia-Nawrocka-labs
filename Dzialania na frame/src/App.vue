<template>
  <div class="app">
    <header>
      <h1>Działania na frame — Vue 3</h1>
      <nav class="section-nav">
        <button
          v-for="section in sections"
          :key="section.id"
          :class="{ active: activeSection === section.id }"
          @click="setSection(section.id)"
        >
          {{ section.label }}
        </button>
      </nav>
      <nav class="main-nav">
        <button
          v-for="task in currentTasks"
          :key="task.id"
          :class="{ active: activeTask === task.id }"
          @click="activeTask = task.id"
        >
          {{ task.id }}. {{ task.label }}
        </button>
      </nav>
    </header>
    <main>
      <template v-if="activeSection === 'frame'">
        <Task01Students v-if="activeTask === 1" />
        <Task02Products v-if="activeTask === 2" />
        <Task03Todo v-if="activeTask === 3" />
        <Task04Gallery v-if="activeTask === 4" />
        <Task05Login v-if="activeTask === 5" />
        <Task06Menu v-if="activeTask === 6" />
        <Task07Dashboard v-if="activeTask === 7" />
        <Task08Search v-if="activeTask === 8" />
        <Task09Modal v-if="activeTask === 9" />
        <Task10Class v-if="activeTask === 10" />
      </template>

      <template v-if="activeSection === 'zadania1'">
        <PhoneCost v-if="activeTask === 1" />
        <OrderCalculator v-if="activeTask === 2" />
        <StudentFilter v-if="activeTask === 3" />
        <ComputedVsMethods v-if="activeTask === 4" />
        <ProductTable v-if="activeTask === 5" />
        <UserStats v-if="activeTask === 6" />
      </template>

      <template v-if="activeSection === 'zadania2'">
        <RegistrationWatch v-if="activeTask === 1" />
        <SearchWatch v-if="activeTask === 2" />
        <UserCardDemo v-if="activeTask === 3" />
        <ProductListDemo v-if="activeTask === 4" />
        <TaskDeleteDemo v-if="activeTask === 5" />
        <StudentEditorDemo v-if="activeTask === 6" />
        <AddStudentsDemo v-if="activeTask === 7" />
        <WatchEffectDemo v-if="activeTask === 8" />
        <ClassPanel v-if="activeTask === 9" />
      </template>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

import Task01Students from './components/Task01Students.vue';
import Task02Products from './components/Task02Products.vue';
import Task03Todo from './components/Task03Todo.vue';
import Task04Gallery from './components/Task04Gallery.vue';
import Task05Login from './components/Task05Login.vue';
import Task06Menu from './components/Task06Menu.vue';
import Task07Dashboard from './components/Task07Dashboard.vue';
import Task08Search from './components/Task08Search.vue';
import Task09Modal from './components/Task09Modal.vue';
import Task10Class from './components/Task10Class.vue';

import PhoneCost from './components/zadania1/PhoneCost.vue';
import OrderCalculator from './components/zadania1/OrderCalculator.vue';
import StudentFilter from './components/zadania1/StudentFilter.vue';
import ComputedVsMethods from './components/zadania1/ComputedVsMethods.vue';
import ProductTable from './components/zadania1/ProductTable.vue';
import UserStats from './components/zadania1/UserStats.vue';

import RegistrationWatch from './components/zadania2/RegistrationWatch.vue';
import SearchWatch from './components/zadania2/SearchWatch.vue';
import UserCardDemo from './components/zadania2/UserCardDemo.vue';
import ProductListDemo from './components/zadania2/ProductListDemo.vue';
import TaskDeleteDemo from './components/zadania2/TaskDeleteDemo.vue';
import StudentEditorDemo from './components/zadania2/StudentEditorDemo.vue';
import AddStudentsDemo from './components/zadania2/AddStudentsDemo.vue';
import WatchEffectDemo from './components/zadania2/WatchEffectDemo.vue';
import ClassPanel from './components/zadania2/ClassPanel.vue';

const activeSection = ref('frame');
const activeTask = ref(1);

const sections = [
  { id: 'frame', label: 'Frame (1–10)' },
  { id: 'zadania1', label: 'Zadania 1 — computed i methods' },
  { id: 'zadania2', label: 'Zadania 2 — watch, props, emit' }
];

const frameTasks = [
  { id: 1, label: 'Uczniowie' },
  { id: 2, label: 'Produkty' },
  { id: 3, label: 'ToDo' },
  { id: 4, label: 'Galeria' },
  { id: 5, label: 'Logowanie' },
  { id: 6, label: 'Menu' },
  { id: 7, label: 'Dashboard' },
  { id: 8, label: 'Wyszukiwarka' },
  { id: 9, label: 'Modal' },
  { id: 10, label: 'Klasa' }
];

const zadania1Tasks = [
  { id: 1, label: 'Telefony' },
  { id: 2, label: 'Zamówienie' },
  { id: 3, label: 'Studenci' },
  { id: 4, label: 'Computed vs Methods' },
  { id: 5, label: 'Produkty' },
  { id: 6, label: 'Statystyki' }
];

const zadania2Tasks = [
  { id: 1, label: 'Watch validation' },
  { id: 2, label: 'Watch search' },
  { id: 3, label: 'UserCard props' },
  { id: 4, label: 'ProductItem props' },
  { id: 5, label: 'Delete by emit' },
  { id: 6, label: 'Student editor' },
  { id: 7, label: 'Add students' },
  { id: 8, label: 'WatchEffect' },
  { id: 9, label: 'Class panel' }
];

const currentTasks = computed(() => {
  if (activeSection.value === 'zadania1') return zadania1Tasks;
  if (activeSection.value === 'zadania2') return zadania2Tasks;
  return frameTasks;
});

function setSection(sectionId) {
  activeSection.value = sectionId;
  activeTask.value = 1;
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f6f8;
  color: #222;
}

.app {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
}

header h1 {
  margin: 0 0 16px;
}

.section-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.section-nav button {
  font-weight: bold;
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.section-nav button,
.main-nav button,
.filters button,
button {
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff;
  padding: 8px 12px;
  border-radius: 6px;
}

.section-nav button.active,
.main-nav button.active,
.filters button.active,
.dynamic-menu a.active {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}

.task {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.form,
.login-form,
.modal-form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

input,
select,
textarea {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

textarea {
  min-width: 100%;
  min-height: 80px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}

.card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
  background: #fafafa;
}

.card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
}

.student-select-card {
  cursor: pointer;
}

.student-select-card.selected {
  border-color: #2563eb;
  background: #eff6ff;
}

.price {
  font-weight: bold;
  color: #2563eb;
}

.category {
  font-size: 0.9rem;
  color: #666;
}

.todo-list,
.search-list,
.messages {
  list-style: none;
  padding: 0;
}

.todo-list li,
.search-list li,
.class-row,
.order-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.messages li {
  padding: 6px 0;
  color: #b45309;
}

.done {
  text-decoration: line-through;
  color: #888;
}

.dynamic-menu {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.dynamic-menu a {
  text-decoration: none;
  color: #222;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.summary {
  margin-top: 16px;
  font-size: 1.05rem;
}

.search-input {
  width: 100%;
  margin-bottom: 16px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  border: 1px solid #e5e7eb;
  padding: 10px;
  text-align: left;
}

.data-table th {
  background: #f3f4f6;
}

.hint {
  color: #666;
  font-size: 0.9rem;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal {
  width: 100%;
  max-width: 420px;
  background: #fff;
}

.modal-actions {
  display: flex;
  gap: 10px;
}

.class-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
