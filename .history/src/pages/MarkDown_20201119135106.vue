<template>
  <div class="flex w-full flex-wrap">
    <h1 class="w-full text-center text-3xl">Markdown App</h1>
    <section class="flex w-10/12 h-screen">
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
      <article class="w-1/2 border bg-gray-100">right</article>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>