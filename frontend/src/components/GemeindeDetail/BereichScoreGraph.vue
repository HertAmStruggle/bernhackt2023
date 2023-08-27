<template>
  <section class="main">
    <h5>{{ props.title }}</h5>
    <q-circular-progress
      show-value
      font-size="12px"
      :value="props.rating * 10"
      size="125px"
      :thickness="0.22"
      :color="circleColor"
      track-color="grey-3"
      class="q-ma-md"
    >
      {{ props.rating }} / 10
    </q-circular-progress>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  rating: {
    type: Number,
    default: 50,
  },
});

/**
 * Variable um die zu darstellende Farbe zu berechnen
 */
const circleColor = computed(() => {
  if (props.rating > 7) {
    return 'green-5';
  }
  if (props.rating > 4) {
    return 'orange-5';
  } else {
    return 'red-5';
  }
});
</script>

<style>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.main h5 {
  margin: 0;
}
</style>
