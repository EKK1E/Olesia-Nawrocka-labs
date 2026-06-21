<template>
  <section class="task">
    <h2>Koszt telefonów uczniów</h2>
    <ul class="search-list">
      <li v-for="student in students" :key="student.imie + student.nazwisko" class="card">
        <div>
          <strong>{{ student.imie }} {{ student.nazwisko }}</strong>
          <p>Telefon: {{ student.telefon }}</p>
          <p>Cena: {{ student.cenaTelefonu }} zł</p>
        </div>
      </li>
    </ul>
    <p class="summary">Łączny koszt telefonów: <strong>{{ totalCost }} zł</strong></p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const students = ref([
  { imie: 'Anna', nazwisko: 'Kowal', telefon: 'iPhone 13', cenaTelefonu: 3200 },
  { imie: 'Piotr', nazwisko: 'Nowak', telefon: 'Samsung A54', cenaTelefonu: 1800 },
  { imie: 'Ewa', nazwisko: 'Lis', telefon: 'Xiaomi 13', cenaTelefonu: 1500 }
]);

const totalCost = computed(() => {
  return students.value.reduce((sum, s) => sum + s.cenaTelefonu, 0);
});
</script>
