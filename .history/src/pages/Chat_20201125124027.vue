<template>
  <section class="flex w-full">
    <div class="m-auto w-1/3">
      <h1 class="text-center text-2xl my-3">Real Time Chat</h1>
      <div class="border rounded-lg w-full shadow relative">
        <div class="h-64 p-2">
          <div v-for="chat in state.chats" :key="chat.message">
            {{ chat.message }}
          </div>
          <div class="h-8 p-2">
            <input
              type="text"
              class="absolute bottom-0 p-1 border rounded shadow-sm w-full"
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
    });

    onMounted(async () => {
      const db = firebase.database();
      const collection = db.ref("chats");
      const data = await collection.once("value");
      console.log(data.val());
      state.chats = data.val();

      collection.on("value", (shapshot) => {
        state.chats = shapshot.val();
      });
    });

    return { state };
  },
};
</script>