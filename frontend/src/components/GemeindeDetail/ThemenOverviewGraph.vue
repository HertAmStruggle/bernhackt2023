<template>
  <div>
    <div
      v-for="indicator in props.municipalityData[source]"
      :key="indicator.name"
    >
      <div v-if="indicator.sector === props.sector">
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

const props = defineProps<{
  source: Source;
  sector: Sector;
  municipalityData: Municipality;
}>();
</script>

<style>
p {
  margin-bottom: 0;
  margin-top: 1rem;
}
</style>
