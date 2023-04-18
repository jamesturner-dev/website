<template>
  <section class="md:flex sm:relative items-center mx-auto relative max-w-3xl">
    <div class="items-start">
      <a href="/">
        <img class="h-40 mr-2"
          src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/8193b4ac-87e4-4d11-ad94-7c8663f7c700/public"
          alt="James Turner Dev" />
      </a>
    </div>
    <div class="items-end">
      <MastHead />
      <HeaderMenu />
    </div>
  </section>
</template>

<script setup>
import HeaderMenu from "./Header/Menus/HeaderMenu.vue";
import MastHead from './Header/MastHead.vue';
</script>
