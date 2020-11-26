<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avater</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" :key="user.id"></tr>
          </tbody>
        </table>
        <ul>
          <li>
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