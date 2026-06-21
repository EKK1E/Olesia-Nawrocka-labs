<template>
  <section class="task">
    <h2>Galeria</h2>
    <p v-if="selectedItem">Wybrano: {{ selectedItem }}</p>
    <div class="cards">
      <GalleryCard
        v-for="item in items"
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :description="item.description"
        @details="showDetails(item.title)"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import GalleryCard from './GalleryCard.vue';

const selectedItem = ref('');

const items = ref([
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
]);

function showDetails(title) {
  selectedItem.value = title;
}
</script>
