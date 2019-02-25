<template functional>
  <figure class="flex-v">
    <img src="../assets/shoe.png" alt>
    <figcaption class="flex-v grow">
      <span>{{props.product.name}}</span>
      <span class="stars">
        <slot></slot>
      </span>
      <span>₦{{props.product.price}}</span>
    </figcaption>
  </figure>
</template>

<style scoped>
figure {
  width: 25%;
  height: 400px;
  padding: 30px 40px;
  margin: auto;
}

img {
  width: 100%;
  height: 75%;
}

figcaption {
  justify-content: space-around;
}
</style>
