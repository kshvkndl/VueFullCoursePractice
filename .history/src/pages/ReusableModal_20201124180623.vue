<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-4 text-center">Re-useable Modal</h1>
      <Modal v-if="isRedModalOpen" @close-modal="isRedModalOpen = false">
        <h1 class="text-2xl text-red-500">Hello Modal</h1>
      </Modal>
      <Modal v-if="isBlueModalOpen" @close-modal="isBlueModalOpen = false">
        <h1 class="text-2xl text-red-500">Hello Modal</h1>
      </Modal>
      <button
        @click="isRedModalOpen = true"
        class="bg-red-900 px-2 py-1 text-white rounded"
      >
        Red Modal
      </button>
      <button
        @click="isBlueModalOpen = true"
        class="bg-blue-900 px-2 py-1 text-white rounded"
      >
        Red Modal
      </button>
    </div>
  </section>
</template>

<script>
import Modal from "@/components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isRedModalOpen = ref(false);
    const isBlueModalOpen = ref(false);

    return { isRedModalOpen, isBlueModalOpen };
  },
};
</script>