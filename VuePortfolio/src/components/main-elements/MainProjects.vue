<template>
  <section class="projects-section">
    <h2>Projekty</h2>
    <div class="projects-grid">
      <ProjectsProject
        v-for="project in projects"
        :key="project.id"
        :name="project.name"
        :description="project.description"
        :image="project.image"
        :tags="project.tags"
        :active="activeId === project.id"
        @select="$emit('select-project', project)"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectsProject from './projects/ProjectsProject.vue';

defineProps({
  projects: Array,
  activeId: Number
});

defineEmits(['select-project']);
</script>

<style scoped>
.projects-section h2 {
  color: #1565c0;
  margin-bottom: 16px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
</style>
