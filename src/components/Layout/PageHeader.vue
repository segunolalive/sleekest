<template functional>
  <header class="header">
    <div class="flex container flex-right">
      <ul>
        <li>
          <a href="/">How it works</a>
        </li>
        <li>
          <a href="/">Log in</a>
        </li>
        <hr>
        <li>
          <a href="/">Sign Up</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 10px 30px;
  box-shadow: 0 0 5px 5px #eeeeee;
}
.header ul {
  list-style-type: none;
}

li {
  padding: 5px;
  margin-left: 5px;
}

li:last-of-type {
  color: #56af56;
}

@media screen and (min-width: 800px) {
  .flex-right {
    flex-direction: row;
    justify-content: flex-end;
  }
  .header ul {
    display: flex;
  }
}
</style>
