<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-4 text-center">Re-useable Modal</h1>
      <Modal v-if="isModal1Open" @close-modal="isModal1Open = false">
        <template v-slot:title>
          <h1 class="text-xl">Modal 1</h1>
        </template>
      </Modal>
      <Modal v-if="isModal2Open" @close-modal="isModal2Open = false">
        <h1 class="text-2xl text-blue-500">Hello Blue Modal</h1>
      </Modal>
      <button
        @click="isModal1Open = true"
        class="bg-red-900 px-2 py-1 text-white rounded mx-1"
      >
        Modal 1
      </button>
      <button
        @click="isModal2Open = true"
        class="bg-blue-900 px-2 py-1 text-white rounded mx-1"
      >
        Modal 2
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
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);

    return { isModal1Open, isModal2Open };
  },
};
</script>