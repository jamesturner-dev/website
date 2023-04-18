<template>
  <div class="relative overflow-hidden mt-10 mx-auto py-5">

    <PageHeader :content="content" />

    <div class="mx-auto max-w-xl">

      <form class="mt-8 space-y-6" action="https://formkeep.com/f/23560d560f52" 
        accept-charset="UTF-8"
        enctype="multipart/form-data" 
        method="POST">
        
        <input type="hidden" name="utf8" value="✓">
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email Address</label>
            <input type="email" id="email-address" name="email" autocomplete="email" required=""
              class="formInput focus:outline-none focus:ring focus:ring-sky-800 relative mb-1 rounded-none rounded-t-md  placeholder-neutral-500"
              placeholder="Your Email Address" />
          </div>
          <div>
            <label for="name" class="sr-only">Your Name</label>
            <input id="name" name="name" type="text" autocomplete="current-Name" required=""
              class="formInput focus:outline-none focus:ring focus:ring-sky-800 relative mb-1 rounded-none rounded-b-md border-2 placeholder-neutral-500"
              placeholder="Your Name" />
          </div>
          <div>
            <label for="message" class="sr-only">Message</label>
            <textarea id="message" name="message" rows="5" cols="33" required=""
              class="formInput focus:outline-none focus:ring focus:ring-sky-800 relative mb-1 rounded-none rounded-t-md border-2 placeholder-neutral-500"
              placeholder="Message" />
          </div>
        </div>

        <div>
          <button type="submit" class="bigButton primary">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            </span>
            Send it across the internets!
          </button>
        </div>
      </form>

    </div>

  </div>
</template>

<script setup>
import PageHeader from './PageHeader.vue';
const faqs = [
  {
    id: 1,
    question: "Why do you use Vue.js",
    answer: "Vue has a small learning curve and is easier to pick up for newcomers to front-end development. That said, it is also powerful enough to be used for large-scale front-end's while remaining performant.",
    link: 'https://jamesturner.dev/blog/why-vue',
  },
  {
    id: 2,
    question: 'Why did you make this?',
    answer: 'Everytime I start a new project I find myself looking for the same components. I wanted to create a bare bones template that I could use to bootstrap every new project I start..',
  },
  {
    id: 3,
    question: 'Can anyone use it?',
    answer: "Yes, it's open source and free to use. If you want to make a contribution, please do! Just fork the repo and submit a pull request.",
    link: 'https://github.com/jamesturner-dev/front-end.us',
  },
  {
    id: 4,
    question: 'Wait, wait I have more questions!',
    answer: 'Click on over to the Help page and I will do my best to answer your questions.',
    link: '/page/help',
  },

]

const content = {
  heading: "Contact Me",
  subHeading: "Happy to discuss your project, Vue3, MongoDb, Headlin3s, etc.."
}

</script>