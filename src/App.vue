<template>
  <div class="min-h-full">
    <main class="flex-1 relative mx-auto">
      <div class="theContainer">
        <Header />
        <router-view :key="$route.fullPath" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>

import Header from "./components/layout/TheHeader.vue";
import Footer from "./components/layout/TheFooter.vue";
</script>
