<template>

  <div class="flex justify-center items-center p-20 flex-col">

    <v-img
        class="mb-4"
        cover
        :width="350"
        aspect-ratio="4:3"
        src="/logotyp-politechnika-opolska-03-1.svg"
    ></v-img>

    <v-progress-circular
        color="dark-blue"
        indeterminate
        :size="99"
        :width="9"
    ></v-progress-circular>

  </div>

</template>


<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

setTimeout(() => {
  router.push('/manual')
}, 3000)
</script>
