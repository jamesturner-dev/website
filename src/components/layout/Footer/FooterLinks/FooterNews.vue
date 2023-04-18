<template>
  <section class="footerWrapper">
    <h3> Latest News: </h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in categories" :key="item.name">
        <a :href="item.href" class="footerItem">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const categories = [
  { name: "Technology", href: "https://headlin3s.com/cat/tech" },
  { name: "The News", href: "https://headlin3s.com/cat/news" },
  { name: "Youtube News", href: "https://headlin3s.com/tag/youtube" },
  { name: "Podcasts", href: "https://headlin3s.com/tag/podcast" },
];
</script> 