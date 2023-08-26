<template>
  <div v-if="isFetching">...Loading</div>
  <div v-else class="main-container">
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
      <q-btn-toggle
        v-model="bereich"
        spread
        class="custom-toggle"
        no-caps
        rounded
        elevated
        toggle-color="primary"
        color="white"
        text-color="primary"
        :options="[
          { label: 'Umwelt', value: 'environment' },
          { label: 'Soziales', value: 'social' },
          { label: 'Wirtshaft', value: 'economy' },
        ]"
      />
    </section>
    {{ JSON.stringify(municipalityData) }}
  </div>
</template>

<script setup lang="ts">
import BereichScoreGraph from 'src/components/GemeindeDetail/BereichScoreGraph.vue';
import { useFetch } from '@vueuse/core';
import type { Municipality } from 'src/data/interfaces';
import { ref } from 'vue';

//TODO: seperate facts and survey
const bereich = ref('environment');

const { isFetching, data: municipalityData } = await useFetch(
  'http://localhost:3000/api/municipality'
)
  .get()
  .json<Municipality>();

function calculateSectorMean(
  type: 'facts' | 'survey',
  sector: 'economy' | 'social' | 'environment'
) {
  let sum = 0;
  let amount = 0;

  if (municipalityData.value?.[type][sector]) {
    console.log(municipalityData.value?.facts[sector]);
    for (const subjects of Object.values(
      municipalityData.value?.facts[sector]
    )) {
      for (const indicator of subjects) {
        if (indicator.value !== undefined) {
          console.log(indicator);
          amount++;
          sum += indicator.value;
        }
      }
    }
  }
  console.log(`sum: ${sum}`);
  console.log(`amount: ${amount}`);
  return sum / amount;
}
console.log(calculateSectorMean('facts', 'economy'));
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
  gap: 2rem;
  width: 100%;
}

.tabs {
  width: 100%;
}

.title h2 {
  margin: 1rem;
}

.custom-toggle {
  border: 1px solid #027be3;
}
</style>
