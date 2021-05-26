<template>
  <h1 class="text-2xl font-bold mb-6">Card List</h1>
  <div class="home" v-if="!loading">
    <Filters @filtered="getFilters" @filter-cleared="getAllItems" />
    <CardList :cards="cards" />
  </div>
  <Loader v-else>Loading cards...</Loader>
</template>

<script>
import CardList from '@/components/CardList';
import Filters from '@/components/Filters';
import Loader from '@/components/Loader';

export default {
  name: 'Home',
  components: { CardList, Filters, Loader },
  data() {
    return {
      cards: [],
      apiUrl: '',
      loading: true,
    };
  },
  created: async function () {
    this.apiUrl = process.env.VUE_APP_API_URL;
    await this.getAllItems();
  },
  methods: {
    getAllItems: async function () {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      this.cards = data.data.map(({ name, desc, card_images, id }) => {
        return {
          id,
          name,
          desc,
          images: card_images,
        };
      });
      this.loading = false;
    },
    getFilters: async function ({ term, option }) {
      const response = await fetch(`${this.apiUrl}?${option}=${term}`);
      const data = await response.json();
      this.cards = data.data.map(({ name, desc, card_images, id }) => {
        return {
          id,
          name,
          desc,
          images: card_images,
        };
      });
    },
  },
};
</script>
<style scoped>
.home {
  box-sizing: border-box;
  margin-bottom: 24px;
}
</style>
