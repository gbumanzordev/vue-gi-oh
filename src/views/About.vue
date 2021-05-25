<template>
  <div class="about">
    <h1 class="">About the Author</h1>
    <p>Hi there! 👋</p>
    <p>My name is Gerson Umanzor and I'm from El Salvador 💙.</p>

    <p>🔭 I'm currently working at Applaudo Studios as a Frontend Developer.</p>

    <p>
      🌱 I’m currently using Angular Developer as my main Technology and also
      working on improving my Vue skills. I love reading articles and learning
      new stuff. You can check my repository collection and if you have
      suggestions make sure to leave comments or contact me. I'm also trying to
      build reusable packages I believe the community can find useful.
    </p>

    <p>
      📫 You can reach me through any of the links I left in the
      <router-link to="/contact">contact</router-link> page. You can also submit
      pull requests to the packages I built to make improvements. You can also
      reach out in my social:
    </p>

    <h1 class="mt-12">About the App</h1>
    <p>
      This is a small application to strengthen the knowledge I have about
      Vue.js. It fetches the information from an API for Yu-Gi-Oh and it lists
      it
    </p>
    <p>
      The API sends back 11k records, but what it's being done here is
      displaying only 50 records and creating an "infinite scroll" look and
      feel, thus, while the user is scrolling down, more items will be added to
      the view. This will allow the app to load faster and not getting stuck on
      low resource devices.
    </p>
    <p>
      It also allows filtering by name, type, archetype and race, you can try
      that out to get the list filtered.
    </p>
  </div>
</template>
<style scoped>
h1 {
  @apply text-2xl font-bold mb-8;
}

p {
  @apply mb-2 leading-8 text-lg;
}
</style>
