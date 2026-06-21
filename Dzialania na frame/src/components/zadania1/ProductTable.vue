<template>
  <section class="task">
    <h2>Tabela produktów</h2>
    <div class="form">
      <select v-model="categoryFilter">
        <option value="">Wszystkie kategorie</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
      <button @click="toggleSortDirection">Sortuj po cenie: {{ sortAsc ? 'rosnąco' : 'malejąco' }}</button>
      <label>
        <input v-model="hideUnavailable" type="checkbox" />
        Ukryj niedostępne
      </label>
    </div>
    <table class="data-table">
      <thead>
        <tr>
          <th>Nazwa</th>
          <th>Cena</th>
          <th>Kategoria</th>
          <th>Dostępność</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in displayProducts" :key="product.id">
          <td>{{ product.nazwa }}</td>
          <td>{{ product.cena }} zł</td>
          <td>{{ product.kategoria }}</td>
          <td>{{ product.dostepnosc ? 'Tak' : 'Nie' }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const products = ref([
  { id: 1, nazwa: 'Laptop', cena: 3500, kategoria: 'Elektronika', dostepnosc: true },
  { id: 2, nazwa: 'Książka', cena: 45, kategoria: 'Książki', dostepnosc: true },
  { id: 3, nazwa: 'Słuchawki', cena: 199, kategoria: 'Elektronika', dostepnosc: false },
  { id: 4, nazwa: 'Notatnik', cena: 12, kategoria: 'Biuro', dostepnosc: true }
]);

const categoryFilter = ref('');
const sortAsc = ref(true);
const hideUnavailable = ref(false);

const categories = computed(() => {
  return [...new Set(products.value.map((p) => p.kategoria))];
});

const displayProducts = computed(() => {
  let list = [...products.value];

  if (categoryFilter.value) {
    list = list.filter((p) => p.kategoria === categoryFilter.value);
  }

  if (hideUnavailable.value) {
    list = list.filter((p) => p.dostepnosc);
  }

  list.sort((a, b) => (sortAsc.value ? a.cena - b.cena : b.cena - a.cena));

  return list;
});

function toggleSortDirection() {
  sortAsc.value = !sortAsc.value;
}
</script>
