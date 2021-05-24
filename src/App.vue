<template>
  <div class='container'>
    <Navbar />
    <div class='content'>
      <router-view />
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: { Navbar },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.content {
  padding: 24px;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
