<template>
  <section>
    <div v-for="chat in state.chats" :key="chat.message">
      {{ chat.message }}
    </div>
    <input type="text" v-model="state.message" />
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