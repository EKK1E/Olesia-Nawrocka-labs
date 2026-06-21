<template>
  <div class="app-shell">
    <AppHeader />
    <router-view />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Merriweather', Georgia, serif;
  background: linear-gradient(135deg, #e8f5e9 0%, #e3f2fd 100%);
  color: #1b3a4b;
  min-height: 100vh;
}

.app-shell {
  min-height: 100vh;
}

a {
  color: inherit;
}

button {
  cursor: pointer;
  font-family: inherit;
}

.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 20px 40px;
}

.card {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(27, 58, 75, 0.1);
  padding: 24px;
}

.btn-primary {
  background: linear-gradient(135deg, #2e7d32, #1565c0);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(21, 101, 192, 0.3);
}

.tag {
  display: inline-block;
  background: #e8f5e9;
  color: #2e7d32;
  border: 1px solid #a5d6a7;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 0.8rem;
  margin-right: 6px;
  margin-bottom: 6px;
}
</style>
