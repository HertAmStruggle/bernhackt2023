<template>
  <div v-if="isFetching">...Loading</div>
  <div v-else-if="!error && municipalityData" class="main-container">
    <section class="title">
      <h2>{{ municipalityData.meta.municipalityName }}</h2>
      <q-avatar square>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/Wappen_Bern_matt.svg"
        />
      </q-avatar>
    </section>

    <section class="themen-summary">
      <BereichScoreGraph
        title="Umwelt"
        :rating="factorMeans.get('environment')"
      />
      <BereichScoreGraph title="Soziales" :rating="factorMeans.get('social')" />
      <BereichScoreGraph
        title="Wirtshaft"
        :rating="factorMeans.get('economy')"
      />
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

    <section class="themen">
      <ThemenOverviewGraph
        :bereich="bereich"
        :municipality-data="municipalityData"
        :type="type"
      ></ThemenOverviewGraph>
    </section>
  </div>
</template>

<script setup lang="ts">
import BereichScoreGraph from 'src/components/GemeindeDetail/BereichScoreGraph.vue';
import { useFetch } from '@vueuse/core';
import type { Municipality, Sector, Source } from 'src/data/interfaces';
import { computed, ref } from 'vue';
import ThemenOverviewGraph from 'src/components/GemeindeDetail/ThemenOverviewGraph.vue';

//TODO: seperate facts and survey
const bereich = ref<Sector>('environment');
const type = ref<Source>('facts');

const {
  error,
  isFetching,
  data: municipalityData,
} = await useFetch('http://localhost:3000/api/municipality')
  .get()
  .json<Municipality>();

console.log(municipalityData.value);

/**
 * This function calculates the mean for one sector
 * @param type If the data should origin from factual data or survey data
 * @param sector One of the three sectors
 */
function calculateSectorMean(source: Source, sector: Sector) {
  let sum = 0;
  let amount = 0;

  if (municipalityData.value?.[source][sector]) {
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
  return Math.round((sum / amount) * 10) / 10;
}

const factorMeans = computed(() => {
  let mapOutput = new Map<Sector, number>();
  mapOutput.set('economy', calculateSectorMean('facts', 'economy'));
  mapOutput.set('social', calculateSectorMean('facts', 'social'));
  mapOutput.set('environment', calculateSectorMean('facts', 'environment'));
  return mapOutput;
});
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

.themen {
  width: 90%;
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
