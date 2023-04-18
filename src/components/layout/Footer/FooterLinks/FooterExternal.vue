<template>
  <div class="mt-12 md:mt-0 footerWrapper">
    <h3 class="text-sm font-medium text-neutral-400">External:</h3>
    <ul role="list" class="mt-4 space-y-4">
      <li v-for="item in external" :key="item.name">
        <a :href="item.href" class="footerItem">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const external = [
  { name: "This Code", href: "https://github.com/jamesturner-dev/website" },
  { name: "Headlin3s", href: "https://headlin3s.com" },
  { name: "Me on Twitter", href: "https://twitter.com/JamesTurnerDev" },
  { name: "FrontEnd.us", href: "https://front-end.us/" },
]
</script>