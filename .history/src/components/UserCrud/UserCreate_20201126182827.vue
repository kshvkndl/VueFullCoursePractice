<template>
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
import Modal from "@/components/Modal";
export default {
  components: { Modal },
  setup() {},
};
</script>