<template>
  <div class="wrapper" v-if="card">
    <h1>Card Details</h1>
    <h3>{{ card.name }}</h3>
    <img :src="card.card_images[0].image_url_small" alt="" />
    <p>{{ card.desc }}</p>
    <div class="info">
      <div class="detail mb-4 md:mb-2">
        <b>Type: </b> {{ card.type || 'N/A' }}
      </div>
      <div class="detail mb-4 md:mb-2">
        <b>Race: </b>{{ card.race || 'N/A' }}
      </div>
      <div class="detail mb-4 md:mb-2">
        <b>Archetype: </b> {{ card.archetype || 'N/A' }}
      </div>
    </div>
    <div class="mb-4"><router-link to="/">Go Back</router-link></div>
  </div>
  <Loader v-else>Loading card data...</Loader>
</template>

<script>
import Loader from '@/components/Loader';
export default {
  name: 'Details',
  components: { Loader },
  data() {
    return {
      card: null,
    };
  },
  created: async function () {
    const id = this.$route.params.id;
    const resp = await fetch(`${process.env.VUE_APP_API_URL}?id=` + id);
    const data = await resp.json();
    this.card = data.data[0];
  },
};
</script>

<style scoped>
.wrapper {
  @apply bg-gray-200 p-4 rounded-md shadow-2xl;
}
h1 {
  @apply text-2xl font-bold mb-4;
}

h3 {
  @apply text-xl mb-4;
}

p {
  @apply text-lg mb-4 leading-8 mt-4;
}

.info {
  @apply flex flex-col md:grid md:grid-cols-3 my-6;
}

a {
  @apply rounded-md bg-green-500 text-white p-4 my-8 hover:bg-green-600 hover:no-underline;
}
</style>
