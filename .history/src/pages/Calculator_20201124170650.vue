<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl text-center"><u>Calculator</u></h1>
      <p
        class="text-2xl text-right my-4 border rounded shadow w-45 h-10 p-1 overflow-x-hidden"
        style="direction: rtl"
      >
        {{ currentNum }}
      </p>

      <div class="h-10">
        <small> {{ prevNum }} {{ selectedOperation }} {{ currentNum }} </small>
      </div>

      <div class="mb-10 grid grid-cols-4 gap-4">
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
          @click="buttonPressed('+')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          +
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
          @click="buttonPressed('-')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          -
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
          @click="buttonPressed('*')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          *
        </button>
        <button
          @click="buttonPressed('c')"
          class="p-2 border shadow h-10 rounder"
        >
          C
        </button>
        <button
          @click="buttonPressed('0')"
          class="p-2 border shadow h-10 rounder"
        >
          0
        </button>
        <button
          @click="buttonPressed('=')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          =
        </button>
        <button
          @click="buttonPressed('/')"
          class="p-2 border shadow w-10 h-10 rounder"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  setup() {
    const currentNum = ref("");
    const prevNum = ref("");
    const selectedOperation = ref("");
    const operations = ["+", "-", "*", "/"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    function buttonPressed(value) {
      if (value === "=" || value === "Enter") calculate();

      if (value === "c") clear();
      else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }

    function applyOperation(value) {
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value;
    }

    function calculate() {
      if (selectedOperation.value === "+") sum();
      else if (selectedOperation.value === "-") subtract();
      else if (selectedOperation.value === "*") multiply();
      else if (selectedOperation.value === "/") divide();

      prevNum.value = "";
      selectedOperation.value = "";
    }
    function sum() {
      currentNum.value = +prevNum.value + +currentNum.value;
    }
    function subtract() {
      currentNum.value = prevNum.value - currentNum.value;
    }
    function multiply() {
      currentNum.value = prevNum.value * currentNum.value;
    }
    function divide() {
      currentNum.value = prevNum.value / currentNum.value;
    }
    function clear() {
      currentNum.value = "";
    }

    function handleKeydown(e) {
      buttonPressed(e.key);
    }

    onMounted(() => {
      window.addEventListener("keydown", handleKeydown(e));
    });

    onUnmounted(() => {
      window.removeEventListener("keydown", handleKeydown);
    });

    return {
      currentNum,
      buttonPressed,
      selectedOperation,
      prevNum,
    };
  },
};
</script>
