<template>
  <section class="flex w-full h-full bg-gray-100">
    <div class="m-auto h-screen">
      <div class="mt-10 p-5 rounded-lg shadow-lg bg-gray-100">
        <h1 class="text-2xl my-4">''Tensorflow Object Detection,,</h1>
        <div class="flex flex-wrap justify-center my-2">
          <div class="w-full justify-center text-center">
            <button
              v-if="!isStreaming"
              class="border rounded-lg shadow-sm my-2 bg-red-600 px-3 py-2 text-white"
              @click="openCamera"
            >
              Open Camera
            </button>

            <div v-else class="flex justify-between">
              <button
                class="border rounded-lg shadow-sm my-2 bg-red-600 px-3 py-2 text-white"
                @click="stopStreaming"
              >
                Stop Streaming
              </button>
              <button
                class="border rounded-lg shadow-sm my-2 bg-red-600 px-3 py-2 text-white"
                @click="snapShot"
              >
                Take Snapshot
              </button>
            </div>
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
    const isStreaming = ref(false);

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

    async function openCamera() {
      if (navigator.mediaDevices.getUserMedia) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cams = devices.filter((device) => device.kind === "videoinput");
        const camId = cams[0].deviceId;

        navigator.mediaDevices
          .getUserMedia({ video: { device: { exact: camId } } })
          .then((stream) => {
            isStreaming.value = true;
            videoRef.value.srcObject = stream;
          });
      }
    }

    function stopStreaming() {
      const stream = videoRef.value.srcObject;
      const tracks = stream.getTracks();
      tracks.map((track) => track.stop());
      isStreaming.value = false;
    }

    function snapShot() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.value, 0, 0, 200, 200);
      const data = canvas.toDataURL("image/png");
      imgRef.value.setAttribute("src", data);
    }

    return {
      imgRef,
      result,
      detect,
      isLoading,
      openCamera,
      videoRef,
      isStreaming,
      stopStreaming,
      snapShot,
    };
  },
};
</script>