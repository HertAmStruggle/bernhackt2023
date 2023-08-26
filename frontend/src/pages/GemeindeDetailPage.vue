<template>
  <div v-if="isFetching">...Loading</div>
  <div v-else-if="!error && municipalityData?.[0]" class="main-container">
    <section class="title">
      <h2>{{ municipalityData[0].name }}</h2>
      <q-avatar square>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/Wappen_Bern_matt.svg"
        />
      </q-avatar>
    </section>

    <section class="themen-summary">
      <BereichScoreGraph title="Umwelt" :rating="environmentSectorMean" />
      <BereichScoreGraph title="Soziales" :rating="socialSectorMean" />
      <BereichScoreGraph title="Wirtschaft" :rating="economySectorMean" />
    </section>

    <q-toggle
      :label="source"
      color="primary"
      false-value="fact_indicators"
      true-value="survey_indicators"
      v-model="source"
      right-label
      size="md"
    />

    <section class="tabs">
      <q-btn-toggle
        v-model="sector"
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
          { label: 'Wirtschaft', value: 'economy' },
        ]"
      />
    </section>

    <section class="checkboxes"></section>

    <section class="themen">
      <ThemenOverviewGraph
        :source="source"
        :sector="sector"
        :municipality-data="municipalityData[0]"
      ></ThemenOverviewGraph>
    </section>
  </div>
</template>

<script setup lang="ts">
import BereichScoreGraph from 'src/components/GemeindeDetail/BereichScoreGraph.vue';
import { useFetch } from '@vueuse/core';
import type { Municipality, Sector, Source } from 'src/data/interfaces';
import { ref, watch } from 'vue';
import ThemenOverviewGraph from 'src/components/GemeindeDetail/ThemenOverviewGraph.vue';

const sector = ref<Sector>('environment');
const source = ref<Source>('fact_indicators');

const socialSectorMean = ref(0);
const environmentSectorMean = ref(0);
const economySectorMean = ref(0);

const {
  error,
  isFetching,
  data: municipalityData,
} = await useFetch('http://localhost:3000/municipalities')
  .get()
  .json<Municipality[]>();

function calculateSectorMean(sector: Sector, source: Source) {
  let sum = 0;
  let amount = 0;

  //TODO: fix
  console.log(municipalityData.value?.[0][source]);
  municipalityData.value?.[0][source].forEach((indicator) => {
    if (indicator.sector === sector) {
      sum = sum + indicator.value;
      amount++;
    }
  });

  console.log(`sum: ${sum}`);
  console.log(`amount: ${amount}`);
  return Math.round((sum / amount) * 10) / 10;
}

watch(
  source,
  (newSource) => {
    socialSectorMean.value = calculateSectorMean('social', newSource);
    environmentSectorMean.value = calculateSectorMean('environment', newSource);
    economySectorMean.value = calculateSectorMean('economy', newSource);
  },
  { immediate: true }
);
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
