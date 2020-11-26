<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <table class="table border">
          <thead class="">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">{{ user.first_name }}</td>
              <td class="border px-4 py-2">{{ user.last_name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
              <td class="border px-4 py-2">
                <img :src="user.avatar" :alt="user.first_name" />
              </td>
            </tr>
          </tbody>
        </table>
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