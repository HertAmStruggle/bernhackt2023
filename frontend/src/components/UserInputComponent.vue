<script setup lang="ts">
import {ref} from 'vue'

const name = ref(null)
const email = ref(null)

function onReset() {
  name.value = null
  email.value = null
}
</script>

<template>
  <q-form
    class="q-gutter-md"
    @reset="onReset"
  >
    Schreibe dich ein und erhalte deinen Code
    <q-input
      class="q-mt-xl"
      filled
      type="text"
      v-model="name"
      label="Vor- und Nachname *"
      :rules="[ val => val && val.length > 0 || 'Bitte geben Sie Ihren Vor- und Nachnamen ein ']"
    />

    <q-input
      filled
      type="text"
      v-model="email"
      label="E-mail-Adresse *"
      lazy-rules
      :rules="[
          val => val !== null && val !== '' || 'Bitte geben Sie Ihre E-Mail-Adresse an.',
        ]"
    />

    <div>
      <q-btn label="Absenden" color="primary"/>
      <q-btn label="Zurücksetzen" type="reset" color="primary" flat class="q-ml-sm"/>
    </div>
  </q-form>
</template>
