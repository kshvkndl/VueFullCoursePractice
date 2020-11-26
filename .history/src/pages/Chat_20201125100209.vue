<template>hello chat aps</template>

<script>
import firebase from "@/utilities/firebase";
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      const db = firebase.database();
    });
  },
};
</script>