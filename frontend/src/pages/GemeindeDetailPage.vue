<template>
  <div v-if="isFetching">...Loading</div>
  <div v-else-if="!error && municipalityData?.[0]" class="main-container">
    <section class="title">
      <h2>{{ municipalityData[0].name }}</h2>
      <q-avatar square>
        <img :src="getFlagLink(municipalityData[0].canton)" alt="Kantonsflagge"/>
      </q-avatar>
    </section>

    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="black"
      navigation
      padding
      arrows
      style="width: 100%; border: solid #26a69a 1px"
      height="300px"
      class="bg-white text-black rounded-borders"
    >
      <q-carousel-slide name="circles" class="column no-wrap flex-center">
        <section class="themen-summary">
          <BereichScoreGraph title="Umwelt" :rating="environmentSectorMean"/>
          <BereichScoreGraph title="Soziales" :rating="socialSectorMean"/>
          <BereichScoreGraph title="Wirtschaft" :rating="economySectorMean"/>
        </section>
      </q-carousel-slide>

      <q-carousel-slide name="bars" class="column no-wrap flex-center">
        <section class="themen-vergleich" style="width">
          <BereichVergleichGraph
            :umweltFact="environmentFactMean" :umweltSurvey="environmentSurveyMean"
            :sozialesFact="socialFactMean" :sozialesSurvey="socialSurveyMean"
            :wirtschaftFact="economyFactMean" :wirtschaftSurvey="economySurveyMean"
            style="width: 100%"
          />
        </section>
      </q-carousel-slide>
    </q-carousel>

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

    <section style="width: 50%;">
      <SpiderChart
        :municipality-data="municipalityData[0]"
        :sector="sector"
      ></SpiderChart>
    </section>

    <section class="themen">
      <ThemenOverviewGraph
        :sector="sector"
        :municipality-data="municipalityData[0]"
      ></ThemenOverviewGraph>
    </section>
  </div>
  <div v-else>...Something went wrong while fetching</div>
</template>

<script setup lang="ts">
import BereichScoreGraph from 'src/components/GemeindeDetail/BereichScoreGraph.vue';
import {useFetch} from '@vueuse/core';
import type {Municipality, Sector} from 'src/data/interfaces';
import {computed, ref, watch} from 'vue';
import ThemenOverviewGraph from 'src/components/GemeindeDetail/ThemenOverviewGraph.vue';
import SpiderChart from 'src/components/GemeindeDetail/SpiderChart.vue';
import {useRoute} from 'vue-router';
import {getFlagLink} from 'src/data/functions';
import BereichVergleichGraph from 'components/GemeindeDetail/BereichVergleichGraph.vue';


const slide = ref('circles');

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

/**
 * Variablen die für jeden Sektor abhängig von der Datenquelle den Durchschnitt darstellen
 */
const socialFactMean = ref(0);
const environmentFactMean = ref(0);
const economyFactMean = ref(0);
const socialSurveyMean = ref(0);
const environmentSurveyMean = ref(0);
const economySurveyMean = ref(0);

//Data fetching
const route = useRoute();
const apiURL = computed(() => {
  return `http://localhost:3000/municipalities?name=${route.params.id}`;
});
const {
  execute,
  error,
  isFetching,
  data: municipalityData,
} = await useFetch(apiURL).get().json<Municipality[]>();

async function getData() {
  await execute();

  if (!error.value && municipalityData.value?.[0]) {
    //Datenzuweisung
    socialSectorMean.value = calculateSectorMean('social');
    environmentSectorMean.value = calculateSectorMean('environment');
    economySectorMean.value = calculateSectorMean('economy');

    socialFactMean.value = calcSectorTypeMean('social', 'fact');
    environmentFactMean.value = calcSectorTypeMean('environment', 'fact');
    economyFactMean.value = calcSectorTypeMean('economy', 'fact');
    socialSurveyMean.value = calcSectorTypeMean('social', 'survey');
    environmentSurveyMean.value = calcSectorTypeMean('environment', 'survey');
    economySurveyMean.value = calcSectorTypeMean('economy', 'survey');

  }
}

watch(
  apiURL,
  () => {
    getData();
  },
  {immediate: true}
);

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

function calcSectorTypeMean(sector: Sector, type: string) {
  let sum = 0;
  let amount = 0;

  if (type == 'fact') {
    municipalityData.value?.[0].fact_indicators.forEach((indicator) => {
      if (indicator.sector === sector) {
        sum = sum + indicator.value;
        amount++;
      }
    });
  } else if (type == 'survey') {
    municipalityData.value?.[0].survey_indicators.forEach((indicator) => {
      if (indicator.sector === sector) {
        sum = sum + indicator.value;
        amount++;
      }
    });
  }
  return Math.round((sum / amount) * 10) / 10;
}
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
