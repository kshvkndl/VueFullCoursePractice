<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
    <section class="flex mx-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          name=""
          placeholder="Input Your Mark Text"
          :value="text"
          @input="update"
          class="w-full h-full"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return {
      text: "",
      timeOut: "",
    };
  },

  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        this.text = e.target.value;
      }, 1000);
    },
  },
};
</script>