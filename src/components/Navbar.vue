<template>
  <nav>
    <div class="brand">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg"
        alt=""
      />
    </div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.brand {
  margin-right: 32px;
}

img {
  width: 160px;
}

div + ul {
  padding: 0;
}

nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 24px;
  flex-wrap: wrap;
}

ul {
  list-style: none;
  display: flex;
}

a {
  text-decoration: none;
  color: inherit;
  font-size: 20px;
}

li + li {
  margin-left: 16px;
}

a.router-link-exact-active {
  font-weight: bold;
}
</style>
