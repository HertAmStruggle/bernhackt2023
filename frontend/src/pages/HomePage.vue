<template>
  <q-page>
    <q-img
      class="banner"
      src="https://placehold.co/1920x240"
      alt="Character Image"
    />

    <h1> SwissCityStats </h1>
    <div class="text-body1">
      Erkunde Schweizer Gemeinden mit datenbasierten Einblicken:
      Tauche ein in die Essenz der urbanen und ländlichen Zentren der Schweiz.
      Unsere Plattform präsentiert ein vielfältiges Spektrum an Daten, das für jede Gemeinde sorgfältig visualisiert wird.
      Ganz gleich, ob du Forscher, Gemeindebegeisterter oder einfach neugierig bist – unsere Tools ermöglichen es dir, Demografie, Wirtschaft und vieles mehr miteinander zu vergleichen.
      Entdecke gemeinsam mit uns die Geschichten, die das Gemeindebild der Schweiz zeichnen.
    </div>
    <q-form class="searchbar">
      <q-select
        @keydown.enter="searchForCity()"
        :loading="loadingFlag"
        type="text"
        v-model="citySearch"
        input-debounce="500"
        label="Search for a City"
        filled
        lazy-rules
        use-input
        hide-selected
        fill-input
        :options="filteredCities"
      />
    </q-form>

    <div class="kachelContainer">
      <q-card class="my-card">
        <router-link to="/gemeinden">
          <q-img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Switzerland%2C_administrative_divisions_-_de_-_colored.svg">
            <div class="absolute-bottom text-subtitle2 text-center">
              Alle Gemeinden
            </div>
          </q-img>
        </router-link>
      </q-card>

      <q-card class="my-card">
        <router-link to="/umfrage">
          <q-img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Switzerland%2C_administrative_divisions_-_de_-_colored.svg">
            <div class="absolute-bottom text-subtitle2 text-center">
              Umfrage
            </div>
          </q-img>
        </router-link>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const loadingFlag = ref(false);
const citySearch = ref('');

const cities = [
  {
    label: 'Biu',
    county: 'Bern'
  },
  {
    label: 'Bärn',
    county: 'Bern'
  },
  {
    label: 'Züri',
    county: 'Zürich'
  },
  {
    label: 'Gänf',
    county: 'Genf'
  },
  {
    label: 'Basu',
    county: 'Basel-Stadt'
  },
]

const filteredCities = computed(() => {
  return cities.filter((city) =>
    city
      .label?.toLowerCase()
      .includes(citySearch.value.toLowerCase())
  );
});

async function searchForCity() {
  await router.push(`/gemeinde/${citySearch.value}`);
}
</script>

<style>
h1 {
  margin: 1.5rem;
  font-size: 4rem;
  text-align: center;
}

.text-body1 {
  text-align: center;
}

.my-card {
  width: 30%;
}

.kachelContainer {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.searchbar {
  margin-top: 2rem;
  margin-bottom: 3rem
}
</style>
