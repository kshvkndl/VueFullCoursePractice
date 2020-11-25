<template >
  <div class="m-auto">
    <h1 class="text-3xl my-2 text-center"><u>Vue Calender</u></h1>
    <section class="flex">
      <p class="p-3 text-xl" v-for="day in days" :key="day">{{ day }}</p>
    </section>
  </div>
</template>


//scripts 
<script>
export default {
  data() {
    return {
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
};
</script>