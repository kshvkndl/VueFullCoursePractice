<template>
  <div class="m-auto">
    <h1 class="text-center">Welcome to Vue 3 full course</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      store: this.$store.state,
    };
  },
};
</script>