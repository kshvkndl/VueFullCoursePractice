<template >
  <div class="m-auto">
    <h1 class="text-3xl my-2 text-center"><u>Vue Calender</u></h1>
    <section class="flex justify-between mx-3">
      <p class="font-bold">{{ currentMonthName }}</p>
      <p class="font-bold">{{ currentYear }}</p>
    </section>

    <section class="flex">
      <p
        class="h-10 text-center text-xl my-2"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>

    <section class="flex flex-wrap">
      <p
        class="h-10 text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <p
        class="h-10 text-center"
        style="width: 14.28%"
        v-for="num in daysInMonth()"
        :key="num"
      >
        {{ num }}
      </p>
    </section>

    <section class="flex justify-between text-white">
      <button class="px-2 border rounded bg-blue-600" @click="prev()">
        Prev
      </button>
      <button class="px-2 border rounded bg-blue-600" @click="next()">
        Next
      </button>
    </section>
  </div>
</template>


//scripts 
<script>
export default {
  data() {
    return {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },

  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth, 0).getDate();
    },

    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },

    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },

    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
  },

  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        "default",
        {
          month: "long",
        }
      );
    },
  },
};
</script>