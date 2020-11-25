<template>
  <AppHeader
    :isLoggedIn="isLoggedIn"
    @open-login-modal="isLoginOpen = true"
  ></AppHeader>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal
    v-if="isLoginOpen"
    @close-login-modal="isLoginOpen = false"
  ></LoginModal>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import LoginModal from "@/components/LoginModal";
import firebase from "@/utilities/firebase";

export default {
  data() {
    return {
      isLoginOpen: false,
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        this.isLoggedIn = true;
        this.authUser = user;
        // ...
      } else {
        // User is signed out
        // ...
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
  components: { AppHeader, LoginModal },
};
</script>


