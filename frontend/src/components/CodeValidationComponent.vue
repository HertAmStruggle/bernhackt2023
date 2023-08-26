<script setup>
import {ref} from 'vue';

const valid = 'quasar'
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
    Hast du bereits einen Code?
    <q-input
      class="q-mt-md"
      filled
      type="text"
      v-model="code"
      label="Code *"
      lazy-rules
      :rules="[ val => val && val.length === 6 || 'Geben Sie einen 6-stelligen Code ein ']"
    />

    <div>
      <q-btn label="Überprüfen" type="submit" color="primary"/>
    </div>
  </q-form>
</template>
