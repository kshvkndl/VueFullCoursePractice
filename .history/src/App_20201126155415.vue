<template>
  <AppHeader></AppHeader>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal
    v-if="isLoginOpen"
    @close-login-modal="isLoginOpen = false"
  ></LoginModal>
  <calculator></calculator>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import LoginModal from "@/components/LoginModal";
import firebase from "@/utilities/firebase";

export default {
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setAuthUser", user);

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        // ...
      } else {
        // User is signed out
        // ...
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  },
  components: { AppHeader, LoginModal },
};
</script>


