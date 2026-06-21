<template>
  <section class="task">
    <h2>5.6 Dynamiczne menu nawigacyjne</h2>
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

<script>
export default {
  name: 'DynamicMenuTask',
  data() {
    return {
      menuItems: [
        { title: 'Start', href: '#start', active: true },
        { title: 'O nas', href: '#about', active: false },
        { title: 'Kontakt', href: '#contact', active: false },
        { title: 'Pomoc', href: '#help', active: false }
      ]
    };
  },
  computed: {
    activeTitle() {
      const active = this.menuItems.find((item) => item.active);
      return active ? active.title : '';
    }
  },
  methods: {
    setActive(href) {
      this.menuItems.forEach((item) => {
        item.active = item.href === href;
      });
    }
  }
};
</script>
