<template>
  <div id="homepage">
    <home-tab-bar></home-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeTabBar from '../../components/content/homeTabbar/HomeTabBar'
  export default {
    name: "Home",
    components: {
      HomeTabBar
    }
  }
</script>

<style scoped>
  #homepage {
    margin-top: 20px;
  }
</style>
