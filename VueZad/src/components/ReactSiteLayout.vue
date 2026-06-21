<template>
  <div class="react-site">
    <header class="site-header">
      <div class="logo-area">Logo</div>
      <h1>React Site</h1>
    </header>

    <div class="site-body">
      <main class="site-main">
        <section class="card">
          <h2>Angular</h2>
          <p>Framework do budowy aplikacji SPA od Google.</p>
        </section>
        <section class="card">
          <h2>Vue</h2>
          <p>Progresywny framework JavaScript do interfejsów użytkownika.</p>
        </section>
        <section class="card">
          <h2>Express.js</h2>
          <p>Minimalistyczny framework Node.js do aplikacji webowych.</p>
        </section>
      </main>

      <aside class="site-sidebar card">
        <h3>Menu</h3>
        <ul>
          <li>Angular</li>
          <li>Vue</li>
          <li>Express.js</li>
        </ul>
      </aside>
    </div>

    <footer class="site-footer">
      React Site 2024 copyright. All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ReactSiteLayout'
};
</script>

<style scoped>
.react-site {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.site-header {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #282c34;
  color: #61dafb;
  padding: 16px 20px;
  border-radius: 8px;
}

.site-header h1 {
  margin: 0;
}

.logo-area {
  width: 50px;
  height: 50px;
  background: #61dafb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #282c34;
  font-weight: bold;
  font-size: 0.75rem;
}

.site-body {
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 16px;
}

.site-main {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.site-sidebar ul {
  list-style: none;
  padding: 0;
}

.site-sidebar li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.site-footer {
  text-align: center;
  padding: 12px;
  background: #282c34;
  color: #aaa;
  border-radius: 8px;
  font-size: 0.9rem;
}

@media (max-width: 700px) {
  .site-body {
    grid-template-columns: 1fr;
  }
}
</style>
