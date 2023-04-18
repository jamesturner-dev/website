<template>
  <div class="mx-auto max-w-xl mt-10 pt-10">

    <ContentHeader :content="heading" />

    <ul role="list" class="mt-10">
      <li v-for="project in projects" :key="project.id" class="projects">
        <div class="flex items-center border-b border-neutral-900 bg-neutral-900/20 p-3">
          <img :src="project.imageUrl" :alt="project.name" class="h-14 w-14 flex-none rounded-lg bg-white object-cover" />
          <div class="font-bold leading-6 text-neutral-600 ml-5">
            <a :href="project.url" class="primaryText">
              {{ project.name }}
            </a>
            <p class="projectDescription">
              {{ project.description }}
            </p>
              
          </div>
          <Menu as="div" class="relative ml-auto">
            <MenuButton class="-m-2.5 block p-2.5 text-neutral-500 hover:text-neutral-500">
              <span class="sr-only">Open options</span>
              <EllipsisHorizontalIcon class="h-5 w-5" aria-hidden="true" />
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-neutral-900/80 py-2 shadow-lg">
                <MenuItem v-slot="{ active }">
                <a :href="project.url"
                  :class="[active ? 'bg-neutral-500' : '', 'block px-3 py-1 text-sm leading-6 text-neutral-200']">
                  View<span class="sr-only">, {{ project.name }}</span>
                </a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <a href="#"
                  :class="[active ? 'bg-neutral-500' : '', 'block px-3 py-1 text-sm leading-6 text-neutral-200']">
                    Details
                  <span class="sr-only">, {{ project.name }}</span>
                </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <dl class="-my-3 divide-y divide-neutral-700/40 px-6 py-4 text-sm leading-6">
          <div class="flex justify-between gap-x-4 py-3">
            <dt class="text-neutral-600">Deployed</dt>
            <dd class="text-neutral-400">
              <time :datetime="project.lastInvoice.dateTime">{{ project.lastInvoice.date }}</time>
            </dd>
          </div>
          <div class="flex justify-between gap-x-4 py-3">
            <dt class="text-neutral-600">Stack</dt>
            <dd class="flex items-start gap-x-2">
              <div class="font-medium text-neutral-400">{{ project.lastInvoice.amount }}</div>
            </dd>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisHorizontalIcon } from '@heroicons/vue/20/solid'
import ContentHeader from './ContentHeader.vue'

const heading = {
  heading: 'Projects',
  subHeading: 'A selection of (some of) my projects...',
}

const statuses = {
  Deployed: 'text-green-600 bg-green-50 ring-green-600/20',
  Progress: 'text-neutral-500 bg-neutral-50 ring-neutral-200',
  Overdue: 'text-red-600 bg-red-50 ring-red-600/10',
}

const projects = [
  {
    id: 1,
    name: 'Headlin3s Alternative News',
    imageUrl: 'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/e7d88198-268c-4a48-b348-b49af80a6d00/public',
    lastInvoice: { date: 'January 13, 2020', dateTime: '2022-12-13', amount: 'Node . Express . Vue . Mongo', status: 'Deployed' },
    url: 'https://headlin3s.com',
    description: 'A news aggregator that uses a custom algorithm to rank articles by their popularity and relevance.'
  },
  {
    id: 2,
    name: 'Scraping Trump Tweets',
    imageUrl: 'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/71e4c3dd-0c37-406a-69b7-ade338eb9800/public',
    lastInvoice: { date: 'Marrch 22, 2023', dateTime: '2023-01-22', amount: 'Python . Pandas . Requests . BeautifulSoup', status: 'Progress' },
    url: 'https://trumptweets.net',
    description: 'A set of Python scripts that scrapes Twitter and stores the data in a MongoDB database.'
  },
  {
    id: 3,
    name: 'Ambiguous Redirect',
    imageUrl: 'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/e9d91c01-f32d-4db3-a36d-26f34582ff00/public',
    lastInvoice: { date: 'July 16, 2021', dateTime: '2023-01-23', amount: 'WordPress, Python, TensorFlow', status: 'Paid' },
    url: "https://ambiguousredirect.com",
    description: 'A WordPress blog that uses custom AI to create and seo optimize content.'
  },
  {
    id: 4,
    name: 'FrontEnd.us',
    imageUrl: 'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/ddf395ae-9b7e-46ef-01a2-ad7bec32d300/public',
    lastInvoice: { date: 'October 13, 2022', dateTime: '2023-01-23', amount: 'Vue3, Tailwind CSS', status: 'Paid' },
    url: "https://frontend.us",
    description: 'A set of Vue3 components that I made available for other people to use.  I also use it to test out new features and ideas.'
  },
]
</script>