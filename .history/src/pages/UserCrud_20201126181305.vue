<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <div class="w-full">
          <button
            class="px-2 py-1 border rounded bg-gradient-to-r from-blue-600 to-teal-400 float-right"
            @click="isModalOpen = true"
          >
            Add User
          </button>
        </div>
        <table class="table border">
          <thead class="bg-gradient-to-r from-red-900 to-blue-900 text-white">
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Name</th>
              <th class="px-4 py-2 border">Email</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user._id">
              <td class="border px-4 py-2">{{ user._id }}</td>
              <td class="border px-4 py-2">{{ user.name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
              <td class="border px-4 py-2">
                <img
                  width="50"
                  class="rounded-full"
                  :src="user.avatar"
                  :alt="user.first_name"
                />
              </td>
              <td class="border px-4 py-2">
                <button
                  class="px-2 py-1 bg-red-800 rounded text-white text-sm"
                  @click="deleteUser('user._id')"
                >
                  Delete
                </button>
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
    <Modal v-if="isModalOpen" @close-modal="isModalOpen = false">
      <template #title> Add New User </template>
      <template #body>
        <form action="" @submit.prevent="submitForm">
          <div class="p-2">
            <label for="">User Name :</label>
            <input
              v-model="state.form.name"
              class="w-full p-2 border rounded"
              type="text"
              placeholder="User Name"
            />
          </div>
          <div class="p-2">
            <label for="">Email Address :</label>
            <input
              v-model="state.form.email"
              class="w-full p-2 border rounded"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div class="p-2">
            <label for="">Avatar Url</label>
            <input
              v-model="state.form.avatar"
              class="w-full p-2 border rounded"
              type="text"
              placeholder="Avatar URL"
            />
          </div>
          <div class="p-2">
            <button
              class="w-full p-2 border rounded bg-gradient-to-r from-red-900 to-blue-900 text-white hover:bg-red-900"
              type="submit"
            >
              Create
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import axios from "../plugins/axios";
import Modal from "@/components/Modal";

export default {
  components: { Modal },
  setup() {
    const isModalOpen = ref(false);
    const state = reactive({
      users: [],
      form: {
        name: "",
        email: "",
        avatar: "",
      },
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

    async function submitForm() {
      const { data } = await axios.post("/users", state.form);
      state.users.push(data);
      state.form.name = "";
      state.form.email = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }
    async function deleteUser(uid) {
      state.users = state.users.filter((users) => users._id !== uid);
      console.log({ uid });
    }

    return { state, next, prev, isModalOpen, submitForm, deleteUser };
  },
};
</script>