<template>
  <h1>Card List</h1>
  <p>Select a Filter:</p>
  <div class="filters">
    <select v-model="option">
      <option value="">Select an option to filter from</option>
      <option value="name">Name</option>
      <option value="type">Type</option>
      <option value="archetype">Archetype</option>
      <option value="race">Race</option>
    </select>
    <input
      type="text"
      name=""
      v-model="term"
      placeholder="Enter your match here"
    />
    <button @click="filter" :disabled="term === '' || option === ''">
      Apply Filter
    </button>
  </div>
  <div>
    <button class="clear" v-if="isFiltered" @click="clearFilters">
      Clear Filters
    </button>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  emits: ['filter-cleared', 'filtered'],
  data() {
    return {
      isFiltered: false,
      option: '',
      term: '',
    };
  },
  methods: {
    filter() {
      this.isFiltered = true;
      this.$emit('filtered', { option: this.option, term: this.term });
    },
    clearFilters() {
      this.option = '';
      this.term = '';
      this.isFiltered = false;
      this.$emit('filter-cleared');
    },
  },
};
</script>

<style scoped>
.filters {
  display: flex;
}

select {
  padding: 8px;
}

select,
input {
  outline: 0;
}

button {
  border: 0;
  background-color: #e00000;
  font-weight: bold;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.5s;
}

button:hover {
  background-color: #b00000;
}

button[disabled] {
  cursor: not-allowed;
}

.clear {
  background-color: #ccc;
  color: #000;
  margin-top: 8px;
}

.clear:hover {
  background-color: #ddd;
}
</style>
