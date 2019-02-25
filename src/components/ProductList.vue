<template>
  <section class="flex">
    <product v-for="product in products" :product="product" :key="product.id"></product>
  </section>
</template>

<script>
import Product from "./Product";

export default {
  name: "product-list",
  props: ["products"],
  components: { Product }
};
</script>

<style>
</style>
