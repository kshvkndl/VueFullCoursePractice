<template>
  <div class="flex flex-wrap w-full relative">
    <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>

    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 justify-center w-full">
        <div class="w-4 h-4 rounded-full bg-black z-20"></div>
      </div>
    </div>

    <!-- <div class="my-10 flex w-full">
      <div class="mx-auto">
        <transition name="fade">
          <h1 v-if="isTitleShowing" class="text-center">Slider Carousel</h1>
        </transition>
        <button
          @click="isTitleShowing = !isTitleShowing"
          class="px-2 rounded border mx-auto"
        >
          Toggle Text
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ["bg-teal-600", "bg-blue-600", "bg-yellow-600"],
      interval: "",
      isTitleShowing: true,
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

<style >
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>