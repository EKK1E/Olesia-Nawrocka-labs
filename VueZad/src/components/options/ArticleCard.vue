<template>
  <article class="article-card card">
    <header class="article-header">
      <slot name="header"></slot>
    </header>
    <section class="article-content">
      <slot name="content"></slot>
    </section>
    <footer class="article-footer">
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'ArticleCard'
};
</script>

<style scoped>
.article-header {
  font-weight: bold;
  margin-bottom: 10px;
}

.article-content {
  margin-bottom: 10px;
}

.article-footer {
  font-size: 0.9rem;
  color: #666;
}
</style>
