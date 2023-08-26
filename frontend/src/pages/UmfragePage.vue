<script setup lang="ts">
import {ref} from 'vue';
import {polls, SingleSectorPoll} from 'src/data/polls';
import QuestionComponent from 'components/QuestionComponent.vue';
import UserInputComponent from 'components/UserInputComponent.vue';
import CodeValidationComponent from "components/CodeValidationComponent.vue";

const sectors: SingleSectorPoll[] = polls.filter(item => item.sector);

let started = ref(false)

function startPoll() {
  started.value = true
}
</script>

<template>
  <div class='text-h6 text-weight-bold'>
    <h3>Umfrage zur Nachhaltigkeit</h3>
    <div v-if="!started">

      <div class='text-body1 q-mb-xl' style='max-width: 1000px'>
        Wir sind an Ihren Erfahrungen zu drei spezifischen Themenbereichen in unserer Gemeinde interessiert.
        Im Folgenden finden Sie diese drei Kategorien, jeweils begleitet von mehreren Fragen.<br>
        <br>
        Um an dieser Umfrage teilzunehmen, benötigen Sie einen Code.<br>
        <br>
        Falls Sie noch keinen Code haben, dann geben Sie unten Ihre Daten ein,
        um einen Code von der Gemeinde zu erhalten. Dieser wird Ihnen per E-Mail zugeschickt. <br>

        <q-card class="q-mt-lg q-pa-xl text-weight-bold">
          <div class="row">
            <div class="col q-mr-xl ">
              <CodeValidationComponent @validated-code="startPoll" />
            </div>
            <div class="col">
              <UserInputComponent/>
            </div>
          </div>
        </q-card>
      </div>
    </div>

    <q-btn
      class='q-mb-xl'
      color='primary'
      :label='!started ? "Starte die Umfrage" : "Speichern und Abschicken"'
      @click='startPoll'
    />

    <div v-if=started>
      <div v-for='item in sectors' :key='item.sector' class='q-mb-lg'>
        <q-card style='max-width: 1500px;  height:auto' class='q-pa-md'>
          <q-expansion-item :label='item.sector'>

            <div v-for='(question, index) in item.indicators
            .flatMap(indicator=> indicator.questions)
            .filter((q) => !q.includes("x"))'
                 :key='index'>

              <q-separator class='q-mb-lg'/>
              <QuestionComponent :question='question'/>
            </div>

          </q-expansion-item>
        </q-card>
      </div>
    </div>
  </div>
</template>



