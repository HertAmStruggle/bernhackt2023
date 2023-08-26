<template>
  <div v-if="bereich === 'economy'">
    <div v-for="(thema, index) in municipalityData[type][bereich]" :key="index">
      <div v-for="(indicator, index) in thema" :key="index">
        <p>{{ indicator.name }}</p>
        <q-linear-progress
          v-if="indicator.value !== undefined"
          size="30px"
          :value="indicator.value / 10"
          color="primary"
          class="q-mt-sm"
          rounded
        >
          <div class="absolute-full flex flex-center">
            <q-badge
              color="white"
              text-color="black"
              :label="`${indicator.value} / 10`"
            />
          </div>
        </q-linear-progress>
      </div>
    </div>
  </div>
  <div v-if="bereich === 'social'">
    <div v-for="(thema, index) in municipalityData[type][bereich]" :key="index">
      <div v-for="(indicator, index) in thema" :key="index">
        <p>{{ indicator.name }}</p>
        <q-linear-progress
          v-if="indicator.value !== undefined"
          size="30px"
          :value="indicator.value / 10"
          color="primary"
          class="q-mt-sm"
          rounded
        >
          <div class="absolute-full flex flex-center">
            <q-badge
              color="white"
              text-color="black"
              :label="`${indicator.value} / 10`"
            />
          </div>
        </q-linear-progress>
      </div>
    </div>
  </div>
  <div v-if="bereich === 'environment'">
    <div v-for="(thema, index) in municipalityData[type][bereich]" :key="index">
      <div v-for="(indicator, index) in thema" :key="index">
        <p>{{ indicator.name }}</p>
        <q-linear-progress
          v-if="indicator.value !== undefined"
          size="30px"
          :value="indicator.value / 10"
          color="primary"
          class="q-mt-sm"
          rounded
        >
          <div class="absolute-full flex flex-center">
            <q-badge
              color="white"
              text-color="black"
              :label="`${indicator.value} / 10`"
            />
          </div>
        </q-linear-progress>
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

<style>
p {
  margin-bottom: 0;
  margin-top: 1rem;
}
</style>
