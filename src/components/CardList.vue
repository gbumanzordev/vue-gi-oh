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
  data() {
    return {
      displayed: [],
      listSize: 50,
      pagination: {
        previousPage: 1,
        currentPage: 1,
        lastPage: 1,
        nextPage: null,
        totalRecords: 0,
      },
    };
  },
  watch: {
    cards: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.pagination = {
          previousPage: 1,
          currentPage: 1,
          lastPage: Math.ceil(newValue.length / this.listSize),
          nextPage: 2,
          totalRecords: newValue.length,
        };
       }
      this.displayed = this.cards.slice(0, this.listSize);
    },
  },
  mounted() {
    if (this.cards.length) {
      this.displayed = this.cards.slice(0, this.listSize);
    }
  },
  methods: {
    loadMore() {
      const { currentPage, lastPage } = this.pagination;
      if (currentPage < lastPage) {
        this.pagination.currentPage = currentPage + 1;
        this.displayed = [
          ...this.cards.slice(0, this.listSize * this.pagination.currentPage),
        ];
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
