<template>
  <section class="flex w-full">
    <div class="m-auto w-1/3">
      <h1 class="text-center text-2xl my-3">Real Time Chat</h1>
      <div class="border rounded-lg w-full shadow relative">
        <div class="h-64">
          <div
            class="px-2 py-1 w-full"
            v-for="chat in state.chats"
            :key="chat.message"
            :class="chat.userId === state.userId ? 'text-right' : ''"
          >
            <strong
              class="bg-blue-600 text-white rounded-full px-2 py-1 text-xs"
              >{{ chat.message }}</strong
            >
          </div>
          <div class="h-8">
            <input
              type="text"
              class="absolute bottom-0 border p-2 rounded shadow-sm w-full"
              placeholder="Write Something..."
              v-model="state.message"
              @keydown.enter="addMessage"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase, { chatsRef } from "@/utilities/firebase";
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      userId: null,
    });

    const store = useStore();
    const user = computed(() => store.state.authUser);

    onMounted(async () => {
      chatsRef.on("child_added", (snapshot) => {
        state.userId = firebase.auth().currentUser.uid;
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });

    function addMessage() {
      const newChat = chatsRef.push();
      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    }

    return { state, addMessage, user };
  },
};
</script>