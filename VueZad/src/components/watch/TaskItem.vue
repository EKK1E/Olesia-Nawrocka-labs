<template>
  <div class="card class-row">
    <span>{{ title }}</span>
    <button @click="$emit('delete-task', id)">Usuń</button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    id: Number,
    title: String
  },
  emits: ['delete-task']
};
</script>
