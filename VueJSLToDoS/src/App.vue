<template>
  <div class="app">
    <header>
      <h1>VueJSL ToDo</h1>
      <nav class="nav">
        <button
          v-for="item in views"
          :key="item.id"
          :class="{ active: activeView === item.id }"
          @click="activeView = item.id"
        >
          {{ item.label }}
        </button>
      </nav>
    </header>
    <main>
      <TODOComponent v-if="activeView === 'todo'" />
      <ShoppingList v-if="activeView === 'shopping'" />
      <EventsLayout v-if="activeView === 'events'" />
    </main>
  </div>
</template>

<script>
import TODOComponent from './components/TODOComponent.vue';
import ShoppingList from './components/ShoppingList.vue';
import EventsLayout from './components/EventsLayout.vue';

export default {
  name: 'App',
  components: {
    TODOComponent,
    ShoppingList,
    EventsLayout
  },
  data() {
    return {
      activeView: 'todo',
      views: [
        { id: 'todo', label: 'ToDo' },
        { id: 'shopping', label: 'Lista zakupów' },
        { id: 'events', label: 'Events' }
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
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header h1 {
  margin: 0 0 16px;
}

.nav {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.nav button,
button {
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff;
  padding: 8px 14px;
  border-radius: 6px;
}

.nav button.active {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}

.card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.form {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

input[type="text"],
input:not([type]) {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  flex: 1;
  min-width: 180px;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  margin: 0;
}
</style>
