<template>
  <div id="homepage">
    <side-tab-bar></side-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import SideTabBar from '../../components/content/sideTabbar/SideTabBar'

  export default {
    name: "Home",
    components: {
      SideTabBar
    }
  }
</script>

<style scoped>
  #homepage {
    margin-top: 20px;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
