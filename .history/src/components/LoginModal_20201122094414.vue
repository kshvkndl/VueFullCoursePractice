<template>
  <section
    @click="$emit('close-login-modal')"
    class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-10"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-20 m-auto bg-white p-2 rounded shadow-md w-1/3">
        <div class="p-2 border rounded">
          <h1 class="text-center text-xl">Login Form</h1>
          <form class="p-2 m-2">
            <div class="my-4">
              <label for="">Email or Username</label>
              <input type="text" class="rounded shadow p-2 w-full" />
            </div>
            <div class="my-4">
              <label for="">Password</label>
              <input type="Password" class="rounded shadow p-2 w-full" />
            </div>
            <div class="my-4">
              <button
                type="submit"
                class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>