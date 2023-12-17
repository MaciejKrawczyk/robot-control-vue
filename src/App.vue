<template class="overflow-auto">

  <v-layout>

    <router-view class="w-full h-full bg-white pb-32"></router-view>

    <v-bottom-navigation
        v-model="value"
        color="teal"
        grow
    >
        <v-btn to="/manual">
          Manual
        </v-btn>

        <v-btn to="/program">
          Program
        </v-btn>

        <v-btn to="/registry">
          Registry
        </v-btn>

    </v-bottom-navigation>
  </v-layout>
</template>

<script setup>
import {ref} from 'vue'

const value = ref(1)
</script>

<script>
export default {
  data: () => ({value: 1}),
}
</script>