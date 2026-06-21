<template>
  <div class="main-layout">
    <MainDescription />
    <MainProjects
      :projects="projects"
      :active-id="selectedProject.id"
      @select-project="selectProject"
    />
    <ImagePanelWithText
      :title="selectedProject.name"
      :text="selectedProject.description"
      :image="selectedProject.image"
      :alt="selectedProject.name"
      :tags="selectedProject.tags"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MainDescription from './main-elements/MainDescription.vue';
import MainProjects from './main-elements/MainProjects.vue';
import ImagePanelWithText from './main-elements/ImagePanelWithText.vue';
import portfolioImg from '../assets/project-portfolio.svg';
import helpdeskImg from '../assets/project-helpdesk.svg';
import androidImg from '../assets/project-android.svg';
import databaseImg from '../assets/project-database.svg';

const projects = [
  {
    id: 1,
    name: 'Portfolio Vue',
    description: 'Aplikacja portfolio wykonana w Vue.js z komponentami, props i routerem.',
    image: portfolioImg,
    tags: ['Vue.js', 'Router', 'Components']
  },
  {
    id: 2,
    name: 'Helpdesk App',
    description: 'Prosta aplikacja typu helpdesk do obsługi zgłoszeń użytkowników.',
    image: helpdeskImg,
    tags: ['JavaScript', 'Forms', 'UI']
  },
  {
    id: 3,
    name: 'Android Student App',
    description: 'Aplikacja mobilna wykonana w Android Studio z listą danych i formularzem.',
    image: androidImg,
    tags: ['Android', 'Java', 'Mobile']
  },
  {
    id: 4,
    name: 'Database Project',
    description: 'Projekt bazy danych z tabelami, relacjami i prostymi operacjami CRUD.',
    image: databaseImg,
    tags: ['SQL', 'MySQL', 'CRUD']
  }
];

const selectedProject = ref(projects[0]);

function selectProject(project) {
  selectedProject.value = project;
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>
