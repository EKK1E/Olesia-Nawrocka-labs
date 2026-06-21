<template>
  <div>
    <nav class="sub-nav">
      <button
        v-for="task in tasks"
        :key="task.id"
        :class="{ active: activeTask === task.id }"
        @click="activeTask = task.id"
      >
        {{ task.id }}. {{ task.label }}
      </button>
    </nav>

    <StudentListTask v-if="activeTask === 1" />
    <ProductCardsTask v-if="activeTask === 2" />
    <TodoFilterTask v-if="activeTask === 3" />
    <GalleryCardsTask v-if="activeTask === 4" />
    <LoginPanelTask v-if="activeTask === 5" />
    <DynamicMenuTask v-if="activeTask === 6" />
    <DashboardStatsTask v-if="activeTask === 7" />
    <ProductSearchTask v-if="activeTask === 8" />
    <ModalFormTask v-if="activeTask === 9" />
    <ClassManagementTask v-if="activeTask === 10" />
  </div>
</template>

<script>
import StudentListTask from './StudentListTask.vue';
import ProductCardsTask from './ProductCardsTask.vue';
import TodoFilterTask from './TodoFilterTask.vue';
import GalleryCardsTask from './GalleryCardsTask.vue';
import LoginPanelTask from './LoginPanelTask.vue';
import DynamicMenuTask from './DynamicMenuTask.vue';
import DashboardStatsTask from './DashboardStatsTask.vue';
import ProductSearchTask from './ProductSearchTask.vue';
import ModalFormTask from './ModalFormTask.vue';
import ClassManagementTask from './ClassManagementTask.vue';

export default {
  name: 'ComponentsHub',
  components: {
    StudentListTask,
    ProductCardsTask,
    TodoFilterTask,
    GalleryCardsTask,
    LoginPanelTask,
    DynamicMenuTask,
    DashboardStatsTask,
    ProductSearchTask,
    ModalFormTask,
    ClassManagementTask
  },
  data() {
    return {
      activeTask: 1,
      tasks: [
        { id: 1, label: 'Lista uczniów' },
        { id: 2, label: 'Karty produktów' },
        { id: 3, label: 'ToDo filtry' },
        { id: 4, label: 'Galeria kart' },
        { id: 5, label: 'Panel logowania' },
        { id: 6, label: 'Dynamiczne menu' },
        { id: 7, label: 'Dashboard statystyk' },
        { id: 8, label: 'Wyszukiwarka' },
        { id: 9, label: 'Modal z formularzem' },
        { id: 10, label: 'Zarządzanie klasą' }
      ]
    };
  }
};
</script>
