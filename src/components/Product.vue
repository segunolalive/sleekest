<template>
  <figure class="flex-v">
    <img src="../assets/shoe.png" alt>
    <figcaption class="flex-v grow">
      <span>{{product.name}}</span>
      <span class="stars">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          version="1.1"
          style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;"
          viewBox="0 0 333 416.25"
          x="0px"
          y="0px"
          fill-rule="evenodd"
          clip-rule="evenodd"
          v-for="(star, index) in fullStars"
          :key="index"
          class="filled"
        >
          <g>
            <path
              d="M175 14l35 107 106 1c9,0 12,11 6,17l-86 67 32 107c2,8 -7,14 -14,10l-88 -64 -86 64c-7,5 -16,-2 -14,-10l31 -107 -85 -67c-7,-5 -3,-16 5,-17l107 -2 34 -106c3,-8 14,-7 17,0z"
            ></path>
          </g>
          <text
            x="0"
            y="348"
            fill="#000000"
            font-size="5px"
            font-weight="bold"
            font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
          >Created by Richard</text>
          <text
            x="0"
            y="353"
            fill="#000000"
            font-size="5px"
            font-weight="bold"
            font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
          >from the Noun Project</text>
        </svg>

        <svg
          class="unfilled"
          v-if="halfStar"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 30"
          x="0px"
          y="0px"
        >
          <path
            d="M12,3.7689h0l2.50082,3.649a2.00581,2.00581,0,0,0,1.08423.78771l4.2432,1.25082-2.69762,3.506a2.00587,2.00587,0,0,0-.41414,1.27459l.12163,4.422-4.168-1.48216A1.99467,1.99467,0,0,0,12,17.06134C12,17,11.99722,3.7692,11.99722,3.7692L12,3.7689m0-1a.993.993,0,0,0-.82487.43468l-2.50081,3.649a1,1,0,0,1-.54212.39387L3.889,8.49726a1,1,0,0,0-.5098,1.569l2.6976,3.506a1,1,0,0,1,.20708.6373l-.12163,4.422a.9979.9979,0,0,0,1.33467.96969l4.168-1.48215a1.00016,1.00016,0,0,1,.6701,0l4.168,1.48215a.9979.9979,0,0,0,1.33467-.96969l-.12163-4.422a1,1,0,0,1,.20708-.6373l2.6976-3.506a1,1,0,0,0-.5098-1.569L15.8678,7.24644a1,1,0,0,1-.54212-.39387l-2.50081-3.649A.993.993,0,0,0,12,2.76891Z"
          ></path>
        </svg>
      </span>
      <span>₦{{product.price}}</span>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: ["product"],
  name: "product",
  data() {
    return { fullStars: [], halfStar: false };
  },
  created() {
    const [fullStars, half] = this.product.rating
      ? String(this.product.rating).split(".")
      : [];
    this.fullStars = fullStars && new Array(Number(fullStars)).fill(true);
    this.halfStar = half && true;
  }
};
</script>

<style scoped>
figure {
  height: 400px;
  padding: 5px 10px;
  margin: 0;
  padding: 30px 40px;
}
@media screen and (min-width: 800px) {
  .figure {
    width: 25%;
    margin: 0;
  }
}

img {
  width: 100%;
  height: 75%;
}

figcaption {
  justify-content: space-around;
}

svg {
  width: 15px;
  height: 20px;
  fill: goldenrod;
}
</style>
