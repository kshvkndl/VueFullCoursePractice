<template>
  <h1>Super Heros List</h1>

  <ul>
    <li></li>
  </ul>

  <form action="POST" @submit.prevent="addHeros">
    <input type="text" v-model="inputName" />
    <button type="submit">Add Heros</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
        inputName:'',
      superHeros: [{ name: "Spidar Man" }],
    };
  },

  methods:{
      addHeros(){
          this.superHeros.push({this.inputName})
      }
  }
};
</script>


