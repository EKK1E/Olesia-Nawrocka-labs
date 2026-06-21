<template>
  <section class="task">
    <h2>5.4 Galeria kart z obrazami</h2>
    <p v-if="selectedItem">Wybrano: {{ selectedItem }}</p>
    <div class="cards">
      <BaseCard v-for="item in items" :key="item.id" class="gallery-item">
        <img :src="item.image" :alt="item.title" />
        <h4>{{ item.title }}</h4>
        <p>{{ item.description }}</p>
        <button @click="showDetails(item.title)">Szczegóły</button>
      </BaseCard>
    </div>
  </section>
</template>

<script>
import BaseCard from './shared/BaseCard.vue';

export default {
  name: 'GalleryCardsTask',
  components: { BaseCard },
  data() {
    return {
      selectedItem: '',
      items: [
        {
          id: 1,
          image: 'https://picsum.photos/seed/g1/200/150',
          title: 'Góry',
          description: 'Widok na Tatry'
        },
        {
          id: 2,
          image: 'https://picsum.photos/seed/g2/200/150',
          title: 'Morze',
          description: 'Plaża nad Bałtykiem'
        },
        {
          id: 3,
          image: 'https://picsum.photos/seed/g3/200/150',
          title: 'Miasto',
          description: 'Wieczorne światła'
        }
      ]
    };
  },
  methods: {
    showDetails(title) {
      this.selectedItem = title;
    }
  }
};
</script>

<style scoped>
.gallery-item img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
}
</style>
