<template>
   <div class="wrapper">
    <h1>Get in touch 😅!</h1>
    <h3>You can follow me on my social media:</h3>
    <div class="media">
      <ul>
        <li>
          <a href="https://github.com/gbumanzordev" target="_blank"
            ><i class="fab fa-github"></i
          ></a>
        </li>
        <li>
          <a href="https://twitter.com/gbumanzordev" target="_blank"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://instagram.com/gbumanzordev" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
        </li>
        <li>
          <a href="https://linkedin.com/in/bumanzor" target='_blank'><i class="fab fa-linkedin"></i></a>
        </li>
      </ul>
    </div>
    <p>
      If you want to reach through email, you can of course DM me to
      <a href="mailto:gbumanzor.dev@gmail.com" class="email"
        >gbumanzor.dev@gmail.com</a
      >, I'll be happy to get back as soon as I can 🙂
    </p>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  display: flex;
}

li {
  font-size: 32px;
}

li + li {
  margin-left: 32px;
}

a {
  color: inherit;
}

a.email {
  color: #b00000;
  text-decoration: none;
}

a.email:hover {
  text-decoration: underline;
}
</style>
