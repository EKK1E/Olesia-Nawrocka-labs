<template>
  <section class="task">
    <h2>Porównanie computed i methods</h2>
    <p>Aktualna liczba: {{ number }}</p>
    <p>Wartość podwojona (computed): {{ doubledComputed }}</p>
    <p>Wartość podwojona (methods): {{ doubledMethod() }}</p>
    <div class="form">
      <button @click="increase">Zwiększ</button>
      <button @click="decrease">Zmniejsz</button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const number = ref(5);

const doubledComputed = computed(() => {
  console.log('computed uruchomione');
  return number.value * 2;
});

function doubledMethod() {
  console.log('method uruchomione');
  return number.value * 2;
}

function increase() {
  number.value++;
}

function decrease() {
  number.value--;
}
</script>
