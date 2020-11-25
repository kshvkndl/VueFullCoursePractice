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
      currentSlide: 1,
    };
  },
  mounted() {
    setInterval(() => {
      this.currentSlide++;
    }, 1000);
  },
};
</script>

<style scoped>
</style>