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
  components: { AppHeader, LoginModal },
};
</script>


