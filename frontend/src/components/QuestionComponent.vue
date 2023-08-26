<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps(['question'])

let answer = ref(null)

function checkCompleteness() {
  return answer.value !== null && answer.value >= 0
}

function passValue() {
  if (checkCompleteness()) console.log("done")
}

</script>

<template>
  <q-card-section class='text-body1 q-mt-lg'>
    {{ props.question }}
    <q-badge class='text-subtitle1 float-right' color='secondary'>
      {{ answer }}
    </q-badge>
    <q-slider
      v-model='answer'
      label
      :min='0'
      :max='10'
      @submit="passValue"/>
  </q-card-section>
</template>
