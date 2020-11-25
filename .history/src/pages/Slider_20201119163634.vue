<template>
  <div class="flex flex-wrap w-full">
    <div
      v-if="currentSlide == 0"
      class="absolute w-full bg-blue-600"
      style="height: 300px"
    ></div>
    <div
      v-if="currentSlide == 1"
      class="absolute w-full bg-yellow-600"
      style="height: 300px"
    ></div>
    <div
      v-if="currentSlide == 2"
      class="absolute w-full bg-teal-600"
      style="height: 300px"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders:['bg-teal-600', 'bg-blue-600', 'bg-yellow-600']
      interval: "",
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
</style>