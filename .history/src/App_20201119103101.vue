<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <!-- <SuperHeros></SuperHeros> -->
  <div class="w-full flex">
    <Calender></Calender>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
// import SuperHeros from "@/components/SuperHeros";
import Calender from "@/components/Calender";
export default {
  components: { AppHeader, Calender },
};
</script>


