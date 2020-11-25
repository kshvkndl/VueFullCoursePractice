<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-3xl text-center"><u>Super Heros List</u></h1>

      <ul>
        <li
          class="flex justify-between"
          v-for="(hero, index) in superHeros"
          :key="index.name"
        >
          <div>
            {{ index + 1 }}.
            {{ hero.name }}
          </div>
          <button @click="removeHero(index)">x</button>
        </li>
      </ul>
      <p>Total Number of Heros : {{ heroCount }}</p>

      <form action="POST" @submit.prevent="addHeros">
        <input type="text" v-model="inputHero" placeholder="Enter Your Here" />
        <button type="submit">Add Heros</button>
      </form>
    </div>
  </div>
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


