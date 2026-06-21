<template>
  <header class="header">
    <div class="header-inner">
      <h1 class="logo">Portfolio Studenta</h1>
      <nav class="nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/contact" class="nav-link">Kontakt</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background: linear-gradient(90deg, #2e7d32, #1565c0);
  color: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.logo {
  margin: 0;
  font-size: 1.4rem;
}

.nav {
  display: flex;
  gap: 12px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  padding: 8px 14px;
  border-radius: 8px;
  transition: background 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.22);
}
</style>
