<template>
  <div class="mt-5 ">
    <HeroSection />
    <div class="flex">
      <div></div>
      <BlogEntries />
    </div>
    <TheSpacer />
    <ProjectSection />
  </div>
  <TheSpacer />
  <PreFooter />
</template>

<script setup>
import HeroSection from '../components/shared/HeroSection.vue';
import BlogEntries from '../components/shared/BlogEntries.vue';
import ProjectSection from '../components/shared/ProjectSection.vue';
import TheSpacer from '../components/shared/TheSpacer.vue';
import PreFooter from '../components/shared/PreFooter.vue';
</script>
