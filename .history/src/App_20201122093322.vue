<template>
  <AppHeader
    @open-login-modal="isLoginOpen = true"
    @close-login-modal="isLoginOpen = false"
  ></AppHeader>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <LoginModal v-if="isLoginOpen"></LoginModal>
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


