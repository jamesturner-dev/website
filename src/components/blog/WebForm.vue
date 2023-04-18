<template>
  <div class="mx-auto max-w-3xl space-y-4 px-5 my-10">

    <p class="text-sky-600 text-xs">There are no little components...</p>
    <p class="text-3xl font-bold leading-8 tracking-tight text-neutral-600 sm:text-3xl">
      The Humble Web Form
    </p>

    <p class="text-lg dark:text-neutral-400 text-neutral-600">
      I am an independent web dev and have been for most of my life. If there is one thing you
      can count on as a dev, it's that you will be making a web form.
    </p>

    <LilSpacer />

    <h4 class="text-lg font-semibold text-sky-600">Web Form Submissions</h4>
    <p>
      The most common use of the web form is as a way to contact a website's owner. This
      brings up the issue of what do you do when a contact form is submitted? Traditionally
      contact forms sent a website admin an email. Maybe the forms content is also added to
      a contacts database.
    </p>
    <p>
      This made sense back when websites ran on machines that also ran mail servers, before
      everyone went SMS, etc. These days whether you are deploying to the GCP, Linode,
      CloudFlare Pages, etc. running a mail server in a pain is the ass.
    </p>
    <h4 class="font-bold text-lg dark:text-neutral-300 text-neutral-700 pt-10">
      I've approached this in a number of different ways:
    </h4>
    <ul class="p-5 m-5 pb-10 list-disc marker:text-sky-600/50">
      <li class="font-bold p-1">
        Firebase functions
      <li class="font-bold p-1">MailGun</li>
      <li class="font-bold p-1">Actual SMTP Mail Server</li>
      <li class="font-bold p-1">3rd Party Form End Points</li>
      </li>
    </ul>

    <h4 class="font-bold text-lg dark:text-neutral-300 text-neutral-700">
      Each has its pluses and minuses.
    </h4>
    <p>
      If you are using the GCP Firebase functions are awesome. They are also overkill for a simple
      contact form. If you want to database your form submissions, perform some logic on the
      submission, etc. then Firebase Functions might be the way to go. Keep in mind that Firebase
      Functions include a good deal of overhead and will increase the size of your project.
    </p>
    <p>
      <a href="https://www.mailgun.com/" target="_blank" rel="noopener noreferrer">Mailgun</a> and
      similar services provide what I think of as virtual mail servers. You can send the content
      of your webform to the Mailgun API and choose what happens next. You will need to update MX
      records to choose this option.
    </p>
    <p>
      If you are scared of MX records you are free to completely skip this section. Running a mail
      server is no joke. Even admins that know all the ins and outs of a web server can get
      tripped up trying to configure a mail server. Even if you do get it set up you have to
      make sure other mail servers trust it. It is an expensive solution as well.
    </p>
    <h4 class="font-bold text-lg dark:text-neutral-300 text-neutral-700 pt-5">
      Form Endpoints
    </h4>
    <p>
      That brings us to fourth option - third party endpoints. These are services that provide
      APIs that you can send your form data to. Basically you are subcontracting handling form
      data to a third party. I had no idea how many services like this exist. There are three
      that I can recommend:
      <a href="https://formkeep.com/" class="text-sky-600">FormKeep (formerly Formcake)</a>
    </p>
    <p class="mb-10">
      I like Formkeep the best out of all web form services that I have tried so far. I signed up
      for the paid dev plan after my testing phase - in fact I am using it for the
      <a href="/page/contact" class="text-sky-600">contact me</a> for this site.
      The other 3 services that I have tried and that work as advertised are Formspree,
      99Inbound and Formcarry. I would like to recommend Form.taxi but in my case it took hours
      for the submissions to show up.
    </p>
  </div>
</template>

<script setup>
import LilSpacer from '../shared/LilSpacer.vue';
import { ref } from 'vue';
const content = ref(
  [
    'https://imagedelivery.net/jUv0WjkQAcJxE0kRYIap3Q/bb412629-6cff-4e5c-f658-69b49d238300/public',
    'The Humble Web Form',
    'If I have to use a form allot I am going to make it as easy to use and as idiot proof as possible. I realized I was doing my users a dis-service if I put any less effort into any of the forms I created for public consumption.'
  ]
)
</script>