<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-3xl text-center"><u>Super Heros List</u></h1>

      <ul>
        <li
          class="flex justify-between my-3"
          v-for="(hero, index) in superHeros"
          :key="index.name"
        >
          <div>
            {{ index + 1 }}.
            {{ hero.name }}
          </div>
          <button class="border px-2" @click="removeHero(index)">x</button>
        </li>
      </ul>
      <p class="mt-5">Total Number of Heros : {{ heroCount }}</p>

      <form class="mt-10" action="POST" @submit.prevent="addHeros">
        <input
          class="border rounded mr-2 p-1"
          type="text"
          v-model="inputHero"
          placeholder="Enter Your Here"
        />
        <button
          class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-sm text-white p-1"
          type="submit"
        >
          Add Heros
        </button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>