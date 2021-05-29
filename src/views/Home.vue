<template>
  <h1 class="text-2xl font-bold mb-6">Card List</h1>
  <Filters @filtered="getFilters" @filter-cleared="getAllItems" />
  <div class="home" v-if="!loading">
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
    async getAllItems() {
      const response = await fetch(this.apiUrl);
      const { data } = await response.json();
      this.cards = data.map(({ card_images: images, ...card }) => ({
        ...card,
        images,
      }));
      this.loading = false;
    },
    async getFilters({ term, option }) {
      this.loading = true;
      const response = await fetch(`${this.apiUrl}?${option}=${term}`);
      const { data } = await response.json();
      this.cards = data.map(({ card_images: images, ...card }) => ({
        ...card,
        images,
      }));
      this.loading = false;
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
