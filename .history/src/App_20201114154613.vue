<template>
  <AppHeader></AppHeader>
  <SuperHeros></SuperHeros>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import SuperHeros from "@/components/SuperHeros";
export default {
  components: { AppHeader, SuperHeros },
  data() {
    return {
      inputHero: "",
      superHeros: [
        { name: "Spidar Man" },
        { name: "Spidar Man" },
        { name: "Spidar Man" },
        { name: "Spidar Man" },
      ],
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


