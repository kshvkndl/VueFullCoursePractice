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
        <div class="flex justify-between my-2">
          <button
            class="px-3 py-1 text-white rounded border"
            @click="prev"
            :disabled="state.users.page === 1"
            :class="
              state.users.page === 1
                ? 'bg-gradient-to-r from-red-400 to-blue-400'
                : 'bg-gradient-to-r from-red-900 to-blue-900 hover:shadow'
            "
          >
            Prev
          </button>
          <button
            class="px-3 py-1 bg-gradient-to-r from-red-900 to-blue-900 text-white rounded border"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages
                ? 'bg-gradient-to-r from-red-400 to-blue-400'
                : 'bg-gradient-to-r from-red-900 to-blue-900 hover:shadow'
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
  <teleport to="body">
    <Modal>
      <template #title> Add New User </template>
    </Modal>
  </teleport>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";
import Modal from '@/components/Modal'

export default {
    components: {Modal}
  setup() {
    const state = reactive({
      users: [],
    });

    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });

    async function next() {
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    }
    async function prev() {
      const { data } = await axios.get(`/users?page=1`);
      state.users = data;
    }

    return { state, next, prev };
  },
};
</script>