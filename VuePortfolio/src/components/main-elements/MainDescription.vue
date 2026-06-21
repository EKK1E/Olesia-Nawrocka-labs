<template>
  <section class="description card">
    <h2>Kyrylo Voloshyn</h2>
    <p class="subtitle">Kierunek: Informatyka</p>
    <p class="text">
      Student informatyki zainteresowany tworzeniem aplikacji webowych, mobilnych oraz bazami danych.
      Portfolio przedstawia przykładowe projekty wykonane podczas nauki programowania.
    </p>
    <h3>Umiejętności</h3>
    <ul class="skills">
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>

<script setup>
const skills = ['Vue.js', 'JavaScript', 'HTML/CSS', 'Android', 'SQL', 'GitHub'];
</script>

<style scoped>
.description {
  text-align: justify;
}

.description h2 {
  margin-top: 0;
  color: #2e7d32;
}

.subtitle {
  color: #1565c0;
  font-weight: bold;
}

.text {
  line-height: 1.7;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.skills li {
  background: linear-gradient(135deg, #e8f5e9, #e3f2fd);
  border: 1px solid #a5d6a7;
  border-radius: 8px;
  padding: 8px 14px;
}
</style>
