<template>
  <div class="user-panel card">
    <div class="panel-header">
      <slot name="header"></slot>
    </div>
    <div class="panel-body">
      <slot name="user-data"></slot>
    </div>
    <div class="panel-actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPanel'
};
</script>

<style scoped>
.panel-header {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.panel-body {
  margin-bottom: 12px;
}

.panel-actions {
  display: flex;
  gap: 8px;
}
</style>
