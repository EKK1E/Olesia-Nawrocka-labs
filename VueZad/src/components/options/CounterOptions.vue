<template>
  <div class="counter-box card">
    <h3>Options API</h3>
    <p>Licznik: {{ count }}</p>
    <div class="actions">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterOptions',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
</script>

<style scoped>
.counter-box {
  text-align: center;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 8px;
}
</style>
