<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-4 text-center">Re-useable Modal</h1>
      <Modal v-if="isModalOpen" @close-modal="isModalOpen = false"></Modal>
    </div>
  </section>
</template>

<script>
import Modal from "@/components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isModalOpen = ref(true);
  },
};
</script>