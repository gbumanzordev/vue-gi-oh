<template>

  <h1>Card List</h1>
  <div class='list'>
    <Card v-for='card in cards' :key='card.id' :card='card' />
  </div>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'CardList',
  components: { Card },
  props: {
    cards: Array,
  },
};
</script>

<style scoped>

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 24px;
}
</style>
