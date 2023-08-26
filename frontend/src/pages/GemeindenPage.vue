<template>
  <h1>Gemeinde Seite</h1>
  <div class="search">
    <q-form style="margin-bottom: 2rem">
      <q-input
        :loading="loadingFlag"
        type="text"
        v-model="citySearch"
        label="Search for a City"
        filled
        lazy-rules
      />
    </q-form>
  </div>

  <div class="cities">
    <div v-for="city in filteredCities" :key="city.name">
      <router-link :to="'/gemeinden/' + city.name + city.county">
        <q-card style="padding: 10px; text-align: center">
          <q-item>
            <q-item-section avatar>
              <q-img
                style="width: 40px; object-fit: cover"
                :src="getFlagLink(city.county)"
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

<script setup>
import { computed, ref } from 'vue';

const loadingFlag = ref(false);
const citySearch = ref('');

function getFlagLink(county) {
  switch (county) {
    case 'Aargau':
      return 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Wappen_Aargau_matt.svg';
    case 'Appenzell Ausserrhoden':
      return 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Wappen_Appenzell_Ausserrhoden_matt.svg';
    case 'Appenzell Innerrhoden':
      return 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Wappen_Appenzell_Innerrhoden_matt.svg';
    case 'Basel-Landschaft':
      return 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Coat_of_arms_of_Kanton_Basel-Landschaft.svg';
    case 'Basel-Stadt':
      return 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Wappen_Basel-Stadt_matt.svg';
    case 'Bern':
      return 'https://upload.wikimedia.org/wikipedia/commons/4/47/Wappen_Bern_matt.svg';
    case 'Freiburg':
      return 'https://upload.wikimedia.org/wikipedia/commons/0/01/Wappen_Freiburg_matt.svg';
    case 'Genf':
      return 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Wappen_Genf_matt.svg';
    case 'Glarus':
      return 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Wappen_Glarus_matt.svg';
    case 'Graubünden':
      return 'https://upload.wikimedia.org/wikipedia/commons/c/c3/CHE_Graub%C3%BCnden_COA.svg';
    case 'Jura':
      return 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Wappen_Jura_matt.svg';
    case 'Luzern':
      return 'https://upload.wikimedia.org/wikipedia/commons/6/66/Wappen_Luzern_matt.svg';
    case 'Neuenburg':
      return 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Wappen_Neuenburg_matt.svg';
    case 'Nidwalden':
      return 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Wappen_Nidwalden_matt.svg';
    case 'Obwalden':
      return 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Wappen_Obwalden_matt.svg';
    case 'Schaffhausen':
      return 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Wappen_Schaffhausen_matt.svg';
    case 'Schwyz':
      return 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Wappen_Schwyz_matt.svg';
    case 'Solothurn':
      return 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Wappen_Solothurn_matt.svg';
    case 'St. Gallen':
      return 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Coat_of_arms_of_canton_of_St._Gallen.svg';
    case 'Tessin':
      return 'https://upload.wikimedia.org/wikipedia/commons/8/87/Wappen_Tessin_matt.svg';
    case 'Thurgau':
      return 'https://upload.wikimedia.org/wikipedia/commons/7/71/Wappen_Thurgau_matt.svg';
    case 'Uri':
      return 'https://upload.wikimedia.org/wikipedia/commons/1/10/Wappen_Uri_matt.svg';
    case 'Waadt':
      return 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Wappen_Waadt_matt.svg';
    case 'Wallis':
      return 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Wappen_Wallis_matt.svg';
    case 'Zug':
      return 'https://upload.wikimedia.org/wikipedia/commons/3/31/Wappen_Zug_matt.svg';
    case 'Zürich':
      return 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Wappen_Z%C3%BCrich_matt.svg';
    default:
      return 'Invalid option selected.';
  }
}

const cities = [
  {
    name: 'Biu',
    county: 'Bern',
  },
  {
    name: 'Bärn',
    county: 'Bern',
  },
  {
    name: 'Züri',
    county: 'Zürich',
  },
  {
    name: 'Gänf',
    county: 'Genf',
  },
  {
    name: 'Basu',
    county: 'Basel-Stadt',
  },
];

const filteredCities = computed(() => {
  return cities.filter((city) =>
    city.name?.toLowerCase().includes(citySearch.value.toLowerCase())
  );
});
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
