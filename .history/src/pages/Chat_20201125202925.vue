<template>
  <section class="flex w-full">
    <div class="m-auto w-1/3">
      <h1 class="text-center text-2xl my-3">Real Time Chat</h1>
      <div class="border rounded-lg w-full shadow relative">
        <div class="h-64">
          <div
            class="px-2 py-1"
            v-for="chat in state.chats"
            :key="chat.message"
            @keydown.enter="addMessage"
          >
            <strong
              ><small>{{ chat.message }}</small></strong
            >
          </div>
          <div class="h-8">
            <input
              type="text"
              class="absolute bottom-0 border p-2 rounded shadow-sm w-full"
              placeholder="Write Something..."
              v-model="state.message"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from "@/utilities/firebase";
import { onMounted, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      chats: {},
      message: "",
      collection: null,
      userId: null,
    });

    onMounted(async () => {
      const db = firebase.database();
      state.collection = db.ref("chats");
      const data = await state.collection.once("value");
      //   console.log(data.val());
      state.chats = data.val();

      state.userId = firebase.auth().currentUser.uid;

      //   state.collection.on("value", (shapshot) => {
      //     state.chats = shapshot.val();
      //   });
    });

    function addMessage() {
      const newChat = state.collection.push();
      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    }

    return { state, addMessage };
  },
};
</script>