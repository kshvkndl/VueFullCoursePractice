<template>
  <div class="m-auto">
    <h1 class="text-center">Welcome to Vue 3 full course</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state);
  },
};
</script>