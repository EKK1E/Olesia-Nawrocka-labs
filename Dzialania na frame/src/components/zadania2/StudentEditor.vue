<template>
  <form class="form" @submit.prevent="save">
    <input v-model="localStudent.imie" placeholder="Imię" />
    <input v-model="localStudent.nazwisko" placeholder="Nazwisko" />
    <input v-model="localStudent.grupa" placeholder="Grupa" />
    <button type="submit">Zapisz</button>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  student: Object
});

const emit = defineEmits(['save-student']);

const localStudent = ref({ ...props.student });

watch(
  () => props.student,
  (value) => {
    localStudent.value = { ...value };
  },
  { deep: true }
);

function save() {
  emit('save-student', { ...localStudent.value });
}
</script>
