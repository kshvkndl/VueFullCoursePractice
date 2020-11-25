<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center"><u>Calculator</u></h1>
      <p
        class="text-2xl text-right mt-5 mb-3 border rounded shadow w-full h-20 p-1"
      >
        {{ calculation }}
      </p>
      <div class="mb-10 grid grid-cols-3 gap-4">
        <button
          @click="buttonPressed('1')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          1
        </button>
        <button
          @click="buttonPressed('2')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          2
        </button>
        <button
          @click="buttonPressed('3')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          3
        </button>
        <button
          @click="buttonPressed('4')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          4
        </button>
        <button
          @click="buttonPressed('5')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          5
        </button>
        <button
          @click="buttonPressed('6')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          6
        </button>
        <button
          @click="buttonPressed('7')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          7
        </button>
        <button
          @click="buttonPressed('8')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          8
        </button>
        <button
          @click="buttonPressed('9')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          9
        </button>
        <button
          @click="buttonPressed('0')"
          class="p-2 border shadow h-10 rounder col-span-2"
        >
          0
        </button>
        <button
          @click="buttonPressed('=')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          =
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const calculation = ref("");

    function buttonPressed(value) {
      calculation.value = calculation.value + value;
    }

    return { calculation, buttonPressed };
  },
};
</script>
