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
          <form class="p-2 m-2" @submit.prevent="submitLogin">
            <div class="my-4">
              <label for="">Email or Username</label>
              <input
                type="text"
                class="rounded shadow p-2 w-full"
                v-model="loginForm.email"
                placeholder="Enter Your Email or User Name"
              />
            </div>
            <div class="my-4">
              <label for="">Password</label>
              <input
                type="Password"
                class="rounded shadow p-2 w-full"
                v-model="loginForm.password"
                placeholder="Enter Your Password"
              />
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
import firebase from "@/utilities/firebase";

export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitLogin() {
      firebase.auth.signInWithEmailAndPassword(
        this.loginForm.email,
        this.loginForm.password
      ).then;
    },
  },
};
</script>