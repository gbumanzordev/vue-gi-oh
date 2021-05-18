<template>
  <div class='card'>
    <div class='card-title'>{{ card.name }}</div>
    <div class='card-content'>
      <img :src='card.images[0].image_url' alt=''>
      <p>{{ card.desc }}</p>
    </div>
    <div class='card-actions'>
      <router-link :to="'/' + card.id">View more</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object,
  },
};
</script>

<style scoped>
.card {
  border: solid 1px #ccc;
  border-radius: 4px;
}

.card-title {
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.card-title, .card-actions {
  padding: 16px;
}

.card-content > p {
  padding: 0 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

a {
  text-decoration: none;
}

img {
  width: 100%
}
</style>
