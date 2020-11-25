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
          ref="markdownTextArea"
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
import debounce from "../utilities/mixins/debounce";
export default {
  // lifecycle hooks starts
  //   beforeCreate() {
  //     console.log("before create");
  //   },
  //   created() {
  //     console.log("created");
  //   },
  //   beforeMount() {
  //     console.log("before mount");
  //   },
  //   mounted() {
  //     console.log(" mounted");
  //   },
  //   beforeUpdate() {
  //     console.log("before update");
  //   },
  //   updated() {
  //     console.log(" updated");
  //   },
  //   beforeUnmount() {
  //     console.log("before unmount");
  //   },
  //   unmounted() {
  //     console.log(" unmounted");
  //   },
  //   errorCaptured() {
  //     console.log("error captured");
  //   },
  //   renderTracked() {
  //     console.log("on render tracked");
  //   },
  //   renderTriggered() {
  //     console.log("on render triggred");
  //   },

  //lifecycle hooks ends
mounted(){
  this.$refs.markdownTextArea.focus();
}

  mixins: [debounce],
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
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
};
</script>