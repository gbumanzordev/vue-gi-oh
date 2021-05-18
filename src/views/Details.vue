<template>
  <div class='wrapper' v-if='card'>
    <h1>Card Details</h1>
    <h3>{{ card.name }}</h3>
    <img :src='card.card_images[0].image_url_small' alt=''>
    <p>{{ card.desc }}</p>
    <div class='info'>
      <div class='detail'><b>Type: </b> {{ card.type || 'N/A' }}</div>
      <div class='detail'><b>Race: </b>{{ card.race || 'N/A' }}</div>
      <div class='detail'><b>Archetype: </b> {{ card.archetype || 'N/A' }}</div>
    </div>
    <router-link to='/'>Go Back</router-link>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return {
      card: null,
    };
  },
  created: async function() {
    const id = this.$route.params.id;
    const resp = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=' + id);
    const data = await resp.json();
    this.card = data.data[0];
  },
};
</script>

<style scoped>
.info {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
}
</style>
