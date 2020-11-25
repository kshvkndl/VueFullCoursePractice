<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-3xl">Markdown App</h1>
    <section class="flex mx-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          name=""
          v-model="text"
          class="w-full h-full"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100">markedText</article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      text: "",
    };
  },

  computed: {
    markedText() {
      return marked(this.text);
    },
  },
};
</script>