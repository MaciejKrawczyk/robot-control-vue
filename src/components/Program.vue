<template>
  <div class="flex items-center flex-col">

    <h1 class="text-3xl font-bold my-10">Program</h1>

    <div class="w-full">

      <v-bottom-sheet>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" text="Insert trajectory"></v-btn>
        </template>

        <v-card>

          <v-card-title>
            <span class="text-h5">Available trajectories</span>
          </v-card-title>

          <v-card-text class="flex justify-around flex-col mb-4">

            <v-btn size="large" class="my-4">
              from registry
            </v-btn>

            <v-btn size="large">
              from current position
            </v-btn>

          </v-card-text>

        </v-card>

      </v-bottom-sheet>

    </div>


  </div>
</template>

<script setup lang="ts">

</script>