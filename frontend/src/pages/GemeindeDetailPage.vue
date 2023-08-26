<template>
  <div class="main-container">
    <section class="title">
      <h2>Biel/Bienne</h2>
      <q-avatar square>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/47/Wappen_Bern_matt.svg"
        />
      </q-avatar>
    </section>

    <section class="themen-summary">
      <BereichScoreGraph title="Umwelt" :rating="7" />
      <BereichScoreGraph title="Soziales" :rating="4" />
      <BereichScoreGraph title="Wirtshaft" :rating="9" />
    </section>

    <section class="tabs">
      <q-btn-toggle
        v-model="bereich"
        spread
        class="custom-toggle"
        no-caps
        rounded
        elevated
        toggle-color="primary"
        color="white"
        text-color="primary"
        :options="[
          {label: 'Umwelt', value: 'umwelt'},
          {label: 'Soziales', value: 'soziales'},
          {label: 'Wirtshaft', value: 'wirtschaft'}
        ]"
      />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BereichScoreGraph from 'src/components/GemeindeDetail/BereichScoreGraph.vue';

const bereich = ref('umwelt');
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.themen-summary {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  width: 100%;
}

.tabs {
  width: 100%;
}

.title h2 {
  margin: 1rem;
}

.custom-toggle {
  border: 1px solid #027be3
}
</style>
