<template>
  <div class="counter-box card">
    <h3>Composition API</h3>
    <p>Licznik: {{ count }}</p>
    <div class="actions">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}
</script>
