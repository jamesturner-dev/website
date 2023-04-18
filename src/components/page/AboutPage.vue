<template>
  <section class="mx-auto flex items-center justify-center max-w-xl">

    <ul role="list" class="resume">
      <li v-for="(workHistoryItem, workHistoryItemIdx) in workHistory" :key="workHistoryItem.id">
        <div class="relative py-8">

          <span v-if="workHistoryItemIdx !== workHistory.length - 1"
            class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-neutral-700" aria-hidden="true" />
          <div class="relative flex items-start space-x-3">

            <template v-if="workHistoryItem.type === 'comment'">

              <div class="relative">
                <img
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800"
                  :src="workHistoryItem.imageUrl" alt="James Turner Dev Work History" />
              </div>

              <div class="min-w-0 flex-1">
                <div class="text-sm font-semibold text-neutral-400">
                  {{ workHistoryItem.person.name }}
                </div>
                <p class="mt-0.5 text-sm text-neutral-500">
                  {{ workHistoryItem.date }}
                </p>
                <div class="mt-2 text-sm text-neutral-500 dark:neutral-400">
                  <p>{{ workHistoryItem.comment }}</p>
                </div>
              </div>

            </template>

            <template v-else-if="workHistoryItem.type === 'tags'"
              condition="workHistoryItem.type === 'tags'">
              <div>
                <div class="relative px-1">
                  <div
                    class="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 ring-8 ring-neutral-900">
                    <CodeBracketIcon class="h-6 w-6 text-neutral-500" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div class="min-w-0 flex-1 py-0">
                <div class="text-sm leading-8 text-neutral-200">
                  <span class="mr-0.5">
                      {{ workHistoryItem.person.name }}
                    {{ " " }}
                  </span>
                  <span class="whitespace-nowrap">
                    {{ workHistoryItem.date }}
                  </span>
                  <br />
                  {{ " " }}
                  <span class="mr-0.5">
                    <template v-for="tag in workHistoryItem.tags" :key="tag.name">
                      <span
                        class="relative inline-flex items-center rounded-full border-2 border-neutral-700 px-3 py-0.5 text-sm">
                        <span class="absolute flex flex-shrink-0 items-center justify-center">
                          <span :class="[tag.color, 'h-1.5 w-1.5 rounded-full']"
                            aria-hidden="true" />
                        </span>
                        <span class="ml-3.5 font-medium text-neutral-600 hover:text-neutral-400">
                          {{ tag.name }}
                        </span>
                      </span>
                      {{ " " }}
                    </template>
                  </span>
                  <br />
                  <p class="leading-5 pt-2 text-neutral-500 ">
                    {{ whiteLabel }}
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { UserCircleIcon, CodeBracketIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
const whiteLabel = ref("White label for several regional agencies when their projects went beyond their internal abilities");
const workHistory = [
  {
    id: 2,
    type: "tags",
    person: { name: "Custom Full Stack Development", href: "#" },
    tags: [
      { name: "Vue", href: "#", color: "bg-teal-400" },
      {
        name: "NodeJS",
        href: "#",
        color: "bg-sky-600",
      },
      {
        name: "Javascript",
        href: "#",
        color: "bg-teal-600",
      },
      {
        name: "MongoDB",
        href: "#",
        color: "bg-green-700",
      },
    ],
    date: "2023",
  },
  {
    id: 1,
    type: "comment",
    person: { name: "PNZ / Atmorph", href: "#" },
    imageUrl:
      "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    comment:
      "Senior Developer.  Full-stack development - creating a progressive web application. Technologies include Node, Express, Typescript, Vue 3, MongoDb and Tailwinds.",
    date: "2021-2022",
  },
  {
    id: 2,
    type: "tags",
    person: { name: "Independent Developer", href: "#" },
    tags: [
      { name: "HTML", href: "#", color: "bg-sky-500" },
      {
        name: "CSS",
        href: "#",
        color: "bg-teal-400",
      },
      {
        name: "Javascript",
        href: "#",
        color: "bg-sky-400",
      },
      {
        name: "Python",
        href: "#",
        color: "bg-sky-600",
      },
    ],
    date: "2018-2021",
  },
  {
    id: 3,
    type: "comment",
    person: { name: "Headlin3s", href: "#" },
    imageUrl:
      "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/5d2a9a42-a176-4c18-e7a7-0e1ef33ffb00/public",
    comment: "Headlin3s collects news stories from around the world, categorizes, summarizes, and determines each story's bias. It then ranks them for relevance, reputation, and quality and posts the highest rated each day. This is my oldest running project and uses Python in addition to Javascript / Vue.",

  },
  {
    id: 4,
    type: "comment",
    person: { name: "Habooble", href: "#" },
    imageUrl:
      "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/46eef8bf-3562-4362-b23a-5c3681aec500/public",
    comment: "Imagineered, developed, and deployed innovative custom web apps.  Was tasked with taking multiple concepts and turning them into reality.  Worked with clients, designers, and project managers.",

  },
  {
    id: 5,
    type: "comment",
    person: { name: "i-click Network", href: "#" },
    imageUrl:
      "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/0b8e1569-30c7-4965-0fe5-d9785c796c00/public",
    comment: "Created and sold a banner advertising network. Responsible for everyting ( concept, planning, implinetation, servers and code ) from its genesis to it's sale.",

  },
  {
    id: 6,
    type: "comment",
    person: { name: "D2 Interactive", href: "#" },
    imageUrl:
      "https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/366ad59c-d3a0-4f28-f02e-3c7cf508a200/public",
    comment: "Co-founded what became the biggest web dev company in Mississippi at the time. We delivered six figure web apps and infrastructure for medium sized companies, universities, and organizations using PHP, MySQL / PostgreSQL, and Javascript.",
  },
];
</script>