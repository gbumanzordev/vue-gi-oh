<template>
  <transition-group tag="div" name='list' appear>
    <Card v-for="card in displayed" :key="card.id" :card="card" />
  </transition-group>
  <InfiniteScroll @scrolled="loadMore" v-if="cards.length" />
</template>

<script>
import Card from '@/components/Card';
import InfiniteScroll from '@/components/InfiniteScroll';

export default {
  name: 'CardList',
  components: { Card, InfiniteScroll },
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
        this.buildPagination();
      }
      this.displayed = this.cards.slice(0, this.listSize);
    },
  },
  mounted() {
    if (this.cards.length) {
      this.displayed = this.cards.slice(0, this.listSize);
      this.buildPagination();
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
    buildPagination() {
      this.pagination = {
        previousPage: 1,
        currentPage: 1,
        lastPage: Math.ceil(this.cards.length / this.listSize),
        nextPage: 2,
        totalRecords: this.cards.length,
      };
    },
  },
};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 24px;
  margin-top: 24px;
}

.list-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.list-enter-to {
  opacity: 1;
  transform: scale(1);
}

.list-enter-active {
  transition: all 0.7s ease;
}

</style>
