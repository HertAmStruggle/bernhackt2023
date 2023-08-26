<script setup>
import {ref} from 'vue';

const valid = 'bärnhäckt'
let code = ref(null)
const emit = defineEmits(['validatedCode'])

function onSubmit() {
  if (code.value === valid) {
    emit('validatedCode')
  }
}

function onReset() {
  code.value = null
}
</script>

<template>
  <q-form
    class="q-gutter-md"
    @submit="onSubmit"
    @reset="onReset"
  >
    Hast du bereits einen Code? (Tipp für Hackathon 'bärnhäckt')
    <q-input
      class="q-mt-lg"
      filled
      type="text"
      v-model="code"
      label="Code *"
      lazy-rules
      :rules="[ val => val && val.length === 9 || 'Geben Sie einen 6-stelligen Code ein ']"
    />

    <div>
      <q-btn label="Überprüfen" type="submit" color="primary"/>
    </div>
  </q-form>
</template>
