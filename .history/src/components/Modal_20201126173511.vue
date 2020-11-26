<template>
  <section
    @click="close"
    class="h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50 z-10"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-20 m-auto bg-white p-2 rounded shadow-md w-1/3">
        <div class="p-2 border rounded">
          <div
            class="bg-gradient-to-r from-red-900 to-blue-900 text-white w-full"
          >
            <h1 class="text-2xl">
              <slot name="title"> </slot>
            </h1>
          </div>

          <main>
            <slot name="body"> </slot>
          </main>
        </div>
      </div>
    </div>
  </div>
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