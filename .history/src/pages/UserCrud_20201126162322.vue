<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div>
        <ul>
          <li v-for="user in state.users.data" :key="user.id">
            <p>{{ user.first_name }}</p>
            <p>{{ user.last_name }}</p>
            <p>{{ user.email }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      users: [],
    });

    onMounted(async () => {
      const { data } = await axios.get("https://reqres.in/api/users");
      state.users = data;
    });

    return { state };
  },
};
</script>