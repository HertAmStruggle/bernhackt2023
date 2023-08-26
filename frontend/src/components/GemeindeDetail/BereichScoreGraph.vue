<template>
  <section class="main">
    <h5>{{ props.title }}</h5>
    <q-circular-progress
      show-value
      font-size="12px"
      :value="props.rating * 10"
      size="75px"
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
    default: 100,
  },
});

const circleColor = computed(() => {
  if (props.rating > 7) {
    return 'positive';
  }
  if (props.rating > 4) {
    return 'warning';
  } else {
    return 'negative';
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
