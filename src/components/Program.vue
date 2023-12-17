<template>
  <div class="flex items-center flex-col">

    <h1 class="text-3xl font-bold my-10">Program</h1>

    <div class="w-full">

      <div class="w-full h-auto bg-gray-200 flex items-center flex-col p-4">


        <div
            v-for="(cmd, index) in commands"
            :key="index"
            class="w-full"
        >
          <div
              v-if="cmd === 'sleep'"
              class="w-full bg-amber-200 h-auto mb-2 flex items-center justify-between p-2 rounded-lg"
          >
            <div class="w-1/3 text-center">{{ cmd }}</div>
            <v-select
                density="compact"
                label="Number of seconds"
                :items="[1,2,3,4,5,6,7]"
                hint="Choose the number of seconds to sleep"
                persistent-hint
            ></v-select>
            <v-btn size="small" class="ml-2">
              X
            </v-btn>
          </div>

          <div
              v-if="cmd === 'regTraj'"
              class="w-full bg-amber-300 h-auto mb-2 flex items-center justify-between p-2 rounded-lg"
          >
            <div class="w-1/3 text-center">{{ cmd }}</div>
            <v-select
                density="compact"
                label="Registry ID"
                :items="[1,2,3,4,5,6,7]"
                hint="Choose the Registry ID"
                persistent-hint
            ></v-select>
            <v-btn size="small" class="ml-2">
              X
            </v-btn>
          </div>

          <div
              v-if="cmd === 'currTraj'"
              class="w-full bg-amber-400 h-auto mb-2 flex items-center justify-between p-2 rounded-lg"
          >
            <div class="w-1/3 text-center">{{ cmd }}</div>
            <v-btn size="small" class="ml-2">
              X
            </v-btn>
          </div>
        </div>
      </div>

      <v-bottom-sheet>
        <template v-slot:activator="{ props }">
          <div class="flex justify-around w-full items-center mt-2">
            <v-btn v-bind="props" text="Insert command"></v-btn>
            <v-btn variant="outlined" icon="" size="x-large">RUN</v-btn>
          </div>
        </template>

        <v-card>
          <v-card-title>
            <span class="text-h5">Available commands</span>
          </v-card-title>
          <v-card-text class="flex justify-around flex-col mb-4">
            <v-btn size="large" class="mb-4" @click="addTrajectoryFromRegistry">
              from registry
            </v-btn>
            <v-btn size="large" class="mb-4" @click="addTrajectoryFromCurrentPosition">
              from current position
            </v-btn>
            <v-btn size="large" class="mb-4" @click="addSleep">
              sleep
            </v-btn>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>

    </div>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const commands = ref([]);
// const sleeps = ref([]);
// const trajectoriesFromCurrentPosition = ref([]);
// const trajectoriesFromRegistry = ref([]);

const addSleep = () => {
  // sleeps.value.unshift('sleep');
  commands.value.unshift('sleep');
};

const addTrajectoryFromRegistry = () => {
  // trajectoriesFromRegistry.value.unshift('regTraj');
  commands.value.unshift('regTraj');
}

const addTrajectoryFromCurrentPosition = () => {
  // trajectoriesFromCurrentPosition.value.unshift('currTraj');
  commands.value.unshift('currTraj');
}

</script>