<template>
  <section>
    <div v-for="chat in chats" :key="chat.message">{{ chat.message }}</div>
  </section>
</template>

<script>
import firebase from "@/utilities/firebase";
import { onMounted, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      chats: [],
    });

    onMounted(async () => {
      const db = firebase.database();
      const collection = db.ref("chats");
      const data = await collection.once("value");
      state.chats = data.val();
    });

    return { state };
  },
};
</script>