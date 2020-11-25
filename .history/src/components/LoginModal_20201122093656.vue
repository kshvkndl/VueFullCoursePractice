<template>
  <section
    @click="$emit('close-login-modal')"
    class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-10"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto bg-white p-2 rounded shadow-md z-20 w-1/3">
        <h1>Login</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>