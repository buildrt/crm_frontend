<template>
  <div id="app">
    <head-bar></head-bar>
    <hr id="titleLine">
    <main-bar></main-bar>
    <side-tab-bar></side-tab-bar>
    <keep-alive>
      <router-view v-if="isRouterAlive"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/index.css';
  import 'vue-event-calendar/dist/style.css'
  import MainBar from "./components/content/mainTabbar/mainBar";
  import HeadBar from "./components/content/headBar/HeadBar";
  import SideTabBar from "./components/content/sideTabbar/SideTabBar";

  export default {
    name: 'app',
    components: {
      SideTabBar,
      HeadBar,
      MainBar,
    },
    data() {
      return {
        transitionName: '',
        isRouterAlive: true,
        isShow: true
      }
    },
    watch: {

    },
    methods: {

    }
  }
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/Animation/appStyle.css";
  @import "assets/css/titleLine/titleLine.css";
</style>
