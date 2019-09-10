<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabbar/MainTabBar";

  export default {
    name: 'app',
    components: {
      MainTabBar,
    },
    data() {
      return {
        transitionName: ''
      }
    },
    watch: {
      $route(to, from) {
        // 如果to索引大于from索引,判断为前进状态,反之则为后退状态,若下个页面的索引为0，则不加动画
        if(to.meta.index > from.meta.index){
          //设置动画名称
          this.transitionName = 'slide-left';
        }else if(to.meta.index === 0){
          this.transitionName=''
        } else {
          this.transitionName = 'slide-right';
        }
      }
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/Animation/appStyle.css";

</style>
