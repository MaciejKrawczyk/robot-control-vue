<template>
  <h3 class="text-center font-semibold">{{ title }}</h3>
  <div class="flex justify-center">
    <v-btn size="small">-</v-btn>
    <span class="px-4">0</span>
    <v-btn size="small">+</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'alfa'
    }
  }
}
</script>