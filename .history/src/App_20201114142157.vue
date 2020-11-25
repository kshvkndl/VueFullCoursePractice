<template>
  <h1>Super Heros List</h1>

  <ul>
    <li v-for="(hero, index) in superHeros" :key="index">
      {{ index++ }}. {{ hero.name }}
    </li>
  </ul>

  <form action="POST" @submit.prevent="addHeros">
    <input type="text" v-model="inputHero" />
    <button type="submit">Add Heros</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputHero: "",
      superHeros: [{ name: "Spidar Man" }],
    };
  },

  methods: {
    addHeros() {
      this.superHeros.push({ inputHero });
      this.inputHero = "";
    },
  },
};
</script>


