<template>
  <InfoCard>
    <template v-slot:header>Użytkownik</template>
    <template v-slot:body>
      <p><strong>{{ user.imie }} {{ user.nazwisko }}</strong></p>
      <p>Email: {{ user.email }}</p>
      <p>Rola: {{ user.rola }}</p>
    </template>
    <template v-slot:footer>Profil</template>
  </InfoCard>
</template>

<script>
import InfoCard from './InfoCard.vue';

export default {
  name: 'UserInfoCard',
  components: { InfoCard },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
