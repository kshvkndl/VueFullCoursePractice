<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1>User Crud</h1>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({});

    onMounted(async () => {
      const { data } = await axios.get("https://reqres.in/api/users");
    });
  },
};
</script>