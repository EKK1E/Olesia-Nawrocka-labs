<template>
  <div v-if="show" class="modal-overlay" @click.self="close">
    <div class="modal card">
      <button class="modal-close" @click="close">×</button>
      <div class="modal-title">
        <slot name="title"></slot>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

function close() {
  emit('close');
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 100;
}

.modal {
  width: 100%;
  max-width: 480px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.modal-body {
  margin-bottom: 16px;
}

.modal-actions {
  display: flex;
  gap: 8px;
}
</style>
