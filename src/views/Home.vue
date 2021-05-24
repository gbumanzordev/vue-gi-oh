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
    };
  },
  created: async function () {
    await this.getAllItems();
  },
  methods: {
    getAllItems: async function () {
      const response = await fetch(
        'https://db.ygoprodeck.com/api/v7/cardinfo.php'
      );
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
      const response = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?${option}=${term}`
      );
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
