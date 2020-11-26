<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <h1 class="text-2xl my-4">Tensorflow Object Detection</h1>

        <img
          ref="imgRef"
          src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42"
          width="200"
          alt=""
          crossorigin="anonymous"
          class="mx-auto"
        />
        <p></p>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";

require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default {
  setup() {
    const imgRef = ref("");
    const result = ref("");
    onMounted(async () => {
      const img = imgRef.value;
      //   console.log(imgRef.value);

      // Load the model.
      const model = await cocoSsd.load();

      // Classify the image.
      const predictions = await model.detect(img);

      result.value = predictions;

      console.log("Predictions: ");
      console.log(predictions);
    });

    return { imgRef, result };
  },
};
</script>