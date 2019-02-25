<template functional>
  <footer class="flex-v footer">
    <section class="main-footer container">
      <article class="flex-v">
        <h1>Sleekest</h1>
        <p>Get the best of urban fashion at the lowest of pricing</p>
      </article>
      <article class="flex-v">
        <h1>Contact</h1>
        <a href="/">Registration</a>
        <a href="/">About Us</a>
        <a href="/">Contact Us</a>
      </article>
      <article class="flex-v">
        <h1>Help</h1>
        <a href="/">Privacy Policy</a>
        <a href="/">How it works</a>
        <a href="/">Terms & Conditions</a>
      </article>
      <article class="flex-v">
        <h1>Stay Connected</h1>
        <a href="/">Facebook</a>
        <a href="/">Twitter</a>
        <a href="/">Instagram</a>
      </article>
      <article class="flex-v">
        <a href="#header">Back to top</a>
      </article>
    </section>
    <section class="flex flex-center foot-note t-center">
      <small>&copy; 2018 segunolalive</small>
    </section>
  </footer>
</template>

<style scoped>
.footer {
  color: #b9b9b9;
  background-color: #373a3c;
}
a {
  display: inline-block;
  padding: 5px 0;
  font-size: 0.8rem;
}
.main-footer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 80px 0 60px;
}

.foot-note {
  height: 100px;
  background-color: #2b2f31;
}

@media screen and (min-width: 800px) {
  .main-footer {
    flex-direction: row;
  }
  article:first-of-type {
    max-width: 25%;
  }
}
</style>
