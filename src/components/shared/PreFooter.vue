<template>
  <figure class="mx-auto max-w-2xl py-12 px-5 mt-5 items-center">

    <ContentHeader :content="heading" />

    <p class="sr-only">Thanks for coming by.</p>

    <blockquote class="mt-5 text-xl font-semibold leading-8 tracking-tight text-neutral-700">
      <p class="text-center">
        I'm passionate about building things that make a difference, that exist 
        <a href="/blog/walled-garden" class="text-neutral-500">outside of the walled garden</a>
        app stores controlled by 2 corporations and like sharing them.
        I am always looking for new opportunities to learn and grow.
        If you have a project that you think I would be a good fit for,
        <a href="/page/contact" class="text-neutral-500">please reach out</a>.
      </p>
    </blockquote>
    <figcaption class="mt-10 flex justify-center gap-x-6">
      <img class="h-12 w-12 rounded-full bg-gray-50"
        src="https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/9ee74749-b972-442c-3dfd-de8504a74400/public"
        alt="James Turner Dev" />
      <div class="text-sm leading-6">
        <div class="font-semibold primaryText">
          <a href="https://twitter.com/JamesTurnerDev">James Turner Dev</a>
        </div>
        <div class="text-gray-600">Chronic Developer</div>
      </div>
    </figcaption>
  </figure>
</template>

<script setup>
import ContentHeader from './ContentHeader.vue';
const heading = {
  heading: 'Thanks for stopping by.',
  subHeading: 'No, Really.',
}

</script>