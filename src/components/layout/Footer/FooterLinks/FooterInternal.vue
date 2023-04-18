<template>
  <div class="mt-12 md:mt-0 footerWrapper">
    <h3 class="text-sm font-medium text-neutral-400">Articles:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in users" :key="item.name">
        <a :href="item.href" class="footerItem">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
 const users = [
    { name: "Walled Garden", href: "/blog/walled-garden" },
    { name: "Why Vue?", href: "/blog/why-vue" },
    { name: "Fast WebSites", href: "/blog/fast-websites" },
    { name: "The Web Form", href: "/blog/web-form" },
  ]
</script>