<template>
  <h1>Super Heros List</h1>

  <ul>
    <li></li>
  </ul>

  <form action="POST">
    <input type="text" />
    <button type="submit">Add Heros</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      superHeros: [{ name: "Spidar Man" }],
    };
  },
};
</script>


