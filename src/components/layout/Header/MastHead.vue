<template>
  <div class="pl-5 md:pl-0">
    <h1 class="text-xl -mb-1">
      <a :href="siteInfo.url" class="subTitle">
        {{ siteInfo.subTitle }}<span class="secondaryText">{{ siteInfo.title }}</span>
      </a>
    </h1>
    <a class="grayLink" :href="siteInfo.repository">
      <span class="text-xs">{{ siteInfo.aText }}</span>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const siteInfo = ref(
  {
    subTitle: "JamesTurner",
    title: '.dev',
    url: '/',
    repository: 'https://github.com/jamesturner-dev/front-end.us',
    aText: 'Modern, Custom Full Stack Development'
  }
);
</script>