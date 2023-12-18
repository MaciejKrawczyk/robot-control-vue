<template>

  <div class="flex items-center flex-col">

    <h1 class="text-3xl font-bold my-10">Manual</h1>

    <div class="grid grid-cols-2 w-full">

      <div class="w-full flex justify-center flex-col">

        <Jog title="alfa" :value="alfa" />

        <Jog title="beta" :value="beta" />

        <Jog title="gamma" :value="gamma" />

      </div>

      <div class="w-full flex justify-center flex-col">

        <Jog title="x" :value="x" />

        <Jog title="y" :value="y" />

        <Jog title="z" :value="z" />

      </div>

      <div class="w-full fixed bottom-20">

        <Speed title="Speed (%)" />

        <v-btn @click="saveToRegistry">Save to registry</v-btn>
      </div>

    </div>

  </div>

</template>

<script setup lang="ts">
import Jog from './Jog.vue'
import Speed from "./Speed.vue";
</script>

<script lang="ts">
export default {
  inject: ['alfa', 'beta', 'gamma', 'x', 'y', 'z'],
  methods: {
    saveToRegistry() {
      const body = {
        'x': this.x,
        'y': this.y,
        'z': this.z,
        'alfa': this.alfa,
        'beta': this.beta,
        'gamma': this.gamma
      };

      fetch('http://localhost:5000/api/registry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
          .then(response => response.json())
          .then(data => console.log('Success:', data))
          .catch((error) => console.error('Error:', error));
    }
  }
}
</script>