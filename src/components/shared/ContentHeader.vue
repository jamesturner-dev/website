<template>
  <div class="sm:border-b sm:border-neutral-700 grid place-items-center mb-5">
    <h4 class="text-2xl font-bold tracking-tight text-neutral-600">
      {{ content.heading }}
    </h4> 
    <div class="subheading">
      <p class="subheader">
      {{ content.subHeading}}
    </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>