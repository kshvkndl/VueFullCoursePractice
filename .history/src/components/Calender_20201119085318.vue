<template >
  <div class="m-auto">
    <h1 class="text-2xl text-center"><u>Vue Calender</u></h1>
    <section class="flex">
      <p v-for="day in days" :key="day">{{ day }}</p>
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