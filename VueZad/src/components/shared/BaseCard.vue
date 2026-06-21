<template>
  <div class="base-card card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
};
</script>

<style scoped>
.base-card {
  border: 2px solid #2563eb;
}
</style>
