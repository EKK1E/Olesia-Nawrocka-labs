<template>
  <section class="task">
    <h2>Galeria użytkowników</h2>
    <div class="cards">
      <div v-for="user in visibleUsers" :key="user.id" class="card user-gallery-card">
        <img :src="user.image" :alt="user.nickname" />
        <h4>{{ user.nickname }}</h4>
        <p>Wiek: {{ user.age }} lat</p>
      </div>
    </div>
    <button v-if="hasMore" @click="showMore">Pokaż więcej</button>
    <p v-else class="hint">Wyświetlono wszystkich użytkowników.</p>
  </section>
</template>

<script>
export default {
  name: 'ImageUsersTask',
  data() {
    return {
      visibleCount: 3,
      perPage: 2,
      allUsers: [
        { id: 1, image: 'https://picsum.photos/seed/u1/200/200', nickname: 'Anna_22', age: 22 },
        { id: 2, image: 'https://picsum.photos/seed/u2/200/200', nickname: 'PiotrDev', age: 25 },
        { id: 3, image: 'https://picsum.photos/seed/u3/200/200', nickname: 'EwaVue', age: 21 },
        { id: 4, image: 'https://picsum.photos/seed/u4/200/200', nickname: 'JanKod', age: 19 },
        { id: 5, image: 'https://picsum.photos/seed/u5/200/200', nickname: 'MariaIT', age: 23 },
        { id: 6, image: 'https://picsum.photos/seed/u6/200/200', nickname: 'TomekJS', age: 27 }
      ]
    };
  },
  computed: {
    visibleUsers() {
      return this.allUsers.slice(0, this.visibleCount);
    },
    hasMore() {
      return this.visibleCount < this.allUsers.length;
    }
  },
  methods: {
    showMore() {
      this.visibleCount = Math.min(this.visibleCount + this.perPage, this.allUsers.length);
    }
  }
};
</script>

<style scoped>
.user-gallery-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
