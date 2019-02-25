<template>
  <div id="app">
    <HomePage/>
  </div>
</template>

<script>
import HomePage from "@/components/HomePage";

export default {
  name: "app",
  components: {
    HomePage
  }
};
</script>

<style>
:root,
body {
  width: 100%;
  height: 100%;
}
:root * {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  color: #242424;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: inherit;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.flex {
  display: flex;
}
.flex-v {
  display: flex;
  flex-direction: column;
}

.flex-center {
  align-items: center;
  justify-content: center;
}

.grow {
  flex-grow: 1;
}

.t-center {
  text-align: center;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
