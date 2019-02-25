<template>
  <Layout>
    <navigation/>
    <div class="container flex wrapper">
      <Sidebar :categories="categories"/>
      <section class="hero flex-v">
        <img src="../assets/hompage-dark.jpg">
        <div class="flex-v hero-text">
          <h1>New Collection</h1>
          <p>Check out the coolest new arrivals for this season. Ranging from the most ragged of denim jackets to the comfy remote pants, we've got you covered.</p>
          <a href="/" class="cta t-center">SHOP NOW</a>
        </div>
      </section>
    </div>
    <section class="explore container flex-v">
      <h4>Explore Popular Categories</h4>
      <product-list :products="popular"/>
    </section>
    <section class="explore container flex-v">
      <h4>Explore New Stuff</h4>
      <product-list :products="latest"/>
    </section>
  </Layout>
</template>

<script>
import HTTP from "../utils/HTTP";
import Layout from "./Layout";
import Navigation from "./Navigation";
import ProductList from "./ProductList";
import Sidebar from "./Sidebar";

export default {
  name: "hompage",
  components: { Layout, Navigation, ProductList, Sidebar },
  data() {
    return {
      categories: [],
      products: [
        { name: "foo", price: 30 },
        { name: "foo", price: 30 },
        { name: "foo", price: 30 },
        { name: "foo", price: 30 },
        { name: "foo", price: 30 },
        { name: "foo", price: 30 },
        { name: "foo", price: 30 },
        { name: "foo", price: 30 },
        { name: "foo", price: 30 },
        { name: "foo", price: 30 },
        { name: "foo", price: 30 },
        { name: "foo", price: 30 }
      ]
    };
  },
  mounted() {
    HTTP.get("/categories")
      .then(response => (this.categories = response.data))
      .catch(() => {});
    HTTP.get("/products")
      // .then(response => (this.products = response.data))
      .catch(() => {});
  },
  computed: {
    popular() {
      return this.products.slice(0, 4);
    },
    latest() {
      return this.products.slice(4, 8);
    }
  }
};
</script>

<style>
.wrapper {
  margin: 40px auto !important;
}
.hero {
  color: white;
  justify-content: center;
  padding-left: 40px;
  position: relative;
  width: 75%;
}

.hero img {
  object-fit: cover;
  height: 100%;
}

.hero-text {
  width: calc(100% - 40px);
  position: absolute;
  top: 0;
  left: 40px;
  padding-left: 40px;
  transform: translate(0, 70%);
  height: 50%;
}

.hero-text h1 {
  margin: 0;
  font-size: 2.5rem;
  text-transform: uppercase;
}

.hero p {
  max-width: 60%;
}
.cta {
  width: 120px;
  white-space: nowrap;
  padding: 10px;
  margin-top: 20px;
  font-weight: 700;
  color: #f3d347;
  border: 3px solid currentColor;
  border-radius: 4px;
}

.explore {
  box-shadow: 0 0 5px 0px #eeeeee;
  margin-bottom: 40px !important;
}

.explore h4 {
  padding-left: 20px;
  font-size: .9rem;
  font-weight: 600;
  text-transform: uppercase;
  color: gray;
  height: 40px;
  margin-bottom: 0;
  border-bottom: 2px solid #eeeeee;
}
</style>
