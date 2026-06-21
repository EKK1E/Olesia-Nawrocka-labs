<template>
  <div class="app">
    <header>
      <h1>VueJSL3 — Options API vs Composition API</h1>
      <nav class="main-nav">
        <button
          v-for="task in tasks"
          :key="task.id"
          :class="{ active: activeTask === task.id }"
          @click="activeTask = task.id"
        >
          {{ task.id }}. {{ task.label }}
        </button>
      </nav>
    </header>
    <main>
      <Task01Counter v-if="activeTask === 1" />
      <UserFormOptions v-if="activeTask === 2" />
      <UserFormComposition v-if="activeTask === 3" />
      <SlotBasicDemo v-if="activeTask === 4" />
      <ParentComponent v-if="activeTask === 5" />
      <UserPanelDemo v-if="activeTask === 6" />
      <Task07Rewrite v-if="activeTask === 7" />
      <ModalDemo v-if="activeTask === 8" />
      <Task09InfoCards v-if="activeTask === 9" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Task01Counter from './components/Task01Counter.vue';
import UserFormOptions from './components/UserFormOptions.vue';
import UserFormComposition from './components/UserFormComposition.vue';
import SlotBasicDemo from './components/SlotBasicDemo.vue';
import ParentComponent from './components/ParentComponent.vue';
import UserPanelDemo from './components/UserPanelDemo.vue';
import Task07Rewrite from './components/Task07Rewrite.vue';
import ModalDemo from './components/ModalDemo.vue';
import Task09InfoCards from './components/Task09InfoCards.vue';

const activeTask = ref(1);

const tasks = [
  { id: 1, label: 'Counter API' },
  { id: 2, label: 'Form Options' },
  { id: 3, label: 'Form Composition' },
  { id: 4, label: 'Basic Slot' },
  { id: 5, label: 'Named Slots' },
  { id: 6, label: 'User Panel Slots' },
  { id: 7, label: 'Rewrite API' },
  { id: 8, label: 'Modal Slots' },
  { id: 9, label: 'Info Cards' }
];
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
  font-size: 1.5rem;
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.main-nav button,
button {
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff;
  padding: 8px 12px;
  border-radius: 6px;
}

.main-nav button.active {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}

.task,
.task-wide {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
  background: #fafafa;
}

.counter-box {
  text-align: center;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.form {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}

input {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list li {
  margin-bottom: 8px;
}

.hint {
  margin-top: 16px;
  color: #666;
  font-style: italic;
}
</style>
