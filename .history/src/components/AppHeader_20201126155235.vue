<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-5 py-2"
  >
    <router-link
      class="mx-2"
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button class="mx-2" v-else @click="openLogin">Login</button>
  </nav>
</template>


<script>
import firebase from "@/utilities/firebase";

export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Super Heros", to: "/super-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "MarkDown", to: "/markdown" },
        { title: "Slider", to: "/slider-carousel" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/reusable-modal" },
        { title: "Chat", to: "/chat" },
      ],
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },

  methods: {
    logout() {
      firebase.auth().signOut();
      // .then((res) => {})
      // .catch((e) => {});
    },
    openLogin() {
      this.$store.state.commit("setLoginModal", true);
    },
  },
};
</script>