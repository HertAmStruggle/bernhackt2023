<template>
  <div>
    <div
      v-for="(indicator, index) in props.municipalityData['survey_indicators']"
      :key="indicator.name"
    >
      <div
        v-if="
          factIndicators[index]?.sector === props.sector &&
          factIndicators[index]
        "
      >
        <p>{{ factIndicators[index].name }}</p>
        <q-linear-progress
          v-if="factIndicators[index].value !== undefined"
          size="30px"
          :value="factIndicators[index].value / 10"
          :color="getColor(factIndicators[index].value)"
          class="q-mt-sm"
          rounded
        >
          <div class="absolute-full flex flex-center">
            <q-badge
              color="white"
              text-color="black"
              :label="`Daten-Analyse ${factIndicators[index].value} / 10`"
            />
          </div>
        </q-linear-progress>
      </div>

      <div
        v-if="
          surveyIndicators[index]?.sector === props.sector &&
          surveyIndicators[index]
        "
      >
        <q-linear-progress
          v-if="surveyIndicators[index].value !== undefined"
          size="30px"
          :value="surveyIndicators[index].value / 10"
          :color="getColor(surveyIndicators[index].value)"
          class="q-mt-sm"
          rounded
        >
          <div class="absolute-full flex flex-center">
            <q-badge
              color="white"
              text-color="black"
              :label="`Umfragedaten ${surveyIndicators[index].value} / 10`"
            />
          </div>
        </q-linear-progress>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Municipality, Sector } from 'src/data/interfaces';

const props = defineProps<{
  sector: Sector;
  municipalityData: Municipality;
}>();

function getColor(input: number) {
  if (input > 7) {
    return 'green-5';
  }
  if (input > 4) {
    return 'orange-5';
  } else {
    return 'red-5';
  }
}

const factIndicators = props.municipalityData.fact_indicators;
const surveyIndicators = props.municipalityData.survey_indicators;
</script>

<style>
p {
  margin-bottom: 0;
  margin-top: 1rem;
}
</style>
