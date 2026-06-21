<template>
  <div class="app">
    <header>
      <h1>VueZad</h1>
      <nav class="nav">
        <button
          v-for="section in sections"
          :key="section.id"
          :class="{ active: activeSection === section.id }"
          @click="activeSection = section.id"
        >
          {{ section.label }}
        </button>
      </nav>
    </header>
    <main>
      <ShoppingList v-if="activeSection === 'shopping'" />
      <EventsLayout v-if="activeSection === 'events'" />
      <ReactSiteLayout v-if="activeSection === 'react'" />
      <PortfolioDemo v-if="activeSection === 'portfolio'" />
      <ComponentsHub v-if="activeSection === 'components'" />
      <ImageUsersTask v-if="activeSection === 'gallery'" />
      <ComputedMethodsTasks v-if="activeSection === 'computed'" />
      <WatchPropsEmitTasks v-if="activeSection === 'watch'" />
      <OptionsCompositionTasks v-if="activeSection === 'options'" />
    </main>
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue';
import EventsLayout from './components/EventsLayout.vue';
import ReactSiteLayout from './components/ReactSiteLayout.vue';
import PortfolioDemo from './components/PortfolioDemo.vue';
import ComponentsHub from './components/ComponentsHub.vue';
import ImageUsersTask from './components/ImageUsersTask.vue';
import ComputedMethodsTasks from './components/ComputedMethodsTasks.vue';
import WatchPropsEmitTasks from './components/WatchPropsEmitTasks.vue';
import OptionsCompositionTasks from './components/OptionsCompositionTasks.vue';

export default {
  name: 'App',
  components: {
    ShoppingList,
    EventsLayout,
    ReactSiteLayout,
    PortfolioDemo,
    ComponentsHub,
    ImageUsersTask,
    ComputedMethodsTasks,
    WatchPropsEmitTasks,
    OptionsCompositionTasks
  },
  data() {
    return {
      activeSection: 'shopping',
      sections: [
        { id: 'shopping', label: 'Lista zakupów' },
        { id: 'events', label: 'Events layout' },
        { id: 'react', label: 'React Site layout' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'components', label: 'Komponenty i listy' },
        { id: 'gallery', label: 'Galeria użytkowników' },
        { id: 'computed', label: 'Computed i methods' },
        { id: 'watch', label: 'Watch / props / emit' },
        { id: 'options', label: 'Options / Composition API' }
      ]
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f0f2f5;
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

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.sub-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.nav button,
.sub-nav button,
.filters button,
button {
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff;
  padding: 8px 12px;
  border-radius: 6px;
}

.nav button.active,
.sub-nav button.active,
.filters button.active,
.dynamic-menu a.active {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}

.card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
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

input[type="text"],
input:not([type]),
input[type="password"],
input[type="number"],
input[type="email"],
select,
textarea {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1;
  min-width: 140px;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  margin: 0;
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

.card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
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

.done,
.bought {
  text-decoration: line-through;
  color: #888;
}

.dynamic-menu {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
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
  font-style: italic;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 100;
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

.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

.price {
  font-weight: bold;
  color: #2563eb;
}

.category {
  font-size: 0.9rem;
  color: #666;
}

.student-select-card {
  cursor: pointer;
}

.student-select-card.selected {
  border-color: #2563eb;
  background: #eff6ff;
}

.class-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 768px) {
  .class-panel {
    grid-template-columns: 1fr;
  }
}
</style>
