<template>
  <section class="flex w-full">
    <div class="m-auto w-1/3">
      <h1 class="text-center text-2xl my-3">Real Time Chat</h1>
      <div class="border rounded-lg w-full shadow">
        <div class="h-full p-2">
          <div v-for="chat in state.chats" :key="chat.message">
            {{ chat.message }}
          </div>
          <input
            type="text"
            class="p-1 border rounded w-full my-5"
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