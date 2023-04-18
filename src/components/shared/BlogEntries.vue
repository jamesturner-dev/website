<template>
  <div class="mx-auto max-w-lg p-5 mt-10 pb-10">
    <ContentHeader :content="heading" />
    <ul role="list" class="divide-y divide-gray-700">
      <li v-for="item in activityItems" :key="item.commit" class="py-4">
        <div class="flex items-center gap-x-3">
          <img :src="item.user.imageUrl" alt="" class="h-6 w-6 flex-none rounded-full bg-black" />
          <h3 class="flex-auto truncate text-sm font-semibold leading-6">
            <a :href="item.url" class="primaryText">{{ item.user.name }}</a>
          </h3>
          <time :datetime="item.dateTime" class="flex-none text-xs text-neutral-500">{{ item.date }}</time>
        </div>
        <p class="mt-3 truncate text-sm text-neutral-500">
          {{ item.projectName }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import ContentHeader from './ContentHeader.vue';
const activityItems = [
  {
    user: {
      name: 'Outside of the Walled Garden',
      imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdlYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    date: '2023-04-18',
    projectName: 'Independent Development is the Future of Software',
    url: '/blog/walled-garden',
  },
  {
    user: {
      name: 'Fast Websites',
      imageUrl: 'https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    projectName: 'Why do you focus so much on website speed? ',
    date: '2023-01-23',
    url: '/blog/fast-websites',
  },
  {
    user: {
      name: 'Why Vue',
      imageUrl:
        'https://images.unsplash.com/photo-1593720216276-0caa6452e004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGphdmFzY3JpcHR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
    },
    projectName: 'Why VueJs is my prefered framework.',
    date: '2023-01-23',
    url: '/blog/why-vue',
  },
  {
    user: {
      name: 'Python Podcasts',
      imageUrl: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY2fHxweXRob258ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
    },
    projectName: 'Python Podcasts that I have enjoyed.',
    date: '2023-02-22',
    url: '/blog/python-podcasts',
  },
  {
    user: {
      name: 'Web Form',
      imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdlYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    date: '2023-03-24',
    projectName: 'There are no small coponents.  Everything is important',
    url: '/blog/web-form',
  },
]

const heading = {
  heading: 'Dev Words',
  subHeading: 'A selection of my blog entries.',
}

</script>