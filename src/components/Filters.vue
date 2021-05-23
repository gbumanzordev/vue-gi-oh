<template>
  <h1>Card List</h1>
  <p>Select a Filter:</p>
  <div class="filters">
    <select name="" id="" v-model="option">
      <option value="">Select an option to filter from</option>
      <option value="1">Option One</option>
      <option value="2">Option Two</option>
      <option value="3">Option Three</option>
    </select>
    <input
      type="text"
      name=""
      v-model="term"
      placeholder="Enter your match here"
    />
    <button @click="filter">Apply Filter</button>
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
    },
    clearFilters() {
      this.option = '';
      this.term = '';
      this.isFiltered = false;
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
}

.clear {
  background-color: #ccc;
  color: #000;
  margin-top: 8px;
}
</style>
