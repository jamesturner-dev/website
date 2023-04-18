<template>
  <section class="pt-5">
    <div v-if="pageRoute == 'walled-garden'">
      <WalledGarden />
    </div>
    <div v-if="pageRoute == 'fast-websites'">
      <FastWebsites />
    </div>
    <div v-if="pageRoute == 'web-form'">
      <WebForm />
    </div>
    <div v-if="pageRoute == 'why-vue'">
      <WhyVue />
    </div>
    <div v-if="pageRoute == 'python-podcasts'">
      <PythonPodcasts />
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import WebForm from "../components/blog/WebForm.vue";
import WhyVue from "../components/blog/WhyVue.vue";
import FastWebsites from "../components/blog/FastWebsites.vue";
import PythonPodcasts from "../components/blog/PythonPodcasts.vue";
import WalledGarden from "../components/blog/WalledGarden.vue";
const route = useRoute();
const pageRoute = route.params.name; 
</script>
