<template>
  <h1>Super Heros List</h1>

  <ul>
    <li v-for="(hero, index) in superHeros" :key="index.name">
      <div>
        {{ index++ }}. {{ hero.name }}
        <button @click="removeHero(index)">x</button>
      </div>
    </li>
  </ul>
  <p>Total Number of Heros : {{ heroCount }}</p>

  <form action="POST" @submit.prevent="addHeros">
    <input type="text" v-model="inputHero" placeholder="Enter Your Here" />
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
      if (this.inputHero !== "") {
        this.superHeros.push({ name: this.inputHero });
        this.inputHero = "";
      }
    },
    removeHero(index) {
      this.superHeros = this.superHeros.filter((hero, i) => i !== index);
    },
  },

  computed: {
    heroCount() {
      return this.superHeros.length;
    },
  },
};
</script>


