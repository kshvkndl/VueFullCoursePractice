<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-4 text-center">Re-useable Modal</h1>
    </div>
    <Modal></Modal>
  </section>
</template>

<script>
import Modal from "@/components/Modal";
export default {
  components: { Modal },
};
</script>