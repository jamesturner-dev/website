<template>
    <MainMenu :tabs="tabs" />
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import MainMenu from "./mainMenu.vue";
const route = useRoute(); // <--- this is the magic line
const path = computed(() => route.path);
const isCurrent = (c) => {
  return c === path.value;
};

const tabs = [
  { name: "Home", href: "/", current: isCurrent("/") },
  { name: "Resume", href: "/page/about", current: isCurrent("Page") },
  { name: "Help", href: "/page/help", current: isCurrent("/page/help") },
  { name: "Contact", href: "/page/contact", current: isCurrent("/page/help") },
  { name: "Github", href: "https://github.com/jamesturner-dev", current: isCurrent("/page/help") },
];
</script>
