<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <table class="table border">
          <thead class="bg-gradient-to-r from-red-900 to-blue-900 text-white">
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">First Name</th>
              <th class="px-4 py-2 border">Last Name</th>
              <th class="px-4 py-2 border">Email</th>
              <th class="px-4 py-2 border">Avatar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">{{ user.first_name }}</td>
              <td class="border px-4 py-2">{{ user.last_name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
              <td class="border px-4 py-2">
                <img
                  width="50"
                  class="rounded-full"
                  :src="user.avatar"
                  :alt="user.first_name"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <button>Prev</button>
          <button>Next</button>
        </div>
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