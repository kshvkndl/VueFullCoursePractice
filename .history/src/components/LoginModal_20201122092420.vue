<template>
  <div v-if="isOpen">
    <section
      @click="isOpen = false"
      class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-10"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="m-auto bg-white p-2 rounded shadow-md z-20">
          <h1>Login</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>