<template>
  <div class="hidden sm:block mt-5 desktopMenu">
    <nav class="flex space-x-8">
      <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :class="[
        tab.current
          ? 'border-emerald-400 primaryText text-xs'
          : 'border-transparent text-neutral-400 text-xs hover:text-neutral-100 hover:border-sky-400',
        'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
      ]" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }} </a>
    </nav>
  </div>
</template>

<script setup>
defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});
</script>