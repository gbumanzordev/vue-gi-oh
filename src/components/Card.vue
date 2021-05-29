<template>
    <router-link :to="`/${card.id}`">
      <div class="card">
        <h1>{{ card.name }}</h1>
        <img :src="card.images[0].image_url_small" alt="" />
        <p class="p-6">{{ card.desc }}</p>
        <div class="p-3"></div>
      </div>
    </router-link>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  @apply flex py-4 px-6 font-medium;
}

.card {
  @apply w-full mx-auto bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg;
}

img {
  @apply m-0 ml-0 w-full;
}

p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
