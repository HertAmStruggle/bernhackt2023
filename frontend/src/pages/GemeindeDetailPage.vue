<template>
  <div class="main-container">
    <section class="title">
      <h2>Biel/Bienne</h2>
      <q-avatar square>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/Wappen_Bern_matt.svg"
        />
      </q-avatar>
    </section>

    <section class="themen-summary">
      <BereichScoreGraph title="Umwelt" :rating="50" />
    </section>

    <q-tabs v-model="bereich" class="text-teal">
      <q-tab name="umwelt" icon="compost" label="Umwelt" />
      <q-tab name="soziales" icon="groups" label="Soziales" />
      <q-tab name="wirtschaft" icon="trending_up" label="Wirtschaft" />
    </q-tabs>
  </div>

  <q-btn @click="getData()">
  asldjhadskj</q-btn>
</template>

<script setup>
import { ref } from 'vue';
import BereichScoreGraph from 'src/components/GemeindeDetail/BereichScoreGraph.vue';

const bereich = ref('umwelt');

async function getData() {
  const data = await fetch('http://localhost:3000/api/municipality')
  const json = await data.json()
  console.log(json)
}

</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.q-tab__label {
  font-size: 1.5em;
}

.q-tab__icon {
  font-size: 2em;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.title h2 {
  margin: 1rem;
}
</style>
