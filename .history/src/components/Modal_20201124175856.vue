<template>
  <section
    @click="close"
    class="h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50 z-20"
  >
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="m-auto bg-white p-2 rounded shadow w-1/3 z-30">
          <div class="p-2 border">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close-modal");
    }

    return { close };
  },
};
</script>