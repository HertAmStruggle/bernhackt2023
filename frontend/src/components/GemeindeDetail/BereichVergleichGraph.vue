<script setup lang="ts">
import {Bar} from 'vue-chartjs'

const options = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      suggestedMax: 10,
      beginAtZero: true,
    }
  }
}

const props = defineProps({
  umweltFact: {
    type: Number,
    default: 5,
  },
  umweltSurvey: {
    type: Number,
    default: 5,
  },
  sozialesFact: {
    type: Number,
    default: 5,
  },
  sozialesSurvey: {
    type: Number,
    default: 5,
  },
  wirtschaftFact: {
    type: Number,
    default: 5,
  },
  wirtschaftSurvey: {
    type: Number,
    default: 5,
  },
});

const data = {
  labels: [
    'Umwelt',
    'Soziales',
    'Wirtschaft',
  ],
  datasets: [
    {
      label: 'Daten-Analyse',
      backgroundColor: '#f87979',
      data: [props.umweltFact, props.sozialesFact, props.wirtschaftFact],
      borderRadius: 5,
    },
    {
      label: 'Umfragedaten',
      backgroundColor: '#79daf8',
      data: [props.umweltSurvey, props.sozialesSurvey, props.wirtschaftSurvey],
      borderRadius: 5
    }
  ]
}

</script>

<template>
  <section class="main">
    <h5>Datenvergleich</h5>
    <Bar :data="data" :options="options" />
  </section>
</template>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.main h5 {
  margin: 0;
}
</style>
