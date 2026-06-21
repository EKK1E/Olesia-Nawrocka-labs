<template>
  <article class="project-card card" :class="{ active }" @click="$emit('select')">
    <img :src="image" :alt="name" class="thumb" />
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <div class="tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  image: String,
  tags: Array,
  active: Boolean
});

defineEmits(['select']);
</script>

<style scoped>
.project-card {
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
  border: 2px solid transparent;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(21, 101, 192, 0.18);
}

.project-card.active {
  border-color: #2e7d32;
  background: linear-gradient(180deg, #ffffff, #f1f8e9);
}

.thumb {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 12px;
}

.project-card h3 {
  margin: 0 0 8px;
  color: #1565c0;
}

.project-card p {
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 10px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}
</style>
