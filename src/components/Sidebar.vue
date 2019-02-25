<template>
  <aside class="sidebar">
    <h2>Categories</h2>
    <ul>
      <li v-for="category in categories" :key="category.name">
        <a href="/">
          {{category.name}}
          <span aria-label>&gt;</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "sidebar",
  props: ["categories"]
};
</script>

<style>
.sidebar {
  width: 25%;
  max-height: 100%;
  overflow-y: hidden;
  box-shadow: 0 0 5px 0px #eeeeee;
}

.sidebar h2 {
  background: #56af56;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  padding: 20px 10px;
}

.sidebar ul {
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.sidebar li {
  list-style-type: none;
  height: 60px;
  margin: 0;
  padding: 10px 25px 10px 5px;
  border-bottom: 1px solid #eeeeee;
}

.sidebar a {
  position: relative;
  display: inline-block;
  padding: 5px;
  width: 100%;
}
.sidebar span {
  right: 0;
  position: absolute;
  font-size: 0.7rem;
  line-height: 1rem;
}
</style>
