<template>

  <div class="flex items-center flex-col">

    <h1 class="text-3xl font-bold my-10">Manual</h1>

    <div class="grid grid-cols-2 w-full">

      <div class="w-full flex justify-center flex-col">

        <Jog title="alfa" />

        <Jog title="beta" />

        <Jog title="gamma" />

      </div>

      <div class="w-full flex justify-center flex-col">

        <Jog title="x" />

        <Jog title="y" />

        <Jog title="z" />

      </div>

      <div class="w-full fixed bottom-20">
        <v-btn>Save to registry</v-btn>
      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
import Jog from './Jog.vue'
</script>

<script setup lang="ts">


</script>