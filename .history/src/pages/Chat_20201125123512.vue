<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-screen w-200 p-2">
          <div v-for="chat in state.chats" :key="chat.message">
            {{ chat.message }}
          </div>
          <input
            type="text"
            class="p-1 border rounded"
            v-model="state.message"
          />
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