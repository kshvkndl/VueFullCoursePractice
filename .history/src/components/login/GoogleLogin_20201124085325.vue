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
export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.closeModal();
        });
    },
  },
};
</script>

<style lang="">
</style>