<template>
  <AppHeader @open-login-modal="isLoginOpen = true"></AppHeader>
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

export default {
  data() {
    return {
      isLoginOpen: false,
    };
  },
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
  components: { AppHeader, LoginModal },
};
</script>


