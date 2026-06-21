<template>
  <section class="task">
    <h2>Dashboard statystyk grupy</h2>
    <DashboardStats :students="students" />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import DashboardStats from './DashboardStats.vue';

const students = ref([
  { imie: 'Anna', nazwisko: 'Nowak', grupa: 'A', aktywny: true },
  { imie: 'Piotr', nazwisko: 'Kowal', grupa: 'A', aktywny: false },
  { imie: 'Ewa', nazwisko: 'Lis', grupa: 'B', aktywny: true },
  { imie: 'Marek', nazwisko: 'Zieliński', grupa: 'B', aktywny: true }
]);
</script>
