<template>Tensor flow</template>

<script>
import { onMounted } from "vue";

require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default {
  setup() {
    onMounted(async () => {});
  },
};
</script>