<template>
  <nav
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link class="mx-2" to="/super-heros">Super Heros</router-link>
    <router-link class="mx-2" to="/calendar">Calendar</router-link>
  </nav>
</template>


<script>
export default {
  data(){
    return{
      list:[
        {title: 'Super Heros', to:'//super-heros'},
        {title: 'Calendar', to="/calendar"},
        {title: 'MarkDown', to="/markdown"},
      ]
    }
  }
};
</script>