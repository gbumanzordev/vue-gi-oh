<template>
  <div class='home'>
    <CardList :cards='cards' />
  </div>
</template>

<script>

import CardList from '@/components/CardList';

export default {
  name: 'Home',
  components: { CardList },
  data() {
    return {
      allItems: [],
      cards: [],
      offset: 65,
    };
  },
  created: async function() {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
    const data = await response.json();
    this.allItems = data.data.map(({ name, desc, card_images, id }) => {
      return {
        id,
        name,
        desc,
        images: card_images,
      };
    });
    this.cards = [...this.allItems.slice(0, this.offset)];
  },
};
</script>
