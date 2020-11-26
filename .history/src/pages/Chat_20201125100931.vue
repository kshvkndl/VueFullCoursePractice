<template>
  <section>
    <div v-for="chat in chats" :key="chat.message"></div>
  </section>
</template>

<script>
import firebase from "@/utilities/firebase";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const chats = ref({});

    onMounted(async () => {
      const db = firebase.database();
      const collection = db.ref("chats");
      const data = await collection.once("value");
      chats.value = data.val();
    });

    return { chats };
  },
};
</script>