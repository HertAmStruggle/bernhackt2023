<template>
  <div v-if="bereich === 'economy'">
    <div v-for="(thema, index) in municipalityData[type][bereich]" :key="index">
      <div v-for="(indicator, index) in thema" :key="index">
        <p>{{ indicator.name }}</p>
        <q-linear-progress
          v-if="indicator.value !== undefined"
          rounded
          size="15px"
          :value="indicator.value / 10"
          color="secondary"
          class="q-mt-sm"
        />
      </div>
    </div>
  </div>
  <div v-else-if="bereich === 'social'">
    <div v-for="(thema, index) in municipalityData[type].social" :key="index">
      <div v-for="(indicator, index) in thema" :key="index">
        <p>{{ indicator.name }}</p>
        <q-linear-progress
          v-if="indicator.value !== undefined"
          rounded
          size="15px"
          :value="indicator.value / 10"
          color="secondary"
          class="q-mt-sm"
        />
      </div>
    </div>
  </div>
  <div v-else-if="bereich === 'environment'">
    <div
      v-for="(thema, index) in municipalityData[type].environment"
      :key="index"
    >
      <div v-for="(indicator, index) in thema" :key="index">
        <p>{{ indicator.name }}</p>
        <q-linear-progress
          v-if="indicator.value !== undefined"
          rounded
          size="15px"
          :value="indicator.value / 10"
          color="secondary"
          class="q-mt-sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Municipality, Sector, Source } from 'src/data/interfaces';

defineProps<{
  bereich: Sector;
  municipalityData: Municipality;
  type: Source;
}>();
</script>
