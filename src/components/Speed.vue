<template>
  <h3 class="text-center font-semibold">{{ title }}</h3>
  <div class="flex justify-center">
    <v-btn size="small" @click="decreaseSpeed">-</v-btn>
    <span class="px-4">{{ speed }}</span>
    <v-btn size="small" @click="increaseSpeed">+</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'alfa'
    }
  },
  data() {
    return {
      speed: 0
    }
  },
  methods: {
    increaseSpeed() {
      if (this.speed < 100) {
        this.speed += 10;
      }
    },
    decreaseSpeed() {
      if (this.speed > 0) {
        this.speed -= 10;
      }
    }
  }
}
</script>