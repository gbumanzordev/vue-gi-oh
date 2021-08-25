<template>
  <nav class="navbar">
    <router-link to="/">
      <h1>Vue-Gi-Oh!</h1>
    </router-link>
    <ul>
      <li v-for="route in menu" :key="route.id">
        <router-link :to="route.path">{{ route.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mainMenu } from '@/utils/main-menu';

export default {
  name: 'Navbar',
  data() {
    return { menu: mainMenu };
  },
};
</script>

<style scoped>
.navbar {
  @apply flex flex-wrap p-6 justify-between items-center sticky top-0 left-0 bg-white;
}

h1 {
  @apply text-3xl font-black text-red-700;
}


ul {
  @apply flex mt-6 md:mt-0;
}

li {
  @apply mr-6;
}

a {
  @apply hover:no-underline;
}

a.router-link-exact-active {
  @apply text-red-700;
}
</style>
