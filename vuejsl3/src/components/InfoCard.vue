<template>
  <div class="info-card card">
    <div class="info-header">
      <slot name="header"></slot>
    </div>
    <div class="info-body">
      <slot name="body"></slot>
    </div>
    <div class="info-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.info-header {
  font-weight: bold;
  margin-bottom: 8px;
}

.info-body {
  margin-bottom: 8px;
}

.info-footer {
  font-size: 0.9rem;
  color: #666;
}
</style>
