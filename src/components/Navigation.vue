<template>
  <div class="container">
    <nav class="flex flex-center">
      <a href="/" class="logo">Sleekest</a>
      <div class="search-container flex grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 125"
          style="enable-background:new 0 0 100 100;"
          xml:space="preserve"
        >
          <path
            d="M90.4,84L75.8,69.5C87.2,54.9,86,34.1,72.9,21c-6.9-6.9-16.1-10.7-25.9-10.7c-9.8,0-19,3.8-25.9,10.7  c-6.9,6.9-10.7,16.1-10.7,25.9c0,9.8,3.8,19,10.7,25.9c6.9,6.9,16.1,10.7,25.9,10.7c8.1,0,16.1-2.7,22.5-7.8L84,90.4  c0.9,0.9,2,1.3,3.2,1.3c1.2,0,2.3-0.5,3.2-1.3C92.2,88.7,92.2,85.8,90.4,84z M74.6,46.9c0,7.4-2.9,14.3-8.1,19.5  c-5.2,5.2-12.2,8.1-19.5,8.1s-14.3-2.9-19.5-8.1c-5.2-5.2-8.1-12.2-8.1-19.5c0-7.4,2.9-14.3,8.1-19.5s12.2-8.1,19.5-8.1  c7.4,0,14.3,2.9,19.5,8.1C71.7,32.6,74.6,39.5,74.6,46.9z"
          ></path>
        </svg>
        <input type="text" class="grow" placeholder="Search for products">
        <button class="t-center">SEARCH</button>
      </div>
      <div class="icons">
        <a href="/" class="flex-v flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 640"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
          >
            <g>
              <ellipse
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -182.082 392.0923)"
                cx="382.256"
                cy="415.839"
                rx="49.974"
                ry="49.974"
              ></ellipse>
              <path
                d="M461,148.797H146.666l-11.028-55.482c-5.229-27.308-29.456-47.127-57.606-47.127H51c-5.523,0-10,4.477-10,10   s4.477,10,10,10h27.031c18.87,0,34.481,12.702,37.977,30.958l40.409,203.309c4.636,23.324,25.261,40.252,49.041,40.252h182.283   c22.725,0,42.616-15.354,48.37-37.338c0.015-0.056,0.029-0.112,0.042-0.168l34.563-142.039c0.726-2.981,0.042-6.13-1.854-8.543   C466.967,150.206,464.068,148.797,461,148.797z"
              ></path>
              <ellipse
                transform="matrix(0.9732 -0.2298 0.2298 0.9732 -89.9332 59.2831)"
                cx="209.611"
                cy="415.839"
                rx="49.974"
                ry="49.974"
              ></ellipse>
            </g>
          </svg>
          <span>cart</span>
        </a>
        <a href="/" class="flex-v flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 125"
            enable-background="new 0 0 100 100"
            xml:space="preserve"
          >
            <path
              d="M50,33.9c0-12.1,9.8-21.9,21.9-21.9s21.9,9.8,21.9,21.9c0,12.1-7.3,21.8-29.2,36.5C54.5,77.1,50,80.2,50,92.3  c0-12.1-4.5-15.2-14.6-21.9C13.5,55.8,6.2,46,6.2,33.9c0-12.1,9.8-21.9,21.9-21.9S50,21.8,50,33.9"
            ></path>
          </svg>
          <span>wishlist</span>
        </a>
        <a href="/" class="flex-v flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 125"
            style="enable-background:new 0 0 100 100;"
            xml:space="preserve"
          >
            <g>
              <path d="M42,88c5.1,0,9.2-4,9.2-9H32.8C32.8,84,36.9,88,42,88z"></path>
              <path
                d="M68.5,61.1c-0.6-0.6-1.1-1.3-1.5-2c0,0,0-0.1,0-0.1c0-0.5-0.2-1-0.5-1.3c-0.1-0.5-0.2-1.1-0.2-1.7c0,0,0-2.2,0-5.4   C59.1,47.7,54,40.7,54,32.5c0-2.9,0.7-5.7,1.8-8.2C54.9,23.6,54,23,53,22.5C52.7,16.7,47.9,12,42,12c-5.9,0-10.7,4.7-11,10.5   C22.5,27,17.7,36.6,17.7,45.2c0,5.9,0,10.8,0,10.8c0,1.9-0.8,3.8-2.2,5.1l-2.2,2c-2.9,2.6-3,7.2-0.2,9.9h0c1.3,1.3,3,2,4.8,2h19.5   h9.2h19.5c1.8,0,3.5-0.7,4.8-2h0c2.7-2.8,2.6-7.3-0.2-9.9L68.5,61.1z M42,16c3.1,0,5.7,2,6.6,4.8c-1.9-0.5-3.9-0.8-6-0.8h-1.3   c-2.1,0-4.1,0.3-6,0.8C36.3,18,38.9,16,42,16z"
              ></path>
              <circle cx="72.5" cy="33.5" r="14.5"></circle>
            </g>
          </svg>
          <span>notifications</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation"
};
</script>

<style scoped>
.logo {
  padding: 10px;
  margin-left: -10px;
  width: 200px;
  font-weight: 300;
  font-style: oblique;
  color: #56af56;
  font-size: 2rem;
}

.search-container {
  position: relative;
  height: 50px;
}

.search-container svg {
  width: 30px;
  fill: rgb(182, 177, 177);
  position: absolute;
  transform: translate(50%, 10px);
  left: 0;
}

.search-container input {
  padding-left: 60px;
  border-radius: 3px 0 0 3px;
  border: none;
  background-color: #eeeeee;
}

.search-container button {
  width: 120px;
  font-weight: 700;
  font-size: 1rem;
  color: #eeeeee;
  border-radius: 0 3px 3px 0;
  border: none;
  background-color: #f3d347;
}

svg {
  width: 40px;
  height: 40px;
}

.icons {
  width: 20%;
  justify-content: flex-end;
  display: flex;
}

.icons a {
  display: inline-flex;
  padding: 10px;
  font-size: 0.6rem;
  color: #5a5656;
}
.icons a:last-of-type {
  margin-right: -10px;
}
</style>
