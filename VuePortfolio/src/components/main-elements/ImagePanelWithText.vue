<template>
  <section class="image-panel card">
    <div class="panel-grid">
      <img :src="image" :alt="alt" class="panel-image" />
      <div class="panel-content">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <div class="tags">
          <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <button class="btn-primary" @click="showDetails">Zobacz szczegóły</button>
        <p v-if="detailsVisible" class="details-msg">Szczegóły projektu: {{ title }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
  text: String,
  image: String,
  alt: String,
  tags: Array
});

const detailsVisible = ref(false);

function showDetails() {
  detailsVisible.value = true;
}
</script>

<style scoped>
.panel-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 24px;
  align-items: center;
}

.panel-image {
  width: 100%;
  max-height: 280px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}

.panel-content h2 {
  margin-top: 0;
  color: #2e7d32;
}

.panel-content p {
  line-height: 1.7;
  text-align: justify;
}

.details-msg {
  margin-top: 12px;
  color: #1565c0;
  font-weight: bold;
}

@media (max-width: 768px) {
  .panel-grid {
    grid-template-columns: 1fr;
  }
}
</style>
