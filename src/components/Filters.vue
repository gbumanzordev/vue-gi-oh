<template>
  <div class="bg-gray-100 p-8 rounded-md flex flex-col">
    <p class="mb-4 font-bold">Select a Filter:</p>
    <div class="flex flex-col md:flex-row">
      <select
        v-model="option"
        class="form-select block border p-3 rounded w-full mb-4 md:mr-4 md:mb-0"
      >
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
        class="py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block shadow-md focus:outline-none w-full mb-4 md:mb-0"
      />
      <button
        @click="filter"
        class="bg-red-800 text-white px-3 py-2 rounded-md hover:bg-red-900 focus:outline-none md:ml-4 whitespace-nowrap"
        :disabled="term === '' || option === ''"
      >
        Apply Filter
      </button>
    </div>
    <div>
      <button
        class="bg-gray-600 text-white px-3 rounded-md hover:bg-gray-700 py-2 focus:outline-none mt-6"
        v-if="isFiltered"
        @click="clearFilters"
      >
        Clear Filter <i>({{ option }}: {{ term }})</i>
      </button>
    </div>
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
  flex-wrap: wrap;
}

select,
input {
  outline: 0;
  padding: 8px;
}

button[disabled] {
  cursor: not-allowed;
}
</style>
