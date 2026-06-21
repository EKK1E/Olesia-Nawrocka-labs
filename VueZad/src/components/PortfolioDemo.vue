<template>
  <div class="portfolio">
    <header class="portfolio-header">
      <h1>Portfolio</h1>
    </header>

    <section class="card description">
      <h2>Kyrylo Voloshyn</h2>
      <p class="kierunek">Kierunek: Informatyka</p>
      <p>
        Student informatyki zainteresowany tworzeniem aplikacji webowych i mobilnych.
        Portfolio przedstawia przykładowe projekty wykonane podczas nauki programowania.
      </p>
    </section>

    <section class="projects-section">
      <h2>Projekty</h2>
      <div class="cards">
        <div v-for="project in projects" :key="project.id" class="card project-card">
          <div class="project-image" :style="{ background: project.color }">
            {{ project.title }}
          </div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <button @click="selectProject(project)">Szczegóły</button>
        </div>
      </div>
      <p v-if="selectedProject" class="selected-info">
        Wybrany projekt: <strong>{{ selectedProject.title }}</strong>
      </p>
    </section>

    <section class="card contact">
      <h2>Kontakt</h2>
      <p><strong>Imię i nazwisko:</strong> Kyrylo Voloshyn</p>
      <p><strong>E-mail:</strong> kyrylo.voloshyn@example.com</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PortfolioDemo',
  data() {
    return {
      selectedProject: null,
      projects: [
        {
          id: 1,
          title: 'Vue Portfolio',
          description: 'Strona portfolio zbudowana w Vue 3 z wieloma sekcjami.',
          color: 'linear-gradient(135deg, #2e7d32, #66bb6a)'
        },
        {
          id: 2,
          title: 'Helpdesk App',
          description: 'Aplikacja do zgłaszania i obsługi zgłoszeń technicznych.',
          color: 'linear-gradient(135deg, #1565c0, #42a5f5)'
        },
        {
          id: 3,
          title: 'Android App',
          description: 'Mobilna aplikacja do zarządzania zadaniami na Androidzie.',
          color: 'linear-gradient(135deg, #e65100, #ffb74d)'
        }
      ]
    };
  },
  methods: {
    selectProject(project) {
      this.selectedProject = project;
    }
  }
};
</script>

<style scoped>
.portfolio-header {
  background: linear-gradient(90deg, #2e7d32, #43a047);
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 16px;
}

.portfolio-header h1 {
  margin: 0;
}

.description h2 {
  color: #2e7d32;
  margin-top: 0;
}

.kierunek {
  color: #1565c0;
  font-weight: bold;
}

.projects-section h2 {
  color: #2e7d32;
}

.project-image {
  height: 120px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  margin-bottom: 10px;
}

.selected-info {
  margin-top: 16px;
  padding: 12px;
  background: #e8f5e9;
  border-radius: 8px;
}

.contact h2 {
  color: #2e7d32;
  margin-top: 0;
}
</style>
