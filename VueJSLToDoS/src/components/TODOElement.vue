<template>
  <li class="todo-item">
    <label class="todo-label">
      <input type="checkbox" :checked="task.done" @change="toggleDone" />
      <span :class="{ done: task.done }">{{ task.text }}</span>
    </label>
    <button @click="$emit('remove', task.id)">Usuń</button>
  </li>
</template>

<script>
export default {
  name: 'TODOElement',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  emits: ['remove', 'toggle'],
  methods: {
    toggleDone() {
      this.$emit('toggle', this.task.id);
    }
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.done {
  text-decoration: line-through;
  color: #888;
}

.todo-label {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
}
</style>
