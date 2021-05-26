<template>
  <div class="wrapper">
    <h1 class="font-bold text-2xl mb-8">Get in touch!</h1>
    <h3 class="mb-4 text-xl">You can follow me on my social media:</h3>
    <div class="media">
      <ul>
        <li v-for="link in socialLinks" :key="link.name">
          <a :href="link.url" target="_blank"><i :class="link.icon"></i></a>
        </li>
      </ul>
    </div>
    <p>
      If you want to reach through email, you can of course DM me to
      <a href="mailto:gbumanzor.dev@gmail.com" class="email"
        >gbumanzor.dev@gmail.com</a
      >, I'll be happy to get back as soon as I can 🙂
    </p>
  </div>
</template>

<script>
import { socialLinks } from '@/utils/social-links.js';

export default {
  name: 'Contact',
  data() {
    return { socialLinks };
  },
};
</script>

<style scoped>
.wrapper {
  @apply flex flex-col content-center text-center justify-center h-full mt-48;
}

ul {
  @apply mb-4 flex content-center justify-center;
}

li {
  @apply text-3xl;
}

li + li {
  margin-left: 32px;
}

a.email {
  @apply no-underline text-red-800;
}

a.email:hover {
  @apply hover:underline;
}

p {
  @apply mb-2 leading-8 text-lg;
}
</style>
