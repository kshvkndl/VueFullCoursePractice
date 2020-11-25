<template>
  <AppHeader @open-login-modal="isLoginOpen = true"></AppHeader>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginOpen"></LoginModal>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import LoginModal from "@/components/LoginModal";

export default {
  components: { AppHeader, LoginModal },
  data() {
    return {
      isLoginOpen: false,
    };
  },
};
</script>


