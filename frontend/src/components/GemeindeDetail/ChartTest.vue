<template>
  <Radar id="my-chart-id" :options="chartOptions" :data="chartData" />
  <p>{{ JSON.stringify(uniqueSubjects) }}</p>
</template>

<script setup lang="ts">
import { Radar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { computed, ref } from 'vue';
import { Municipality, Sector } from 'src/data/interfaces';

const props = defineProps<{
  sector: Sector;
  municipalityData: Municipality;
}>();

const uniqueSubjects = computed(() => {
  const filteredObjects = props.municipalityData.fact_indicators.filter(
    (obj) => obj.sector === props.sector
  );
  const uniqueSubjects = [
    ...new Set(filteredObjects.map((obj) => obj.subject)),
  ];
  return uniqueSubjects;
});

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement
);

const chartData = ref({
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running',
  ],
  datasets: [
    {
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
    },
  ],
});

const chartOptions = ref({
  responsive: true,
});
</script>
