<template>
  <h1>Super Heros List</h1>

  <ul>
    <li></li>
  </ul>

  <form action="POST">
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
          this.
      }
  }
};
</script>


