<template>
  <div class="footerWrapper">
    <h3> Navigation: </h3>
    <ul role="list" class="mt-4 space-y-4 text-neutral-500">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href" class="footerItem">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const categories = [
  { name: "Home Page", href: "/" },
  { name: "My Resume", href: "/page/about" },
  { name: "Help Page", href: "/page/help" },
  { name: "Contact Me", href: "/page/contact" },
];
</script>