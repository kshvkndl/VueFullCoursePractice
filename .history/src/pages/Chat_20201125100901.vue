<template>hello chat aps</template>

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