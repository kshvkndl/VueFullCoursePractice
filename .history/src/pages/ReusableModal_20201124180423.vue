<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-4 text-center">Re-useable Modal</h1>
      <Modal v-if="isModalOpen" @close-modal="isModalOpen = false">
        <h1 class="text-2xl text-red-500">Hello Modal</h1>
      </Modal>
      <button @click="isModalOpen = true" class="bg-red-900">Red Modal</button>
    </div>
  </section>
</template>

<script>
import Modal from "@/components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isModalOpen = ref(false);

    return { isModalOpen };
  },
};
</script>