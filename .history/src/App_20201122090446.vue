<template>
  <AppHeader></AppHeader>
  <div class="w-full flex">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import LoginModal from "@/components/LoginModal";

export default {
  components: { AppHeader, LoginModal },
};
</script>


