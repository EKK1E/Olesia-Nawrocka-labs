<template>
  <div>
    <nav class="sub-nav">
      <button
        v-for="section in sections"
        :key="section.id"
        :class="{ active: subActive === section.id }"
        @click="subActive = section.id"
      >
        7.{{ section.id }} {{ section.label }}
      </button>
    </nav>
    <section v-if="subActive === 1" class="task">
      <h2>7.1 Koszt telefonów uczniów</h2>
      <ul class="search-list">
        <li v-for="student in students" :key="student.imie + student.nazwisko" class="card">
          <strong>{{ student.imie }} {{ student.nazwisko }}</strong>
          <p>Telefon: {{ student.telefon }}</p>
          <p>Cena: {{ student.cenaTelefonu }} zł</p>
        </li>
      </ul>
      <p class="summary">Łączny koszt telefonów: <strong>{{ totalCost }} zł</strong></p>
    </section>
    <section v-if="subActive === 2" class="task">
      <h2>7.2 Kalkulator zamówienia</h2>
      <div v-for="product in orderProducts" :key="product.id" class="card order-row">
        <div>
          <strong>{{ product.nazwa }}</strong>
          <p>Cena: {{ product.cena }} zł</p>
          <p>Ilość: {{ product.ilosc }}</p>
          <p>Wartość: {{ product.cena * product.ilosc }} zł</p>
        </div>
        <div class="class-actions">
          <button @click="increaseQty(product.id)">+</button>
          <button @click="decreaseQty(product.id)">-</button>
        </div>
      </div>
      <div class="summary">
        <p>Suma zamówienia: {{ orderSum }} zł</p>
        <p v-if="discount > 0">Rabat 10%: -{{ discount }} zł</p>
        <p><strong>Do zapłaty: {{ finalPrice }} zł</strong></p>
      </div>
    </section>
    <section v-if="subActive === 3" class="task">
      <h2>7.3 Filtrowanie listy studentów</h2>
      <div class="form">
        <input v-model="searchText" placeholder="Szukaj po imieniu" />
        <input v-model.number="minAverage" type="number" step="0.1" placeholder="Min. średnia" />
        <button @click="resetFilters">Resetuj filtry</button>
      </div>
      <ul class="search-list">
        <li v-for="student in filteredStudents" :key="student.imie" class="card">
          <strong>{{ student.imie }}</strong> — {{ student.kierunek }} — średnia: {{ student.srednia }}
        </li>
      </ul>
      <p v-if="!filteredStudents.length">Brak wyników.</p>
    </section>
    <section v-if="subActive === 4" class="task">
      <h2>7.4 Porównanie computed i methods</h2>
      <p>Aktualna liczba: {{ number }}</p>
      <p>Wartość podwojona (computed): {{ doubledComputed }}</p>
      <p>Wartość podwojona (methods): {{ doubledMethod() }}</p>
      <div class="form">
        <button @click="increaseNumber">Zwiększ</button>
        <button @click="decreaseNumber">Zmniejsz</button>
      </div>
    </section>
    <section v-if="subActive === 5" class="task">
      <h2>7.5 Tabela produktów</h2>
      <div class="form">
        <select v-model="categoryFilter">
          <option value="">Wszystkie kategorie</option>
          <option v-for="cat in tableCategories" :key="cat" :value="cat">{{ cat }}</option>
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
    <section v-if="subActive === 6" class="task">
      <h2>7.6 Panel statystyk użytkownika</h2>
      <ul class="search-list">
        <li v-for="task in userTasks" :key="task.id" class="card class-row">
          <div>
            <strong>{{ task.nazwa }}</strong>
            <p>Status: {{ task.status }}</p>
            <p>Punkty: {{ task.punkty }}</p>
          </div>
          <button @click="toggleStatus(task.id)">Zmień status</button>
        </li>
      </ul>
      <div class="dashboard">
        <div class="stat card">
          <span>Wykonane</span>
          <strong>{{ doneCount }}</strong>
        </div>
        <div class="stat card">
          <span>Niewykonane</span>
          <strong>{{ pendingCount }}</strong>
        </div>
        <div class="stat card">
          <span>Suma punktów</span>
          <strong>{{ totalPoints }}</strong>
        </div>
        <div class="stat card">
          <span>Procent ukończenia</span>
          <strong>{{ completionPercent }}%</strong>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ComputedMethodsTasks',
  data() {
    return {
      subActive: 1,
      sections: [
        { id: 1, label: 'Telefony' },
        { id: 2, label: 'Zamówienie' },
        { id: 3, label: 'Studenci' },
        { id: 4, label: 'Computed vs Methods' },
        { id: 5, label: 'Tabela' },
        { id: 6, label: 'Statystyki' }
      ],
      students: [
        { imie: 'Anna', nazwisko: 'Kowal', telefon: 'iPhone 13', cenaTelefonu: 3200 },
        { imie: 'Piotr', nazwisko: 'Nowak', telefon: 'Samsung A54', cenaTelefonu: 1800 },
        { imie: 'Ewa', nazwisko: 'Lis', telefon: 'Xiaomi 13', cenaTelefonu: 1500 }
      ],
      orderProducts: [
        { id: 1, nazwa: 'Laptop', cena: 300, ilosc: 1 },
        { id: 2, nazwa: 'Mysz', cena: 80, ilosc: 2 },
        { id: 3, nazwa: 'Monitor', cena: 200, ilosc: 1 }
      ],
      studentList: [
        { imie: 'Anna', kierunek: 'Informatyka', srednia: 4.5 },
        { imie: 'Jan', kierunek: 'Ekonomia', srednia: 3.8 },
        { imie: 'Maria', kierunek: 'Informatyka', srednia: 4.9 },
        { imie: 'Tomek', kierunek: 'Prawo', srednia: 3.2 }
      ],
      searchText: '',
      minAverage: 0,
      number: 5,
      tableProducts: [
        { id: 1, nazwa: 'Laptop', cena: 3500, kategoria: 'Elektronika', dostepnosc: true },
        { id: 2, nazwa: 'Książka', cena: 45, kategoria: 'Książki', dostepnosc: true },
        { id: 3, nazwa: 'Słuchawki', cena: 199, kategoria: 'Elektronika', dostepnosc: false },
        { id: 4, nazwa: 'Notatnik', cena: 12, kategoria: 'Biuro', dostepnosc: true }
      ],
      categoryFilter: '',
      sortAsc: true,
      hideUnavailable: false,
      userTasks: [
        { id: 1, nazwa: 'Projekt Vue', status: 'done', punkty: 20 },
        { id: 2, nazwa: 'Test jednostkowy', status: 'pending', punkty: 10 },
        { id: 3, nazwa: 'Dokumentacja', status: 'done', punkty: 15 },
        { id: 4, nazwa: 'Prezentacja', status: 'pending', punkty: 25 }
      ]
    };
  },
  computed: {
    totalCost() {
      return this.students.reduce((sum, s) => sum + s.cenaTelefonu, 0);
    },
    orderSum() {
      return this.orderProducts.reduce((sum, p) => sum + p.cena * p.ilosc, 0);
    },
    discount() {
      return this.orderSum > 500 ? Math.round(this.orderSum * 0.1) : 0;
    },
    finalPrice() {
      return this.orderSum - this.discount;
    },
    filteredStudents() {
      return this.studentList.filter((student) => {
        const matchesName = student.imie.toLowerCase().includes(this.searchText.toLowerCase());
        const matchesAverage = student.srednia >= this.minAverage;
        return matchesName && matchesAverage;
      });
    },
    doubledComputed() {
      console.log('computed uruchomione');
      return this.number * 2;
    },
    tableCategories() {
      return [...new Set(this.tableProducts.map((p) => p.kategoria))];
    },
    displayProducts() {
      let list = [...this.tableProducts];
      if (this.categoryFilter) {
        list = list.filter((p) => p.kategoria === this.categoryFilter);
      }
      if (this.hideUnavailable) {
        list = list.filter((p) => p.dostepnosc);
      }
      list.sort((a, b) => (this.sortAsc ? a.cena - b.cena : b.cena - a.cena));
      return list;
    },
    doneCount() {
      return this.userTasks.filter((t) => t.status === 'done').length;
    },
    pendingCount() {
      return this.userTasks.filter((t) => t.status === 'pending').length;
    },
    totalPoints() {
      return this.userTasks.reduce((sum, t) => sum + t.punkty, 0);
    },
    completionPercent() {
      if (!this.userTasks.length) return 0;
      return Math.round((this.doneCount / this.userTasks.length) * 100);
    }
  },
  methods: {
    increaseQty(id) {
      const product = this.orderProducts.find((p) => p.id === id);
      if (product) product.ilosc++;
    },
    decreaseQty(id) {
      const product = this.orderProducts.find((p) => p.id === id);
      if (product && product.ilosc > 1) product.ilosc--;
    },
    resetFilters() {
      this.searchText = '';
      this.minAverage = 0;
    },
    doubledMethod() {
      console.log('method uruchomione');
      return this.number * 2;
    },
    increaseNumber() {
      this.number++;
    },
    decreaseNumber() {
      this.number--;
    },
    toggleSortDirection() {
      this.sortAsc = !this.sortAsc;
    },
    toggleStatus(id) {
      const task = this.userTasks.find((t) => t.id === id);
      if (task) {
        task.status = task.status === 'done' ? 'pending' : 'done';
      }
    }
  }
};
</script>
