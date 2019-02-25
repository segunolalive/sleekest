<template>
  <div class="page flex-v">
    <PageHeader/>
    <main class="grow">
      <slot></slot>
    </main>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

export default {
  components: {
    PageHeader,
    PageFooter
  }
};
</script>

<style>
.page {
  min-height: 100vh;
}

main {
  padding: 40px 0 100px;
}
</style>
