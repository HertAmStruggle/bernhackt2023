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
      <BereichScoreGraph title="Umwelt" :rating="7" />
      <BereichScoreGraph title="Soziales" :rating="4" />
      <BereichScoreGraph title="Wirtshaft" :rating="9" />
    </section>

    <section class="tabs">
      <q-tabs v-model="bereich" class="text-teal" align="justify">
      <q-tab name="umwelt" icon="compost" label="Umwelt" />
      <q-tab name="soziales" icon="groups" label="Soziales" />
      <q-tab name="wirtschaft" icon="trending_up" label="Wirtschaft" />
    </q-tabs>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BereichScoreGraph from 'src/components/GemeindeDetail/BereichScoreGraph.vue';

const bereich = ref('umwelt');
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.themen-summary {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
  width: 100%;
}

.title h2 {
  margin: 1rem;
}
</style>
