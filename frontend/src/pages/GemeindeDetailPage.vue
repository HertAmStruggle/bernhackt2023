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
        :sector="sector"
        :municipality-data="municipalityData[0]"
      ></ThemenOverviewGraph>
    </section>

    <ChartTest
      :municipality-data="municipalityData[0]"
      :sector="sector"
    ></ChartTest>
  </div>
</template>

<script setup lang="ts">
import BereichScoreGraph from 'src/components/GemeindeDetail/BereichScoreGraph.vue';
import { useFetch } from '@vueuse/core';
import type { Municipality, Sector } from 'src/data/interfaces';
import { ref } from 'vue';
import ThemenOverviewGraph from 'src/components/GemeindeDetail/ThemenOverviewGraph.vue';
import ChartTest from 'src/components/GemeindeDetail/ChartTest.vue';
import { useRoute } from 'vue-router';

/**
 * Einer der 3 möglichen Bereiche der Daten
 */
const sector = ref<Sector>('environment');

/**
 * Variablen die für jeden Sektor den Durchschnitt darstellen (werden später berechnet)
 */
const socialSectorMean = ref(0);
const environmentSectorMean = ref(0);
const economySectorMean = ref(0);

//Data fetching

const route = useRoute()
const {
  error,
  isFetching,
  data: municipalityData,
} = await useFetch(`http://localhost:3000/municipalities?name=${route.params.id}`)
  .get()
  .json<Municipality[]>();

/**
 * Funktion um den Sektormittelwert zu berechnen
 * @param sector
 */
function calculateSectorMean(sector: Sector) {
  let sum = 0;
  let amount = 0;
  municipalityData.value?.[0].fact_indicators.forEach((indicator) => {
    if (indicator.sector === sector) {
      sum = sum + indicator.value;
      amount++;
    }
  });

  municipalityData.value?.[0].survey_indicators.forEach((indicator) => {
    if (indicator.sector === sector) {
      sum = sum + indicator.value;
      amount++;
    }
  });
  return Math.round((sum / amount) * 10) / 10;
}

//Datenzuweisung
socialSectorMean.value = calculateSectorMean('social');
environmentSectorMean.value = calculateSectorMean('environment');
economySectorMean.value = calculateSectorMean('economy');
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
