<template>
  <section class="mt-5 text-center">
    <button
      @click="loginWithGoogle"
      class="text-white text-sm border rounded px-2 py-1 shadow-md bg-gradient-to-r from-blue-800 to-pink-800"
    >
      Login With Google
    </button>
    <p class="text-sm">OR</p>
  </section>
</template>

<script>
import firebase from "@/utilities/firebase";
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("close-modal-from-google");
        });
    },
  },
};
</script>

<style lang="">
</style>