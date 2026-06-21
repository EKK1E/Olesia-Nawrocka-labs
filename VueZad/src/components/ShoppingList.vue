<template>
  <section class="card shopping">
    <hr />
    <h2>Moja lista zakupów</h2>
    <div class="form">
      <input v-model="newItem" placeholder="dodaj produkt" />
      <button @click="addItem">Dodaj!</button>
    </div>
    <ul class="shopping-list">
      <li v-for="item in items" :key="item.id">
        <label class="shopping-label">
          <input type="checkbox" v-model="item.bought" />
          <span class="shopping-text" :class="{ bought: item.bought }">{{ item.name }}</span>
        </label>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ShoppingList',
  data() {
    return {
      newItem: '',
      nextId: 4,
      items: [
        { id: 1, name: 'Marchewka', bought: false },
        { id: 2, name: 'Książka', bought: false },
        { id: 3, name: 'Prezent na urodziny cioci', bought: false }
      ]
    };
  },
  methods: {
    addItem() {
      if (!this.newItem.trim()) return;
      this.items.push({
        id: this.nextId++,
        name: this.newItem,
        bought: false
      });
      this.newItem = '';
    }
  }
};
</script>

<style scoped>
.shopping hr {
  border: none;
  border-top: 2px solid #333;
  margin-bottom: 16px;
}

.shopping-list {
  list-style: none;
  padding: 0;
}

.shopping-list li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.shopping-label {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  cursor: pointer;
}

.shopping-text {
  flex: 1;
}
</style>
