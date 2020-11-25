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
    <button class="mx-2" @click="$emit('open-login-modal')">Login</button>
    <button class="mx-2" @click="logout">Logout</button>
  </nav>
</template>


<script>
import firebase from '@/utilities/firebase'
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Super Heros", to: "/super-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "MarkDown", to: "/markdown" },
        { title: "Slier Carousel", to: "/slider" },
      ],
    };
  },

  methods:{
    firebase.auth().signOut().then(res=>{

    }).catch(e=>{

    })
  }
};
</script>