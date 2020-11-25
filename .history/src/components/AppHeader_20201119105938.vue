<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2 mx-5"
  >
    <router-link
      class="mx-2"
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      >{{ item.title }}</router-link
    >
  </nav>
</template>


<script>
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Super Heros", to: "/super-heros" },
        { title: "Calendar", to: "/calendar" },
        { title: "MarkDown", to: "/markdown" },
      ],
    };
  },
};
</script>