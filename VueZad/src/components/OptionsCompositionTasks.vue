<template>
  <div>
    <nav class="sub-nav">
      <button
        v-for="section in sections"
        :key="section.id"
        :class="{ active: subActive === section.id }"
        @click="subActive = section.id"
      >
        9.{{ section.id }} {{ section.label }}
      </button>
    </nav>
    <section v-if="subActive === 1" class="task">
      <h2>9.1 Porównanie Options API i Composition API</h2>
      <div class="compare-grid">
        <CounterOptions />
        <CounterComposition />
      </div>
    </section>
    <UserFormOptions v-if="subActive === 2" />
    <UserFormComposition v-if="subActive === 3" />
    <section v-if="subActive === 4" class="task">
      <h2>9.4 BaseCard ze zwykłym slotem</h2>
      <BaseCard>
        <h3>Witaj w Vue</h3>
        <p>To jest przykładowa treść przekazana przez zwykły slot.</p>
        <button>Przycisk w slocie</button>
      </BaseCard>
    </section>
    <section v-if="subActive === 5" class="task">
      <h2>9.5 ArticleCard z nazwanymi slotami</h2>
      <ArticleCard>
        <template v-slot:header>
          <h3>Vue 3 — nowe możliwości</h3>
        </template>
        <template v-slot:content>
          <p>Vue 3 wprowadza nowe narzędzia do budowy interfejsów.</p>
        </template>
        <template v-slot:footer>
          <p>Autor: Anna Kowalska | Data: 2026-03-16</p>
        </template>
      </ArticleCard>
    </section>
    <section v-if="subActive === 6" class="task">
      <h2>9.6 UserPanel ze slotami</h2>
      <UserPanel>
        <template v-slot:header>Profil użytkownika</template>
        <template v-slot:user-data>
          <p><strong>Jan Nowak</strong></p>
          <p>Email: jan@example.com</p>
          <p>Rola: Student</p>
        </template>
        <template v-slot:actions>
          <button>Edytuj</button>
          <button>Usuń</button>
        </template>
      </UserPanel>
    </section>
    <section v-if="subActive === 7" class="task">
      <h2>9.7 Przepisanie Options API na Composition API</h2>
      <div class="compare-grid">
        <ProductListOptions />
        <ProductListComposition />
      </div>
    </section>
    <section v-if="subActive === 8" class="task">
      <h2>9.8 Modal ze slotami</h2>
      <button @click="showModal = true">Otwórz modal</button>
      <Modal :show="showModal" @close="showModal = false">
        <template v-slot:title>Edycja danych</template>
        <template v-slot:body>
          <p>Tutaj możesz edytować dane użytkownika lub produktu.</p>
        </template>
        <template v-slot:actions>
          <button @click="showModal = false">Zamknij</button>
          <button @click="saveModal">Zapisz</button>
        </template>
      </Modal>
      <p v-if="savedMessage" class="success">{{ savedMessage }}</p>
    </section>
    <section v-if="subActive === 9" class="task">
      <h2>9.9 System kart informacyjnych</h2>
      <div class="compare-grid">
        <UserInfoCard :user="demoUser" />
        <ProductInfoCard :product="demoProduct" />
      </div>
    </section>
  </div>
</template>

<script>
import CounterOptions from './options/CounterOptions.vue';
import CounterComposition from './options/CounterComposition.vue';
import UserFormOptions from './options/UserFormOptions.vue';
import UserFormComposition from './options/UserFormComposition.vue';
import BaseCard from './shared/BaseCard.vue';
import ArticleCard from './options/ArticleCard.vue';
import UserPanel from './options/UserPanel.vue';
import ProductListOptions from './options/ProductListOptions.vue';
import ProductListComposition from './options/ProductListComposition.vue';
import Modal from './shared/Modal.vue';
import UserInfoCard from './options/UserInfoCard.vue';
import ProductInfoCard from './options/ProductInfoCard.vue';

export default {
  name: 'OptionsCompositionTasks',
  components: {
    CounterOptions,
    CounterComposition,
    UserFormOptions,
    UserFormComposition,
    BaseCard,
    ArticleCard,
    UserPanel,
    ProductListOptions,
    ProductListComposition,
    Modal,
    UserInfoCard,
    ProductInfoCard
  },
  data() {
    return {
      subActive: 1,
      showModal: false,
      savedMessage: '',
      sections: [
        { id: 1, label: 'Counter API' },
        { id: 2, label: 'Form Options' },
        { id: 3, label: 'Form Composition' },
        { id: 4, label: 'Basic Slot' },
        { id: 5, label: 'Named Slots' },
        { id: 6, label: 'User Panel' },
        { id: 7, label: 'Rewrite API' },
        { id: 8, label: 'Modal Slots' },
        { id: 9, label: 'Info Cards' }
      ],
      demoUser: {
        imie: 'Anna',
        nazwisko: 'Kowalska',
        email: 'anna@example.com',
        rola: 'Student'
      },
      demoProduct: {
        nazwa: 'Laptop',
        cena: 3500,
        opis: 'Szybki komputer do nauki',
        kategoria: 'Elektronika'
      }
    };
  },
  methods: {
    saveModal() {
      this.savedMessage = 'Dane zostały zapisane!';
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.success {
  margin-top: 12px;
  color: #15803d;
}
</style>
