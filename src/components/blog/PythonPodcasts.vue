<template>
  <div class="mx-auto space-y-4 px-5">
    
    <h4>
      When you just can't get enough Python
    </h4>
    
    <p class="text-3xl font-bold leading-8 tracking-tight text-neutral-600 sm:text-3xl">
      Python Podcasts
    </p>

    <p class="text-lg text-neutral-600 dark:text-neutral-400">
      I don't do Python day to day anymore, but it is the first programming
      language that I fell in love with. If you love it too give these podcasts a listen.
    </p>


    <h4 class="">
      <a href="https://talkpython.fm/">Talk Python to Me</a>
    </h4>
    
    <p>
      I am sure that most of you are already familiar with Talk Python To Me: A podcast on
      Python and related technologies. If not, or if you have never tuned in - stop
      reading this right now and click that link. Talk Python to Me is a casual 45
      minute conversation with industry experts hosted by Michael Kennedy. Highly
      recommended.
    </p>
    
    <h4>
      <a href="https://www.pythonpodcast.com/">The Python Podcast.__init</a>
    </h4>
    
    <p>
      A podcast about Python and the people who make it great. Hosted by @TobiasMacey.
      Each episode digs deep into Python technical implementation, edge cases, and lessons
      learned. Tobias ensures that you get the most value for your time spent listening.
    </p>

    <h4>
      <a href="https://www.stitcher.com/podcast/teaching-python">
        Now for something completely different....
      </a>
    </h4>

    <p>
      Teaching Python is a podcast by Kelly Paredes and Sean Tibor about their adventures
      teaching middle schoolers the Python programming language.
    </p>

    <h4>
      <a href="https://www.kennethreitz.org/import-this/">
        Import This
      </a>
    </h4>

    <p>
      Import This is a podcast from no less than Kennneth Reitz and Alex Gaynor. They wanted
      there to be more tech podcasts. So they made our own - we should be grateful.
    </p>

    <h4>
      <a href="https://pythonbytes.fm/">
        Python Bytes
      </a>
    </h4>

    <p>
      Not content to publish one great Python Podcast, Michael Kennedy, along with Brian Okken,
      deliver the Python Bytes podcast directly to your earbuds. Stay up to date on Python
      developer news by subscribing to get the best Python picks delivered weekly.
    </p>

    <h4 class="font-bold text-lg text-neutral-600 dark:text-neutral-400 pt-5">
      Defunct Python Podcasts
    </h4>

    <p>
      There are a bunch of cool Python related podcasts that have not been maintained but still
      have some interesting content to listen to:
    </p>

    <ul class="text-lg text-neutral-100 mb-10 list-disc ml-5 marker:text-teal-600">
      <li>
        <a href="http://frompythonimportpodcast.com/">From Python Import Podcast</a>
      </li>
      <li>
        <a href="https://djangochat.com/">Django Chat</a>
      </li>
      <li>
        <a href="http://radiofreepython.com/">Radio Free Python</a>
      </li>
      <li>
        <a href="http://frompythonimportpodcast.com/">Python for Informatics</a>
      </li>
    </ul>

  </div>
</template>

<script setup>

import { ref } from 'vue';
const content = ref(
  [
    'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/bb412629-6cff-4e5c-f658-69b49d238300/public',
    'Python Podcasts',
    'I love Podcasts. I love Python. Outside of the JRE all my favorite podcasts have something to do with Python. Here is a short list of what I think are the best Python Podcasts.'
  ]
)
</script>