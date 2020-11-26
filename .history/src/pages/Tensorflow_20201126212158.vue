<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <h1 class="text-2xl my-4">Tensorflow Object Detection</h1>
        <div class="flex flex-wrap justify-center">
          <div class="w-full">
            <button
              class="border rounded-lg shadow-sm my-2 bg-red-600 px-3 py-2 text-white"
              @click="openCamera"
            >
              Open Camera
            </button>
          </div>
          <video src="" ref="videoRef" autoplay="true" width="100"></video>
        </div>
        <img
          ref="imgRef"
          src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42"
          width="200"
          alt=""
          crossorigin="anonymous"
          class="mx-auto"
        />

        <div class="w-full text-center">
          <button
            class="border rounded-lg shadow-lg my-2 bg-green-600 px-5 py-3 text-white"
            @click="detect"
          >
            <strong>
              <span v-if="isLoading">Loading...</span>
              <span v-else>Detect Object</span></strong
            >
          </button>

          <div v-if="result.length > 0">
            <p>{{ result[0].class }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default {
  setup() {
    const imgRef = ref("");
    const videoRef = ref("");
    const result = ref([]);
    const isLoading = ref(false);

    async function detect() {
      const img = imgRef.value;
      //   console.log(imgRef.value);

      isLoading.value = true;
      // Load the model.
      const model = await cocoSsd.load();

      // Classify the image.
      const predictions = await model.detect(img);

      result.value = predictions;

      isLoading.value = false;
      console.log(predictions);
    }

    function openCamera() {
      if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          videoRef.value.srcObject = stream;
        });
      }
    }

    return { imgRef, result, detect, isLoading, openCamera, videoRef };
  },
};
</script>