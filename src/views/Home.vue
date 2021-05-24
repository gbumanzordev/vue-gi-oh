<template>
  <div class="home">
    <Filters @filtered="getFilters" @filter-cleared="getAllItems" />
    <CardList :cards="cards" />
  </div>
</template>

<script>
import CardList from '@/components/CardList';
import Filters from '@/components/Filters';

export default {
  name: 'Home',
  components: { CardList, Filters },
  data() {
    return {
      cards: [],
      apiUrl: '',
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
