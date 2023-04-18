<template>
  <section class="mx-auto max-w-3xl space-y-4 px-5 my-10">

    <p class="text-sky-600 text-xs"> Why I choose VueJs as my preferred framework</p>
    <p class="text-3xl font-bold leading-8 tracking-tight text-neutral-600 sm:text-3xl">
      What makes Vue different
    </p>


    <p class="text-lg text-neutral-600">
      Javascript frameworks are hot right now and widely regarded as one of the best ways of
      developing front-end applications. With all these choices at our fingertips, why use Vue?
    </p>

    <LilSpacer />

    <h4 class="text-lg font-semibold text-sky-600">
      What is VueJs?
    </h4>

    <p>
      VueJs is a Javascript framework that allows developers
      to create front end web applications. With VueJs, developers can create Vue
      components which are reusable. VueJs provides two-way data binding which
      means that data can be changed in real-time without having to reload the page.
    </p>

    <h4 class="font-bold text-lg dark:text-neutral-300 text-neutral-700 pt-5">Pros of using Vue</h4>
    <ul role="list" class="mt-2 text-neutral-100 mb-10 list-disc ml-5 marker:text-sky-600/50">
      <li>It is lightweight and easy to learn</li>
      <li>You can use it for both small and large projects.</li>
      <li>The performance is good to great.</li>
      <li>It has a helpful community behind it.</li>
      <li>Easy to integrate, can even use it from a CDN.</li>
      <li>Effective state management with Pinia</li>
    </ul>
    <h4 class="font-bold text-lg dark:text-neutral-300 text-neutral-700 pt-5">Cons of using Vue</h4>
    <ul role="list" class="text-neutral-100 mb-10 pb-5 list-disc ml-5 marker:text-sky-600/50 mt-2">
      <li>Not the most popular framework</li>
      <li>It doesn't have as many features as some of the other frameworks</li>
    </ul>
    <p>
      Vue.js is simple to get started with. It has a small learning curve and is easier to
      pick up for newcomers to front-end development. That said, it is also powerful enough
      to be used for large-scale front-end while remaining performant.
    </p>
    <p>
      Vue.js is very flexible and can be used in a variety of ways.
      It boasts excellent performance thanks to its lightweight nature and efficient
      rendering mechanism. The resulting applications are fast and responsive.
    </p>

  </section>
</template>

<script setup>
import { ref } from 'vue';
import LilSpacer from '../shared/LilSpacer.vue';
const content = ref(
  [
    'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/bb412629-6cff-4e5c-f658-69b49d238300/public',
    'VueJs',
    'VueJs is a framework that is both lightweight and flexible. It is easy to learn and can be used for both small and large projects. Imho VueJs provides the perfect balance between power and simplicity.'
  ]
)
</script>