<template>
  <q-circular-progress
    show-value
    font-size="10px"
    class="q-ma-md"
    :value="props.rating"
    size="80px"
    :thickness="0.25"
    color="primary"
    track-color="grey-3"
  >
    <q-avatar size="60px" icon="compost"> </q-avatar>
  </q-circular-progress>
</template>

<script setup>

const props = defineProps({
  title: String,
  rating: Number
})

</script>
