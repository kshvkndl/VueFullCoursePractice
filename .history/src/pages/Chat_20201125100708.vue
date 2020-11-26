<template>hello chat aps</template>

<script>
import firebase from "@/utilities/firebase";
import { onMounted, ref } from "vue";

export default {
  setup() {
    onMounted(() => {
      const db = firebase.database();
      const collection = db.ref("chats");
    });
  },
};
</script>