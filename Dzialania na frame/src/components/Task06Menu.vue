<template>
  <section class="task">
    <h2>Dynamiczne menu</h2>
    <nav class="dynamic-menu">
      <a
        v-for="item in menuItems"
        :key="item.href"
        :href="item.href"
        :class="{ active: item.active }"
        @click.prevent="setActive(item.href)"
      >
        {{ item.title }}
      </a>
    </nav>
    <p>Aktywna zakładka: {{ activeTitle }}</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const menuItems = ref([
  { title: 'Start', href: '#start', active: true },
  { title: 'O nas', href: '#about', active: false },
  { title: 'Kontakt', href: '#contact', active: false },
  { title: 'Pomoc', href: '#help', active: false }
]);

const activeTitle = computed(() => {
  const active = menuItems.value.find((item) => item.active);
  return active ? active.title : '';
});

function setActive(href) {
  menuItems.value.forEach((item) => {
    item.active = item.href === href;
  });
}
</script>
