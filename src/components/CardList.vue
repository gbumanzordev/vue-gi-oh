<template>
  <div class="list">
    <Card v-for="card in displayed" :key="card.id" :card="card" />
    <Observer @scrolled="loadMore" v-if="cards.length" />
  </div>
</template>

<script>
import Card from '@/components/Card';
import Observer from '@/components/Observer';

export default {
  name: 'CardList',
  components: { Observer, Card },
  props: {
    cards: Array,
  },
  watch: {
    cards: function (newValue, oldValue) {
      this.page = 1;
      if (newValue !== oldValue) {
        this.displayed = this.cards.slice(0, this.listSize);
      }
    },
  },
  data() {
    return {
      displayed: [],
      listSize: 50,
      page: 1,
    };
  },
  mounted() {
    if (this.cards.length) {
      this.displayed = this.cards.slice(0, this.listSize);
    }
  },
  methods: {
    loadMore() {
      if (this.cards.length - this.listSize * this.page >= this.listSize) {
        this.page = this.page + 1;
        this.displayed = [...this.cards.slice(0, this.listSize * this.page)];
      }
    },
  },
};
</script>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 24px;
  margin-top: 24px;
}
</style>
