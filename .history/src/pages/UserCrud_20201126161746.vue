<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1>User Crud</h1>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    onMounted(async () => {
      axios.get("https://reqres.in/api/users");
    });
  },
};
</script>