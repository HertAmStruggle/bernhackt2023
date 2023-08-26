<template>
  <h1>Gemeinden</h1>
  <div class="search">
    <q-form style="margin-bottom: 2rem">
      <q-input
        :loading="isFetching"
        type="text"
        v-model="citySearch"
        label="Suchen sie nach einer Stadt oder Kanton"
        filled
        lazy-rules
        debounce="300"
      />
    </q-form>
  </div>

  <div class="cities">
    <div v-for="city in data" :key="city.name">
      <router-link :to="'/gemeinden/' + city.name">
        <q-card style="padding: 10px; text-align: center">
          <q-item>
            <q-item-section avatar>
              <q-img
                style="width: 40px; object-fit: cover"
                :src="getFlagLink(city.canton)"
              />
            </q-item-section>

            <q-item-section>
              <div class="text-h2">
                {{ city.name }}
              </div>
            </q-item-section>
          </q-item>
        </q-card>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { getFlagLink } from 'src/data/functions';
import { computed, ref, watch } from 'vue';
import type { Municipality } from 'src/data/interfaces';

const citySearch = ref('');

const apiURL = computed(() => {
  return `http://localhost:3000/municipalities?q=${citySearch.value}&_limit=150`
})

const {execute, isFetching, data} = await useFetch(apiURL).json<Municipality[]>();

watch(citySearch, async () => {
  await execute()
})

</script>
<style>
.cities {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

a {
  text-decoration: none;
}
</style>
