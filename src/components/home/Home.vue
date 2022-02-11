<template>
    <app-topnav></app-topnav>
    <app-header></app-header>
    <app-banner></app-banner>
</template>

<script>
  import Header from "./Header.vue"
  import Banner from "./Banner.vue"
  import TopNav from "./TopNav.vue"
  export default {
    name: "Home",
    components: {
      appHeader: Header,
      appBanner: Banner,
      appTopnav: TopNav
    },
    computed: {
    }
  };
</script>

<style scoped>
.container {
  height:100%;
}
</style>