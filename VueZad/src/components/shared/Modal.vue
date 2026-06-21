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

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal {
  position: relative;
  max-width: 480px;
}

.modal-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 12px;
}

.modal-body {
  margin-bottom: 16px;
}
</style>
