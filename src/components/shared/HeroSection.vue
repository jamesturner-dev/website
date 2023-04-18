<template>
	<div class="mx-auto max-w-3xl mt-10 pt-5 pb-10 pl-5 md:pl-0">
		<div class="hidden sm:mb-8 sm:flex sm:justify-center">
			<div class="fakeButton">
				<span class="text-neutral-600">
					{{ c.heading }}
					<a :href="c.link"  class="font-semibold primaryText">
						<span class="absolute inset-0" aria-hidden="true" />
						Read more <span aria-hidden="true">&rarr;
						</span>
					</a>
				</span>
			</div>
		</div>
		<h1 class="text-2xl sm:text-center leading-8"> {{ c.title }} </h1>
		<p class="m-5 text-lg leading-6 text-neutral-600 sm:text-center">
			{{ c.description }}
		</p>
		<div class="mt-10 flex gap-x-4 sm:justify-center">
			<a :href="c.primary.link" target="_blank" class="primary">
				{{ c.primary.text }} {{ ' ' }}
				<span class="text-sky-200" aria-hidden="true">&rarr;</span>
			</a>
			<a :href="c.secondary.link" class="secondary">
				{{ c.secondary.text }} {{ ' ' }}
				<span class="text-neutral-400" aria-hidden="true">&rarr;</span>
			</a>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
const c = ref(
	{
		title: 'Independent Development',
		description: "Custom solutions specifically designed and crafted according to the unique requirements and preferences of each customer.",
		heading: "",
		link: '/page/about',

		primary: {
			text: 'See This Code',
			link: 'https://github.com/jamesturner-dev/website',
		},

		secondary: {
			text: 'Contact Me',
			link: '/page/contact',
		}
	}

)
</script>