<template>
  <Radar id="my-chart-id" :options="chartOptions" :data="chartData" />
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

const factData = computed(() => {
  const filteredObjects = props.municipalityData.fact_indicators.filter(
    (obj) => obj.sector === props.sector
  );

  const aggregatedValues = filteredObjects.reduce((acc, curr) => {
    const { subject, value } = curr;

    if (!acc[subject]) {
      acc[subject] = { sum: 0, count: 0 };
    }

    acc[subject].sum += value;
    acc[subject].count += 1;

    return acc;
  }, {} as { [subject: string]: { sum: number; count: number } });

  const roundedObjects = Object.entries(aggregatedValues).map(([subject, { sum, count }]) => {
    const meanValue = count !== 0 ? sum / count : 0;

    return { subject, value: meanValue };
  });

  return roundedObjects.map(obj => obj.value);
});

const surveyData = computed(() => {
  const filteredObjects = props.municipalityData.survey_indicators.filter(
    (obj) => obj.sector === props.sector
  );

  const aggregatedValues = filteredObjects.reduce((acc, curr) => {
    const { subject, value } = curr;

    if (!acc[subject]) {
      acc[subject] = { sum: 0, count: 0 };
    }

    acc[subject].sum += value;
    acc[subject].count += 1;

    return acc;
  }, {} as { [subject: string]: { sum: number; count: number } });

  const roundedObjects = Object.entries(aggregatedValues).map(([subject, { sum, count }]) => {
    const meanValue = count !== 0 ? sum / count : 0;

    return { subject, value: meanValue };
  });
  console.log(roundedObjects)
  return roundedObjects.map(obj => obj.value);
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

const chartData = computed(() => {
  return {
    labels: uniqueSubjects.value,
    datasets: [
      {
        label: 'Fact Data',
        data: factData.value,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Survey Data',
        data: surveyData.value,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
      },
    ],
  };
});

const chartOptions = ref({
  responsive: true,
});
</script>
