<template>
  <q-page>
    <q-img
      class="banner"
      src="https://placehold.co/1920x240"
      alt="Character Image"
    />

    <h1>SwissCityStats</h1>
    <div class="text-body1">
      Erkunde Schweizer Gemeinden mit datenbasierten Einblicken: Tauche ein in
      die Essenz der urbanen und ländlichen Zentren der Schweiz. Unsere
      Plattform präsentiert ein vielfältiges Spektrum an Daten, das für jede
      Gemeinde sorgfältig visualisiert wird. Ganz gleich, ob du Forscher,
      Gemeindebegeisterter oder einfach neugierig bist – unsere Tools
      ermöglichen es dir, Demografie, Wirtschaft und vieles mehr miteinander zu
      vergleichen. Entdecke gemeinsam mit uns die Geschichten, die das
      Gemeindebild der Schweiz zeichnen.
    </div>
    <q-form class="searchbar">
      <q-select
        @keydown.enter="searchForCity()"
        :loading="loadingFlag"
        type="text"
        v-model="citySearch"
        label="Search for a City"
        filled
        lazy-rules
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="cities"
        @filter="filterFn"
      />
    </q-form>

    <div class="kachelContainer">
      <q-card class="my-card">
        <router-link to="/gemeinden">
          <q-img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Switzerland%2C_administrative_divisions_-_de_-_colored.svg"
          >
            <div class="absolute-bottom text-subtitle2 text-center">
              Alle Gemeinden
            </div>
          </q-img>
        </router-link>
      </q-card>

      <q-card class="my-card">
        <router-link to="/umfrage">
          <q-img src="../../src/assets/undraw_umfrage.svg">
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const loadingFlag = ref(false);
const citySearch = ref<null | { label: string; county: string }>(null);

const data = [
  {
    label: 'Biu',
    county: 'Bern',
  },
  {
    label: 'Bärn',
    county: 'Bern',
  },
  {
    label: 'Züri',
    county: 'Zürich',
  },
  {
    label: 'Gänf',
    county: 'Genf',
  },
  {
    label: 'Basu',
    county: 'Basel-Stadt',
  },
];

const cities = ref(data);

function filterFn(val: string, update: (arg0: { (): void; (): void }) => void) {
  if (val === '') {
    update(() => {
      cities.value = data;

      // here you have access to "ref" which
      // is the Vue reference of the QSelect
    });
    return;
  }

  update(() => {
    const needle = val.toLowerCase();
    cities.value = data.filter(
      (v) => v.label.toLowerCase().indexOf(needle) > -1
    );
    if (cities.value.length == 1) {
      citySearch.value = {
        label: cities.value[0].label,
        county: cities.value[0].county,
      };
      console.log({
        label: cities.value[0].label,
        county: cities.value[0].county,
      });
    }
  });
}

async function searchForCity() {
  console.log(citySearch.value);
  if (citySearch.value) {
    await router.push(
      `/gemeinden/${citySearch.value.label + citySearch.value.county}`
    );
    console.log(citySearch.value.label);
  }
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
  margin-bottom: 3rem;
}
</style>
